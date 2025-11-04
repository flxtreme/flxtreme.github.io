### Overview

When building backend APIs, performance optimization can dramatically improve your application's responsiveness. Slow, sequential operations and repeated config fetches lead to sluggish APIs and poor user experience. In this post, I'll show you how to optimize your Node.js APIs using `Promise.all` for parallel operations, preloading configurations, and implementing effective server-side caching.

### Table of Contents
└── [Use of Promise.all](#use-of-promiseall)  
          ├── [The Problem: Sequential API Calls](#the-problem-sequential-api-calls)  
          ├── [The Solution: Promise.all](#the-solution-promiseall)  
          └── [Handling Errors Gracefully](#handling-errors-gracefully)  
└── [Preloading & Caching Configurations](#preloading-caching-configurations)  
          ├── [Preload + Cache](#preload-cache)  
          ├── [Server-Side Caching](#server-side-caching)  
          ├── [Multi-Level Caching Strategy](#multi-level-caching-strategy)  
└── [Key Takeaways](#key-takeaways)


---

## Use of Promise.all

`Promise.all` runs multiple promises in parallel and waits for all of them to finish.

### The Problem: Sequential API Calls

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

### The Solution: Promise.all

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

### Handling Errors Gracefully

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
    user: userResult.status === 'fulfilled' ? userResult.value : null,
    posts: postsResult.status === 'fulfilled' ? postsResult.value : [],
    comments: commentsResult.status === 'fulfilled' ? commentsResult.value : [],
  };
}
```

Now even if the comments query fails, you still get the user and posts data!

---

## Preloading & Caching Configurations

Preloading configurations ensures all critical data, such as API keys, environment variables, and database settings, is loaded and ready **before** your server handles any requests. This approach improves performance, reduces latency, and prevents redundant external calls.

### Preload + Cache

Fetching configurations from a database or external service on every request is inefficient, wasteful and can slow down your app. Instead, load them once at startup and store them in memory for quick access.

In this example, we use `node-cache` for simplicity, but you can use any caching solution (e.g., Redis, memory-cache, or in-memory maps):

```javascript
import NodeCache from 'node-cache';

// Initialize a cache with a 1-hour time-to-live for stored configurations
const configCache = new NodeCache({ stdTTL: 3600 });

/**
 * Preload all configurations at server startup.
 * Uses Promise.all to fetch multiple configuration types in parallel.
 */
async function preloadConfigs() {
  console.log('Preloading configurations...');
  
  // Fetch app configuration, feature flags, and API keys concurrently
  const [appConfig, featureFlags, apiKeys] = await Promise.all([
    db.config.findOne({ type: 'app' }),
    db.config.findMany({ type: 'feature_flag' }),
    db.config.findMany({ type: 'api_key' }),
  ]);
  
  // Store fetched configurations in cache for fast retrieval
  configCache.set('app_config', appConfig);
  configCache.set('feature_flags', featureFlags);
  configCache.set('api_keys', apiKeys);
  
  console.log('✅ Configurations preloaded and cached successfully');
}

// Execute configuration preload on server startup
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

### Server-Side Caching

For frequently accessed data, caching helps reduce database load and improve response times. Instead of querying the database repeatedly, store data in memory and reuse it when possible.

```javascript
import NodeCache from 'node-cache';

// Create a cache instance with default TTL of 5 minutes and periodic cleanup
const dataCache = new NodeCache({ 
  stdTTL: 300, // 5 minutes
  checkperiod: 60 // Clean expired keys every 60 seconds
});

/**
 * Retrieve a user from cache or database.
 * If not found in cache, fetch from DB and store in cache.
 */
async function getCachedUser(userId) {
  const cacheKey = `user:${userId}`;
  
  // 1. Attempt to retrieve from cache
  const cachedUser = dataCache.get(cacheKey);
  if (cachedUser) {
    console.log('✅ Cache HIT:', cacheKey);
    return cachedUser;
  }
  
  // 2. Cache miss: fetch from database
  console.log('⚡ Cache MISS:', cacheKey);
  const user = await db.users.findById(userId);
  
  // 3. Store result in cache for future requests (10-minute TTL)
  dataCache.set(cacheKey, user, 600);
  
  return user;
}
```

### Multi-Level Caching Strategy

For high-performance applications, a **multi-level caching strategy** combines preloading static configurations (loaded once at startup) and runtime caching (for frequently accessed, dynamic data). This dual-layer approach minimizes database hits, reduces latency, and ensures faster, more consistent responses.

```javascript
// utils/cache-manager.ts

import NodeCache from 'node-cache';

/**
 * CacheManager
 * -------------------------
 * A unified caching system that handles both static configuration preloading
 * and runtime data caching for improved performance and scalability.
 */
class CacheManager {
  constructor() {
    // Separate caches for configurations and dynamic data
    this.configCache = new NodeCache({ stdTTL: 3600 }); // Config cache (1 hour)
    this.dataCache = new NodeCache({ stdTTL: 300 });   // Data cache (5 minutes)
  }

  /**
   * Preload static configurations at startup.
   * Ideal for application settings, flags, and limits that rarely change.
   */
  async preloadConfigs() {
    console.log('🚀 Preloading configuration data...');

    const configs = await Promise.all([
      this.loadConfig('app_settings'),
      this.loadConfig('feature_flags'),
      this.loadConfig('rate_limits'),
    ]);

    console.log(`✅ Preloaded ${configs.length} configuration sets.`);
  }

  /** Load and cache a single configuration by key */
  async loadConfig(key) {
    const config = await db.config.findOne({ key });
    this.configCache.set(key, config);
    return config;
  }

  /** Retrieve cached configuration */
  getConfig(key) {
    return this.configCache.get(key);
  }

  /**
   * Retrieve runtime data with caching.
   * Fetches from DB only if cache is missing or expired.
   * Useful for dynamic data like user sessions, API responses, or analytics.
   */
  async getCachedData(key, fetchFunction, ttl = 300) {
    let data = this.dataCache.get(key);

    if (data) {
      console.log('✅ Cache HIT:', key);
      return data;
    }

    console.log('⚡ Cache MISS:', key);
    data = await fetchFunction();
    this.dataCache.set(key, data, ttl);
    return data;
  }

  /**
   * Manually invalidate a cache key.
   * Use when data updates in the database and must be refreshed in memory.
   */
  invalidate(key) {
    this.dataCache.del(key);
    console.log(`🧹 Cache invalidated for key: ${key}`);
  }
}

// Initialize global cache manager
const cache = new CacheManager();

// Preload configurations on server startup
await cache.preloadConfigs();

// Example: Using runtime cache in API route
app.get('/api/users/:id', async (req, res) => {
  const userId = req.params.id;

  const user = await cache.getCachedData(
    `user:${userId}`,
    () => db.users.findById(userId),
    600 // Cache for 10 minutes
  );

  res.json(user);
});
```

By layering preloaded configuration caching with runtime caching, your server achieves both **speed and reliability**, handling high traffic efficiently while ensuring fresh, consistent data.

---

## Key Takeaways

1. **Use `Promise.all`** for executing independent database queries or API calls in parallel to maximize performance and minimize total response time.
2. **Use `Promise.allSettled`** when you want to continue execution even if some requests fail—ideal for optional or non-critical data sources.
3. **Preload configurations** during server startup to avoid redundant database calls and ensure essential settings are immediately available.
4. **Cache frequently accessed data** using tools like **node-cache** or **Redis**, setting appropriate TTL (time-to-live) values to balance freshness and efficiency.
5. **Adopt a multi-level caching strategy** that combines preloaded configurations (static data) with on-demand runtime caching (dynamic data) for the best performance.
6. **Monitor and log cache hit rates** to evaluate caching effectiveness and adjust TTLs or invalidation strategies accordingly.

These techniques have consistently reduced API response times by up to **70%** in production systems, significantly improving scalability and reliability. The best part? Each method is straightforward to implement and yields immediate performance gains.

