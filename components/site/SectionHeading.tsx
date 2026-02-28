export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      {subtitle ? (
        <p className="text-sm font-medium tracking-wide text-foreground/70">
          {subtitle}
        </p>
      ) : null}
      <h2 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}