import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

// Placeholder points based on the NIL MONI brand concept. Edit freely.
const points = [
       "Traditional roots · ঐতিহ্যের টান",
       "Modern style · আধুনিক ছোঁয়া",
       "For every occasion · প্রতিটি উপলক্ষে",
];

export default function OurStory() {
       return (
              <section className="py-16 md:py-20">
                     <Container className="grid items-center gap-12 md:grid-cols-2">
                            {/* Left: logo image */}
                            <div className="relative mx-auto w-full max-w-sm">
                                   <div
                                          aria-hidden="true"
                                          className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] bg-cream"
                                   />
                                   <Image
                                          src="/images/brand/nil-moni-logo.jpeg"
                                          alt="NIL MONI logo"
                                          width={600}
                                          height={600}
                                          className="relative h-auto w-full rounded-[2rem] shadow-soft"
                                   />
                            </div>

                            {/* Right: story text */}
                            <div>
                                   <p className="text-sm font-medium tracking-wide text-royal">
                                          আমাদের গল্প
                                   </p>
                                   <h2 className="mt-2 text-3xl md:text-4xl">Our Story</h2>
                                   <div className="mt-4 h-0.5 w-16 bg-mustard" aria-hidden="true" />

                                   <p className="mt-6 text-base leading-relaxed text-ink/80">
                                          NIL MONI celebrates Bengali jewellery culture while offering
                                          fashionable jewellery for everyday life, special occasions and
                                          bridal celebrations.
                                   </p>
                                   <p className="mt-4 text-base leading-relaxed text-ink/80">
                                          নীল মণি বাঙালি গহনার ঐতিহ্যকে সম্মান জানিয়ে প্রতিদিন, বিশেষ
                                          অনুষ্ঠান ও বিয়ের জন্য আধুনিক গহনা নিয়ে এসেছে।
                                   </p>

                                   <ul className="mt-6 space-y-2">
                                          {points.map((point) => (
                                                 <li key={point} className="flex items-center gap-3 text-sm">
                                                        <span
                                                               aria-hidden="true"
                                                               className="h-2 w-2 rounded-full bg-mustard"
                                                        />
                                                        {point}
                                                 </li>
                                          ))}
                                   </ul>

                                   <div className="mt-8">
                                          <Button href="/about" variant="secondary">
                                                 Read More · আরও জানুন
                                          </Button>
                                   </div>
                            </div>
                     </Container>
              </section>
       );
}