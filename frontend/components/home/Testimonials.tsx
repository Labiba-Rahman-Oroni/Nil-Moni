import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/constants/testimonials";

export default function Testimonials() {
       // No genuine reviews yet -> show nothing (never show fake reviews)
       if (testimonials.length === 0) return null;

       return (
              <section className="bg-cream-pale py-16 md:py-20">
                     <Container>
                            <SectionHeading
                                   eyebrow="গ্রাহকদের কথা"
                                   title="What Our Customers Say"
                            />

                            <div className="mt-12 grid gap-6 md:grid-cols-3">
                                   {testimonials.map((t) => (
                                          <figure
                                                 key={t.id}
                                                 className="rounded-2xl border border-royal/10 bg-white p-6 shadow-soft"
                                          >
                                                 <Quote size={24} className="text-mustard" aria-hidden="true" />
                                                 <blockquote className="mt-4 text-base leading-relaxed text-ink/80">
                                                        {t.text}
                                                 </blockquote>
                                                 <figcaption className="mt-4 text-sm font-semibold">
                                                        {t.name}
                                                        {t.location && (
                                                               <span className="font-normal text-ink/60"> · {t.location}</span>
                                                        )}
                                                 </figcaption>
                                          </figure>
                                   ))}
                            </div>
                     </Container>
              </section>
       );
}