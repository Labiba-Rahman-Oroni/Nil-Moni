import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Product } from "@/constants/products";
import { cn } from "@/utils/cn";
import ProductCard from "./ProductCard";

type ProductsSectionProps = {
       eyebrow?: string;
       title: string;
       subtitle?: string;
       products: Product[];
       viewAllHref?: string;
       className?: string;
};

export default function ProductsSection({
       eyebrow,
       title,
       subtitle,
       products,
       viewAllHref,
       className,
}: ProductsSectionProps) {
       const hasSamples = products.some((p) => p.isSample);

       return (
              <section className={cn("py-16 md:py-20", className)}>
                     <Container>
                            <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

                            {hasSamples && (
                                   <p className="mt-3 text-center text-xs text-ink/60">
                                          Sample products shown for design preview. Real products coming soon.
                                   </p>
                            )}

                            {products.length === 0 ? (
                                   <p className="mt-12 text-center text-ink/70">
                                          Products coming soon · শীঘ্রই আসছে
                                   </p>
                            ) : (
                                   <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                                          {products.map((product) => (
                                                 <ProductCard key={product.id} product={product} />
                                          ))}
                                   </div>
                            )}

                            {viewAllHref && (
                                   <div className="mt-10 text-center">
                                          <Button href={viewAllHref} variant="secondary">
                                                 View All · সব দেখুন
                                          </Button>
                                   </div>
                            )}
                     </Container>
              </section>
       );
}