import posts from "@/content/posts/index.json";
import markdownStyles from "@/styles/markdown.module.css";

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
    <div className={`pt-25 ${markdownStyles["markdown"]}`}>
      <Post />
    </div>
  );
}
