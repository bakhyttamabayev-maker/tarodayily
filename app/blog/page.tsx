import Link from "next/link";
import { getPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getPosts();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Блог</h1>
      {posts.map((post) => (
        <article key={post.slug} className="card">
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.description}</p>
          <p className="text-xs text-slate-500">{post.tags.join(", ")}</p>
          <Link className="link" href={`/blog/${post.slug}`}>Читать</Link>
        </article>
      ))}
    </div>
  );
}
