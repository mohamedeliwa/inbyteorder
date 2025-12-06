import ProjectListItem from "@/components/custom/project.list.item";
import projects from "@/content/projects/index.json";

export default function Projects() {
  return (
    <div className="pt-25">
      <h1 className="text-4xl">
        Projects<span className="text-(--identity-color) text-6xl">.</span>
      </h1>
      <br />
      <div className="flex flex-wrap justify-between gap-5">
        {projects.map(({ slug, title, date, description }) => {
          return (
            <ProjectListItem
              key={slug}
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
