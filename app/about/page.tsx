import introData from "@/content/about/intro.json";
import experiencesData from "@/content/about/experience.json";
import educationData from "@/content/about/education.json";
import activitiesData from "@/content/about/activities.json";
import skillsData from "@/content/about/skills.json";
import { ResumeSectionI } from "@/types/resume.section.interface";
import {
  ResumeSection,
  ResumeSectionContent,
  ResumeSectionContentDetails,
  ResumeSectionContentList,
  ResumeSectionHeader,
} from "@/components/custom/resume.section";

export default function About() {
  const intro: ResumeSectionI = introData;
  const experiences: ResumeSectionI[] = experiencesData;
  const education: ResumeSectionI[] = educationData;
  const activities: ResumeSectionI[] = activitiesData;
  const skills: ResumeSectionI = skillsData;

  return (
    <div className="pt-25">
      <h1 className="text-4xl">
        About me<span className="text-(--identity-color) text-6xl">.</span>
      </h1>
      <br />
      {intro.details?.map((p) => (
        <>
          <p key={p}>{p}</p>
          <br />
        </>
      ))}
      <br />
      <hr />
      <br />
      <h1>Professional Experiences</h1>
      <br />
      {experiences.map(
        (
          { channel, from, primaryTitle, secondaryTitle, to, where, list },
          i,
        ) => (
          <ResumeSection key={i}>
            <ResumeSectionHeader
              primaryTitle={primaryTitle}
              secondaryTitle={secondaryTitle}
              from={from}
              to={to}
              where={where}
              channel={channel}
            />
            <ResumeSectionContent>
              <ResumeSectionContentList list={list} />
            </ResumeSectionContent>
          </ResumeSection>
        ),
      )}
      <br />
      <hr />
      <br />
      <h1 className="text-2xl font-bold">
        <span className="text-(--identity-color)">##</span> Education
      </h1>
      <br />
      {education.map(
        ({ channel, from, primaryTitle, secondaryTitle, to, where }, i) => (
          <ResumeSection key={i}>
            <ResumeSectionHeader
              primaryTitle={primaryTitle}
              secondaryTitle={secondaryTitle}
              from={from}
              to={to}
              where={where}
              channel={channel}
            />
          </ResumeSection>
        ),
      )}
      <br />
      <hr />
      <br />
      <h1 className="text-2xl font-bold">
        <span className="text-(--identity-color)">##</span> Skills
      </h1>
      <br />
      <ResumeSectionContentList list={skills.list} />
      <br />
      <hr />
      <br />
      <h1 className="text-2xl font-bold">
        <span className="text-(--identity-color)">##</span> Activities
      </h1>
      <br />
      {activities.map(({ details, primaryTitle, secondaryTitle, where }, i) => (
        <ResumeSection key={i}>
          <ResumeSectionHeader
            primaryTitle={primaryTitle}
            secondaryTitle={secondaryTitle}
            where={where}
          />
          <ResumeSectionContent>
            <ResumeSectionContentDetails details={details} />
          </ResumeSectionContent>
        </ResumeSection>
      ))}
    </div>
  );
}
