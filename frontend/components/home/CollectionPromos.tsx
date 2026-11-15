import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const promos = [
       {
              id: "everyday",
              href: "/everyday",
              eyebrow: "প্রতিদিনের সাজে নীল মণি",
              title: "Everyday Wear",
              description:
                     "Light and easy jewellery for your daily look. প্রতিদিনের জন্য হালকা সুন্দর গহনা।",
              cta: "Shop Everyday · দেখুন",
              tone: "bg-royal-tint",
       },
       {
              id: "children",
              href: "/children",
              eyebrow: "ছোটদের জন্য",
              title: "Children's Collection",
              description:
                     "Sweet little jewellery for little ones. ছোটদের জন্য মিষ্টি গহনা।",
              cta: "Shop Children · দেখুন",
              tone: "bg-mustard-tint",
       },
];

export default function CollectionPromos() {
       return (
              <section className="py-16 md:py-20">
                     <Container>
                            <SectionHeading
                                   eyebrow="প্রতিটি মুহূর্তের জন্য"
                                   title="Collections for Every Moment"
                                   subtitle="Everyday elegance and gifts for the little ones."
                            />

                            <div className="mt-12 grid gap-6 md:grid-cols-2">
                                   {promos.map((promo) => (
                                          <article
                                                 key={promo.id}
                                                 className={`flex flex-col items-start rounded-3xl border border-royal/10 p-8 shadow-soft md:p-10 ${promo.tone}`}
                                          >
                                                 <p className="text-sm font-medium tracking-wide text-royal">
                                                        {promo.eyebrow}
                                                 </p>
                                                 <h3 className="mt-3 text-2xl md:text-3xl">{promo.title}</h3>
                                                 <p className="mt-4 max-w-sm text-base leading-relaxed text-ink/80">
                                                        {promo.description}
                                                 </p>
                                                 <div className="mt-8">
                                                        <Button href={promo.href} variant="secondary">
                                                               {promo.cta}
                                                        </Button>
                                                 </div>
                                          </article>
                                   ))}
                            </div>
                     </Container>
              </section>
       );
}