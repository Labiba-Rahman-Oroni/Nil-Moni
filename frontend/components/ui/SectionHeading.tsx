import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  eyebrow?: string; // small label above the title
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow && (
        <p className="text-sm font-medium tracking-wide text-royal">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl md:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-0.5 w-16 bg-mustard" aria-hidden="true" />
      {subtitle && <p className="mt-4 text-ink/70">{subtitle}</p>}
    </div>
  );
}
