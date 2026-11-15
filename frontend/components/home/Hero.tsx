import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
       return (
              <section className="py-16 md:py-24">
                     <Container className="grid items-center gap-12 md:grid-cols-2">
                            {/* Left: text */}
                            <div>
                                   <span className="inline-block rounded-full bg-mustard-tint px-4 py-1.5 text-sm font-medium tracking-wide text-royal">
                                          নীল মণি · Bengali Jewellery
                                   </span>

                                   <h1 className="mt-6 text-4xl leading-tight font-semibold md:text-6xl">
                                          ঐতিহ্যের ছোঁয়ায় সৌন্দর্য
                                   </h1>

                                   <p className="mt-4 font-heading text-xl text-royal italic md:text-2xl">
                                          Timeless Bengali jewellery, crafted for every moment.
                                   </p>

                                   <p className="mt-5 max-w-md text-base leading-relaxed text-ink/75">
                                          প্রতিদিনের সাজে নীল মণি – traditional earrings, churi, payel and
                                          bridal jewellery with a modern touch.
                                   </p>

                                   <div className="mt-8 flex flex-wrap gap-4">
                                          <Button href="/shop">Shop Now – এখনই কিনুন</Button>
                                          <Button href="/about" variant="secondary">
                                                 Our Story – আমাদের গল্প
                                          </Button>
                                   </div>
                            </div>

                            {/* Right: illustration */}
                            <div className="relative mx-auto w-full max-w-md">
                                   <div
                                          aria-hidden="true"
                                          className="absolute -right-4 -bottom-4 h-full w-full rounded-[2rem] bg-cream"
                                   />
                                   <Image
                                          src="/images/brand/nil-moni-illustration.jpeg"
                                          alt="Illustration of a woman in a blue saree wearing traditional Bengali jewellery"
                                          width={800}
                                          height={800}
                                          priority
                                          className="relative h-auto w-full rounded-[2rem] shadow-soft"
                                   />
                            </div>
                     </Container>
              </section>
       );
}