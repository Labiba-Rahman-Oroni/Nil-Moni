import CategoriesSection from "@/components/home/CategoriesSection";
import Hero from "@/components/home/Hero";
import ProductsSection from "@/components/home/ProductsSection";
import { sampleProducts } from "@/constants/products";

export default function HomePage() {
  const newArrivals = sampleProducts.filter((p) => p.isNew).slice(0, 4);
  const featured = sampleProducts.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <main>
      <Hero />
      <CategoriesSection />
      <ProductsSection
        eyebrow="নতুন সংগ্রহ"
        title="New Arrivals"
        subtitle="সদ্য আসা গহনা – fresh designs, just in."
        products={newArrivals}
        viewAllHref="/shop"
      />
      <ProductsSection
        className="bg-cream-pale"
        eyebrow="বিশেষ পছন্দ"
        title="Featured Products"
        subtitle="আমাদের বাছাই করা গহনা – handpicked for you."
        products={featured}
        viewAllHref="/shop"
      />
    </main>
  );
}