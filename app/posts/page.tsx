import PostListItem from "@/components/custom/post.list.item";
import posts from "@/content/posts/index.json";

export default function Posts() {
  return (
    <div className="pt-25">
      <h1 className="text-4xl">
        Posts<span className="text-(--identity-color) text-6xl">.</span>
      </h1>
      <br />
      {posts.map(({ description, date, slug, title }) => (
        <PostListItem
          key={slug}
          slug={slug}
          title={title}
          date={date}
          description={description}
        />
      ))}
    </div>
  );
}
