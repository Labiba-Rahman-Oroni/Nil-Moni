import Container from "@/components/ui/Container";

type PageHeaderProps = {
       eyebrow?: string;
       title: string;
       subtitle?: string;
};

export default function PageHeader({
       eyebrow,
       title,
       subtitle,
}: PageHeaderProps) {
       return (
              <section className="border-b border-royal/10 bg-cream-pale py-12 text-center md:py-16">
                     <Container>
                            {eyebrow && (
                                   <p className="text-sm font-medium tracking-wide text-royal">
                                          {eyebrow}
                                   </p>
                            )}
                            <h1 className="mt-2 text-4xl md:text-5xl">{title}</h1>
                            <div className="mx-auto mt-4 h-0.5 w-16 bg-mustard" aria-hidden="true" />
                            {subtitle && (
                                   <p className="mx-auto mt-4 max-w-xl text-ink/70">{subtitle}</p>
                            )}
                     </Container>
              </section>
       );
}