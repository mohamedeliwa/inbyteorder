export function generateStaticParams() {
  const posts = ["first_post", "second_post", "third_post"];
  return posts.map((slug) => ({
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
  return <Post />;
}
