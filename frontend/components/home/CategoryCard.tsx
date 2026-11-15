import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/constants/categories";
import { cn } from "@/utils/cn";

// Soft pastel colours used for tiles that have no photo yet
const tones = ["bg-cream", "bg-mustard-tint", "bg-royal-tint"];

type CategoryCardProps = {
       category: Category;
       index: number;
};

export default function CategoryCard({ category, index }: CategoryCardProps) {
       return (
              <Link
                     href={category.href}
                     className="group block overflow-hidden rounded-2xl border border-royal/10 bg-cream-pale shadow-soft transition hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
              >
                     {/* Image area */}
                     <div
                            className={cn(
                                   "relative aspect-[4/3] overflow-hidden",
                                   !category.image && tones[index % tones.length]
                            )}
                     >
                            {category.image ? (
                                   <Image
                                          src={category.image}
                                          alt={`${category.en} – ${category.bn}`}
                                          fill
                                          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                                          className="object-cover transition duration-500 group-hover:scale-105"
                                   />
                            ) : (
                                   <div className="flex h-full items-center justify-center p-4 text-center">
                                          <span className="font-heading text-2xl font-semibold text-royal md:text-3xl">
                                                 {category.bn}
                                          </span>
                                   </div>
                            )}
                     </div>

                     {/* Text area */}
                     <div className="p-4">
                            <h3 className="text-base font-semibold">{category.en}</h3>
                            {category.image && <p className="text-sm text-royal">{category.bn}</p>}
                            <p className="mt-1 text-sm text-ink/70">{category.description}</p>
                            {category.productCount !== undefined && (
                                   <p className="mt-2 text-xs font-medium text-ink/60">
                                          {category.productCount} products
                                   </p>
                            )}
                     </div>
              </Link>
       );
}