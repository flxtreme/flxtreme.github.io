# Optimizing APIs: Promise.all, Preloading & Caching Config

When building backend APIs, performance optimization can dramatically improve your application's responsiveness. Slow, sequential operations and repeated config fetches lead to sluggish APIs and poor user experience. In this post, I'll show you how to optimize your Node.js APIs using `Promise.all` for parallel operations, preloading configurations, and implementing effective server-side caching.

---

## The Problem: Sequential API Calls

Let's start with a common anti-pattern I see in backend code:

```javascript
async function getUserData(userId) {
  const user = await db.users.findById(userId);
  const posts = await db.posts.findByUserId(userId);
  const comments = await db.comments.findByUserId(userId);
  
  return { user, posts, comments };
}
```

**What's wrong here?** Each database query waits for the previous one to complete. If each query takes 50ms, you're looking at 150ms total. That's unnecessarily slow!

---

## The Solution: Promise.all

`Promise.all` allows us to run multiple independent operations simultaneously:

```javascript
async function getUserData(userId) {
  const [user, posts, comments] = await Promise.all([
    db.users.findById(userId),
    db.posts.findByUserId(userId),
    db.comments.findByUserId(userId),
  ]);
  
  return { user, posts, comments };
}
```

**Result:** All three queries run in parallel. Total time? ~50ms instead of 150ms. That's a **3x performance boost** with just a few lines of code!

---

## Handling Errors Gracefully

One downside of `Promise.all` is that if *any* promise rejects, the entire operation fails. For non-critical data, use `Promise.allSettled` instead:

```javascript
async function getUserData(userId) {
  const results = await Promise.allSettled([
    db.users.findById(userId),
    db.posts.findByUserId(userId),
    db.comments.findByUserId(userId),
  ]);
  
  const [userResult, postsResult, commentsResult] = results;
  
  return {
    user: userResult.status === 'fulfilled' 
      ? userResult.value 
      : null,
    posts: postsResult.status === 'fulfilled' 
      ? postsResult.value 
      : [],
    comments: commentsResult.status === 'fulfilled' 
      ? commentsResult.value 
      : [],
  };
}
```

Now even if the comments query fails, you still get the user and posts data!

---

## Preloading Configuration on Server Startup

Fetching configuration from a database or external service on every request is wasteful. Instead, preload all configs when your server starts:

```javascript
import NodeCache from 'node-cache';

const configCache = new NodeCache({ stdTTL: 3600 }); // 1 hour TTL

// Preload configs on server startup
async function preloadConfigs() {
  console.log('Preloading configurations...');
  
  const [appConfig, featureFlags, apiKeys] = await Promise.all([
    db.config.findOne({ type: 'app' }),
    db.config.findMany({ type: 'feature_flag' }),
    db.config.findMany({ type: 'api_key' }),
  ]);
  
  configCache.set('app_config', appConfig);
  configCache.set('feature_flags', featureFlags);
  configCache.set('api_keys', apiKeys);
  
  console.log('Configurations loaded successfully');
}

// Initialize on server start
preloadConfigs();
```

Now your API routes can access configs instantly:

```javascript
app.get('/api/data', (req, res) => {
  const appConfig = configCache.get('app_config');
  const featureFlags = configCache.get('feature_flags');
  
  // Use configs without hitting the database
  if (featureFlags.newFeature) {
    // Handle new feature
  }
  
  res.json({ data: 'fast response' });
});
```

---

## Server-Side Caching with node-cache

For frequently accessed data, implement caching to avoid repeated database queries:

```javascript
import NodeCache from 'node-cache';

const dataCache = new NodeCache({ 
  stdTTL: 300, // 5 minutes default TTL
  checkperiod: 60 // Check for expired keys every 60 seconds
});

async function getCachedUser(userId) {
  const cacheKey = `user:${userId}`;
  
  // Check cache first
  let user = dataCache.get(cacheKey);
  if (user) {
    console.log('Cache HIT:', cacheKey);
    return user;
  }
  
  // Cache miss - fetch from database
  console.log('Cache MISS:', cacheKey);
  user = await db.users.findById(userId);
  
  // Store in cache
  dataCache.set(cacheKey, user, 600); // Cache for 10 minutes
  
  return user;
}
```

---

## Advanced: Multi-Level Caching Strategy

Combine preloading and runtime caching for maximum performance:

```javascript
import NodeCache from 'node-cache';

class CacheManager {
  constructor() {
    this.configCache = new NodeCache({ stdTTL: 3600 });
    this.dataCache = new NodeCache({ stdTTL: 300 });
  }
  
  // Preload static configs on startup
  async preloadConfigs() {
    const configs = await Promise.all([
      this.loadConfig('app_settings'),
      this.loadConfig('feature_flags'),
      this.loadConfig('rate_limits'),
    ]);
    
    console.log('Preloaded configs:', configs.length);
  }
  
  async loadConfig(key) {
    const config = await db.config.findOne({ key });
    this.configCache.set(key, config);
    return config;
  }
  
  getConfig(key) {
    return this.configCache.get(key);
  }
  
  // Cache runtime data with TTL
  async getCachedData(key, fetchFunction, ttl = 300) {
    let data = this.dataCache.get(key);
    
    if (!data) {
      data = await fetchFunction();
      this.dataCache.set(key, data, ttl);
    }
    
    return data;
  }
  
  invalidate(key) {
    this.dataCache.del(key);
  }
}

const cache = new CacheManager();

// Preload on server start
cache.preloadConfigs();

// Use in routes
app.get('/api/users/:id', async (req, res) => {
  const userId = req.params.id;
  
  const user = await cache.getCachedData(
    `user:${userId}`,
    () => db.users.findById(userId),
    600 // 10 minutes
  );
  
  res.json(user);
});
```

---

## Key Takeaways

1. **Use Promise.all** for independent database queries or API calls to run them in parallel
2. **Use Promise.allSettled** when some failures are acceptable
3. **Preload configurations** on server startup to avoid repeated database queries
4. **Cache frequently accessed data** with node-cache and appropriate TTLs
5. **Implement multi-level caching** for configs (preloaded) and runtime data (cached on-demand)
6. **Monitor cache hit rates** to ensure your caching strategy is effective

These techniques have helped me reduce API response times by up to 70% in production applications. The best part? They're simple patterns you can implement today!
