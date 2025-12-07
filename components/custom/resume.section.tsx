export function ResumeSection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
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
        {primaryTitle} / {secondaryTitle}
      </h1>
      <h3>
        {from} - {to}, {where}, {channel}
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
}: Readonly<{
  list?: string[];
}>) {
  return (
    <ul>
      {list?.map((li) => (
        <li key={li}>{li}</li>
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
        <p key={d}>{d}</p>
      ))}
    </>
  );
}
