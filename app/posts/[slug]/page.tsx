import posts from "@/content/posts/index.json";
import markdownStyles from "@/styles/markdown.module.css";
import { Space_Grotesk } from "next/font/google";

const space_grotesk = Space_Grotesk();

export function generateStaticParams() {
  return posts.map(({ slug }) => ({
    slug,
  }));
}

export const dynamicParams = false;

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/posts/${slug}.mdx`);
  return (
    <div
      className={`pt-25 ${space_grotesk.className} ${markdownStyles["markdown"]}`}
    >
      <Post />
    </div>
  );
}
