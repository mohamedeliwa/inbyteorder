import projects from "@/content/projects/index.json";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({
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
  const { default: Project } = await import(`@/content/project/${slug}.mdx`);
  return <Project />;
}
