import Image from "next/image";
import Link from "next/link";
import { Gem } from "lucide-react";
import type { Product } from "@/constants/products";
import { formatPrice } from "@/utils/formatPrice";

type ProductCardProps = {
       product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
       const { price, discountPrice } = product;
       const hasDiscount = typeof discountPrice === "number" && discountPrice < price;
       const currentPrice = hasDiscount ? discountPrice : price;
       const percentOff = hasDiscount
              ? Math.round(((price - discountPrice) / price) * 100)
              : 0;

       return (
              <Link
                     href={`/product/${product.slug}`}
                     className="group block overflow-hidden rounded-2xl border border-royal/10 bg-cream-pale shadow-soft transition hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
              >
                     {/* Image area */}
                     <div className="relative aspect-square overflow-hidden bg-cream">
                            {product.image ? (
                                   <Image
                                          src={product.image}
                                          alt={`${product.nameEn} – ${product.nameBn}`}
                                          fill
                                          sizes="(min-width: 1024px) 25vw, 50vw"
                                          className="object-cover transition duration-500 group-hover:scale-105"
                                   />
                            ) : (
                                   <div className="flex h-full flex-col items-center justify-center gap-2 text-royal/50">
                                          <Gem size={40} aria-hidden="true" />
                                          <span className="text-xs">Photo coming soon</span>
                                   </div>
                            )}

                            {/* Badges */}
                            <div className="absolute top-3 left-3 flex flex-col items-start gap-1.5">
                                   {product.isSample && (
                                          <span className="rounded-full bg-mustard px-2.5 py-1 text-[0.7rem] font-semibold text-ink">
                                                 Sample
                                          </span>
                                   )}
                                   {product.isNew && (
                                          <span className="rounded-full bg-royal px-2.5 py-1 text-[0.7rem] font-semibold text-white">
                                                 New
                                          </span>
                                   )}
                                   {hasDiscount && (
                                          <span className="rounded-full bg-white px-2.5 py-1 text-[0.7rem] font-semibold text-royal">
                                                 -{percentOff}%
                                          </span>
                                   )}
                            </div>
                     </div>

                     {/* Text area */}
                     <div className="p-4">
                            <h3 className="text-base leading-snug font-semibold">
                                   {product.nameEn}
                            </h3>
                            <p className="text-sm text-royal">{product.nameBn}</p>

                            <div className="mt-2 flex items-baseline gap-2">
                                   <span className="text-base font-semibold text-ink">
                                          {formatPrice(currentPrice)}
                                   </span>
                                   {hasDiscount && (
                                          <span className="text-sm text-ink/50 line-through">
                                                 {formatPrice(price)}
                                          </span>
                                   )}
                            </div>

                            {!product.inStock && (
                                   <p className="mt-2 text-xs font-medium text-red-700">
                                          Out of stock · স্টক নেই
                                   </p>
                            )}
                     </div>
              </Link>
       );
}