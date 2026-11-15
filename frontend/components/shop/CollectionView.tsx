import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ShopCatalogue from "@/components/shop/ShopCatalogue";
import { categories } from "@/constants/categories";

type CollectionViewProps = {
       slug: string;
};

// One page layout used by every category and collection page
export default function CollectionView({ slug }: CollectionViewProps) {
       const category = categories.find((c) => c.slug === slug);

       // Unknown category -> show the 404 page
       if (!category) notFound();

       return (
              <main>
                     <PageHeader
                            eyebrow={category.bn}
                            title={category.en}
                            subtitle={category.description}
                     />
                     <section className="py-10 md:py-14">
                            <Container>
                                   {/* key makes the filters reset when you move to another category */}
                                   <ShopCatalogue key={category.slug} initialCategory={category.slug} />
                            </Container>
                     </section>
              </main>
       );
}