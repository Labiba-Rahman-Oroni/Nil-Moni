import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ShopCatalogue from "@/components/shop/ShopCatalogue";

// SEO: the browser tab title and the Google search description
export const metadata: Metadata = {
       title: "Shop | NIL MONI – নীল মণি",
       description:
              "Browse NIL MONI Bengali traditional and modern jewellery: earrings, necklaces, churi, payel, rings, bridal and more.",
};

export default function ShopPage() {
       return (
              <main>
                     <PageHeader
                            eyebrow="আমাদের সংগ্রহ"
                            title="Shop"
                            subtitle="আপনার পছন্দের গহনা খুঁজে নিন – browse all NIL MONI jewellery."
                     />
                     <section className="py-10 md:py-14">
                            <Container>
                                   <ShopCatalogue />
                            </Container>
                     </section>
              </main>
       );
}