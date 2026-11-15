import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/home/ProductCard";
import ProductGallery from "@/components/shop/ProductGallery";
import Container from "@/components/ui/Container";
import { categories } from "@/constants/categories";
import { sampleProducts } from "@/constants/products";
import { siteConfig } from "@/constants/site";
import { formatPrice } from "@/utils/formatPrice";
import { getPriceInfo } from "@/utils/pricing";

type ProductPageProps = {
       params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
       return sampleProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
       params,
}: ProductPageProps): Promise<Metadata> {
       const { slug } = await params;
       const product = sampleProducts.find((p) => p.slug === slug);

       if (!product) return { title: "Product not found | NIL MONI" };

       return {
              title: `${product.nameEn} | NIL MONI – নীল মণি`,
              description:
                     product.description ??
                     `${product.nameEn} (${product.nameBn}) at NIL MONI, Bengali traditional and modern jewellery.`,
       };
}

export default async function ProductPage({ params }: ProductPageProps) {
       const { slug } = await params;
       const product = sampleProducts.find((p) => p.slug === slug);

       if (!product) notFound();

       const category = categories.find((c) => c.slug === product.categorySlug);
       const price = getPriceInfo(product);

       const photos = product.images ?? (product.image ? [product.image] : []);

       // Only show details that really exist (never invent product facts)
       const specs = [
              { label: "SKU", value: product.sku },
              { label: "Materials · উপাদান", value: product.materials },
              { label: "Size · সাইজ", value: product.size },
              { label: "Weight · ওজন", value: product.weight },
       ].filter((s) => s.value);

       const related = sampleProducts
              .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
              .slice(0, 4);

       return (
              <main className="py-8 md:py-12">
                     <Container>
                            {/* ===== Breadcrumb ===== */}
                            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink/60">
                                   <ol className="flex flex-wrap items-center gap-2">
                                          <li>
                                                 <Link href="/" className="hover:text-royal">
                                                        Home
                                                 </Link>
                                          </li>
                                          <li aria-hidden="true">/</li>
                                          <li>
                                                 <Link href="/shop" className="hover:text-royal">
                                                        Shop
                                                 </Link>
                                          </li>
                                          {category && (
                                                 <>
                                                        <li aria-hidden="true">/</li>
                                                        <li>
                                                               <Link href={category.href} className="hover:text-royal">
                                                                      {category.en}
                                                               </Link>
                                                        </li>
                                                 </>
                                          )}
                                          <li aria-hidden="true">/</li>
                                          <li aria-current="page" className="text-ink">
                                                 {product.nameEn}
                                          </li>
                                   </ol>
                            </nav>

                            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
                                   {/* ===== Gallery ===== */}
                                   <ProductGallery images={photos} alt={`${product.nameEn} – ${product.nameBn}`} />

                                   {/* ===== Product info ===== */}
                                   <div>
                                          <div className="flex flex-wrap gap-2">
                                                 {product.isSample && (
                                                        <span className="rounded-full bg-mustard px-3 py-1 text-xs font-semibold text-ink">
                                                               Sample
                                                        </span>
                                                 )}
                                                 {product.isNew && (
                                                        <span className="rounded-full bg-royal px-3 py-1 text-xs font-semibold text-white">
                                                               New
                                                        </span>
                                                 )}
                                          </div>

                                          <h1 className="mt-3 text-3xl md:text-4xl">{product.nameEn}</h1>
                                          <p className="mt-1 text-lg text-royal">{product.nameBn}</p>

                                          {category && (
                                                 <p className="mt-2 text-sm text-ink/60">
                                                        Category:{" "}
                                                        <Link href={category.href} className="text-royal underline underline-offset-4">
                                                               {category.en} · {category.bn}
                                                        </Link>
                                                 </p>
                                          )}

                                          {/* Price */}
                                          <div className="mt-6 flex flex-wrap items-baseline gap-3">
                                                 <span className="text-3xl font-semibold">
                                                        {formatPrice(price.current)}
                                                 </span>
                                                 {price.original && (
                                                        <>
                                                               <span className="text-lg text-ink/50 line-through">
                                                                      {formatPrice(price.original)}
                                                               </span>
                                                               <span className="rounded-full bg-royal-tint px-2.5 py-1 text-xs font-semibold text-royal">
                                                                      -{price.percentOff}%
                                                               </span>
                                                        </>
                                                 )}
                                          </div>

                                          {/* Availability */}
                                          <p
                                                 className={`mt-3 text-sm font-medium ${product.inStock ? "text-green-700" : "text-red-700"
                                                        }`}
                                          >
                                                 {product.inStock
                                                        ? "In stock · স্টকে আছে"
                                                        : "Out of stock · স্টক নেই"}
                                          </p>

                                          {product.isSample && (
                                                 <p className="mt-4 rounded-xl bg-mustard-tint px-4 py-3 text-sm text-ink/80">
                                                        This is a sample product used to preview the design. It is not a
                                                        real NIL MONI item and cannot be purchased.
                                                 </p>
                                          )}

                                          {/* Description */}
                                          <div className="mt-6">
                                                 <h2 className="text-lg">Description · বিবরণ</h2>
                                                 <p className="mt-2 leading-relaxed text-ink/80">
                                                        {product.description ??
                                                               "Product details will be added soon. পণ্যের বিবরণ শীঘ্রই যোগ করা হবে।"}
                                                 </p>
                                          </div>

                                          {/* Details (only if real data exists) */}
                                          {specs.length > 0 && (
                                                 <dl className="mt-6 divide-y divide-royal/10 rounded-2xl border border-royal/10 bg-cream-pale">
                                                        {specs.map((s) => (
                                                               <div key={s.label} className="flex justify-between gap-4 px-4 py-3 text-sm">
                                                                      <dt className="text-ink/60">{s.label}</dt>
                                                                      <dd className="text-right font-medium">{s.value}</dd>
                                                               </div>
                                                        ))}
                                                 </dl>
                                          )}

                                          {/* Enquiry */}
                                          <div className="mt-8">
                                                 <a
                                                        href={siteConfig.facebookUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center justify-center rounded-full bg-royal px-7 py-3.5 font-medium text-white shadow-soft transition hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
                                                 >
                                                        Ask on Facebook · ফেসবুকে জিজ্ঞাসা করুন
                                                        <span className="sr-only"> (opens in a new tab)</span>
                                                 </a>
                                          </div>
                                   </div>
                            </div>

                            {/* ===== Related products ===== */}
                            {related.length > 0 && (
                                   <section className="mt-20" aria-labelledby="related-title">
                                          <h2 id="related-title" className="text-2xl md:text-3xl">
                                                 You may also like · আরও দেখুন
                                          </h2>
                                          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                                                 {related.map((p) => (
                                                        <ProductCard key={p.id} product={p} />
                                                 ))}
                                          </div>
                                   </section>
                            )}
                     </Container>
              </main>
       );
}