import ProjectListItem from "@/components/custom/project.list.item";

export default function Projects() {
  return (
    <div className="pt-40">
      <div className="flex flex-wrap justify-between gap-5">
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
        ].map(({ key, title, date, description }) => {
          return (
            <ProjectListItem
              key={key}
              title={title}
              date={date}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
}
