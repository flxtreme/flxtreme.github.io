import BlogSlugView from "./BlogSlugView";

export function generateStaticParams() {
  const blogs = [
    { slug: "optimizing-api" },
  ];
  
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return <BlogSlugView slug={resolvedParams.slug} />;
}