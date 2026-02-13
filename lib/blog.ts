import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "content/blog");

export function getPosts() {
  return fs.readdirSync(contentDir).filter((f) => f.endsWith(".md")).map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
    const { data } = matter(raw);
    return { slug, ...(data as { title: string; description: string; tags: string[]; date: string }) };
  });
}

export async function getPost(slug: string) {
  const fullPath = path.join(contentDir, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return { slug, ...(data as { title: string; description: string; tags: string[]; date: string }), contentHtml: processed.toString() };
}
