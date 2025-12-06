import ProjectListItem from "@/components/custom/project.list.item";
import projects from "@/content/projects/index.json";

export default function Projects() {
  return (
    <div className="pt-40">
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
