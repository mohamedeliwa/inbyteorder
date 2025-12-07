export function ResumeSection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mt-2 mb-10">{children}</div>;
}

export function ResumeSectionHeader({
  primaryTitle,
  secondaryTitle,
  from,
  channel,
  to,
  where,
}: {
  primaryTitle?: string;
  secondaryTitle?: string;
  from?: string;
  to?: string;
  where?: string[];
  channel?: string;
}) {
  return (
    <>
      <h1>
        <span className="font-bold">{primaryTitle}</span> / {secondaryTitle}
      </h1>
      <h3 className="text-gray-400 text font-light">
        {from && `${from} - `}
        {to && `${to}, `}
        {where?.length && `${where.join(", ")}${channel ? ", " : ""}`}
        {channel}
      </h3>
    </>
  );
}

export function ResumeSectionContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

export function ResumeSectionContentList({
  list,
  sm,
}: Readonly<{
  list?: string[];
  sm?: boolean;
}>) {
  return (
    <ul className={`list-disc ${sm ? "text-sm" : "font-light"}  pl-7`}>
      {list?.map((li) => (
        <li className="mt-2 mb-2" key={li}>
          {li}
        </li>
      ))}
    </ul>
  );
}

export function ResumeSectionContentDetails({
  details,
}: Readonly<{
  details?: string[];
}>) {
  return (
    <>
      {details?.map((d) => (
        <p className="text-sm mt-2 mb-2" key={d}>
          {d}
        </p>
      ))}
    </>
  );
}
