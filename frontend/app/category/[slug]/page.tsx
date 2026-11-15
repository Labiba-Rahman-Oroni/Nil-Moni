import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CollectionView from "@/components/shop/CollectionView";
import { categories } from "@/constants/categories";

type CategoryPageProps = {
       params: Promise<{ slug: string }>;
};

// Only categories whose address is /category/[slug]
// (bridal, everyday and children have their own pages)
const routedCategories = categories.filter((c) =>
       c.href.startsWith("/category/")
);

// Tells Next.js which pages to prepare in advance
export function generateStaticParams() {
       return routedCategories.map((c) => ({ slug: c.slug }));
}

// SEO title and description for each category
export async function generateMetadata({
       params,
}: CategoryPageProps): Promise<Metadata> {
       const { slug } = await params;
       const category = routedCategories.find((c) => c.slug === slug);

       if (!category) return { title: "Category not found | NIL MONI" };

       return {
              title: `${category.en} | NIL MONI – নীল মণি`,
              description: `Shop ${category.en} (${category.bn}) at NIL MONI, Bengali traditional and modern jewellery.`,
       };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
       const { slug } = await params;
       const category = routedCategories.find((c) => c.slug === slug);

       if (!category) notFound();

       return <CollectionView slug={category.slug} />;
}