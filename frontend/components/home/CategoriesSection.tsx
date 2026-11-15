import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { categories } from "@/constants/categories";
import CategoryCard from "./CategoryCard";

export default function CategoriesSection() {
       return (
              <section className="py-16 md:py-20">
                     <Container>
                            <SectionHeading
                                   eyebrow="ক্যাটাগরি অনুযায়ী কিনুন"
                                   title="Shop by Categories"
                                   subtitle="আপনার পছন্দের গহনা খুঁজে নিন – from traditional churi to everyday jewellery."
                            />

                            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
                                   {categories.map((category, index) => (
                                          <CategoryCard key={category.slug} category={category} index={index} />
                                   ))}
                            </div>
                     </Container>
              </section>
       );
}