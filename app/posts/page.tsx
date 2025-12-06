import PostListItem from "@/components/custom/post.list.item";

export default function Posts() {
  return (
    <div className="pt-40">
      <h1 className="text-4xl">
        Posts<span className="text-(--identity-color) text-6xl">.</span>
      </h1>
      <br />
      {[
        {
          key: "first_post",
          date: "2025-03-30",
          title: "First Post",
          description:
            "ForitfyMD is designed to give doctors easy access to practical, everyday medical knowledge and management algorithms for medical,conditions curated by doctors for doctors Enter your email below to",
        },
        {
          key: "second_post",
          date: "2025-03-30",
          title: "Second Post",
          description:
            "ForitfyMD is designed to give doctors easy access to practical, everyday medical knowledge and management algorithms for medical,conditions curated by doctors for doctors Enter your email below to",
        },
        {
          key: "third_post",
          date: "2025-03-30",
          title: "Third Post",
          description:
            "ForitfyMD is designed to give doctors easy access to practical, everyday medical knowledge and management algorithms for medical,conditions curated by doctors for doctors Enter your email below to",
        },
      ].map(({ description, date, key, title }) => (
        <PostListItem
          key={key}
          title={title}
          date={date}
          description={description}
        />
      ))}
    </div>
  );
}
