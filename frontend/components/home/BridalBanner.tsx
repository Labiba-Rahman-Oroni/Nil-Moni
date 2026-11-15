import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function BridalBanner() {
       return (
              <section className="py-16 md:py-20">
                     <Container>
                            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-cream via-mustard-tint to-mustard/70 px-8 py-14 text-center shadow-soft md:px-16 md:py-20">
                                   {/* Decorative circles (hidden from screen readers) */}
                                   <div
                                          aria-hidden="true"
                                          className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/30"
                                   />
                                   <div
                                          aria-hidden="true"
                                          className="absolute -right-12 -bottom-20 h-64 w-64 rounded-full bg-royal/10"
                                   />

                                   <div className="relative mx-auto max-w-2xl">
                                          <p className="text-sm font-medium tracking-wide text-royal">
                                                 বিয়ের সাজে নীল মণি
                                          </p>
                                          <h2 className="mt-3 text-3xl md:text-5xl">Bridal Collection</h2>
                                          <p className="mt-5 text-base leading-relaxed text-ink/80 md:text-lg">
                                                 Traditional Bengali bridal jewellery for your special day.
                                                 <br />
                                                 আপনার বিশেষ দিনের জন্য ঐতিহ্যবাহী গহনা।
                                          </p>
                                          <div className="mt-8">
                                                 <Button href="/bridal">Explore Bridal · ব্রাইডাল দেখুন</Button>
                                          </div>
                                   </div>
                            </div>
                     </Container>
              </section>
       );
}