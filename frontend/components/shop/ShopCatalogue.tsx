"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "@/components/home/ProductCard";
import { categories } from "@/constants/categories";
import { sampleProducts, type Product } from "@/constants/products";

type SortOption = "default" | "price-asc" | "price-desc";

type ShopCatalogueProps = {
       initialCategory?: string; // lets category pages reuse this component later
};

const fieldStyle =
       "w-full rounded-xl border border-royal/20 bg-white px-4 py-2.5 text-sm text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal";

const labelStyle = "mb-1 block text-xs font-medium text-ink/70";

// The price a customer actually pays (discount price if there is a real discount)
function getPrice(p: Product): number {
       return typeof p.discountPrice === "number" && p.discountPrice < p.price
              ? p.discountPrice
              : p.price;
}

export default function ShopCatalogue({
       initialCategory = "all",
}: ShopCatalogueProps) {
       const [query, setQuery] = useState("");
       const [category, setCategory] = useState(initialCategory);
       const [sort, setSort] = useState<SortOption>("default");
       const [minPrice, setMinPrice] = useState("");
       const [maxPrice, setMaxPrice] = useState("");

       const hasFilters =
              query !== "" ||
              category !== initialCategory ||
              sort !== "default" ||
              minPrice !== "" ||
              maxPrice !== "";

       const results = useMemo(() => {
              const q = query.trim();
              const qLower = q.toLowerCase();
              const min = minPrice === "" ? 0 : Number(minPrice);
              const max = maxPrice === "" ? Infinity : Number(maxPrice);

              const filtered = sampleProducts.filter((p) => {
                     const price = getPrice(p);
                     const matchesSearch =
                            q === "" ||
                            p.nameEn.toLowerCase().includes(qLower) ||
                            p.nameBn.includes(q);
                     const matchesCategory = category === "all" || p.categorySlug === category;
                     return matchesSearch && matchesCategory && price >= min && price <= max;
              });

              if (sort === "price-asc") {
                     return [...filtered].sort((a, b) => getPrice(a) - getPrice(b));
              }
              if (sort === "price-desc") {
                     return [...filtered].sort((a, b) => getPrice(b) - getPrice(a));
              }
              return filtered;
       }, [query, category, sort, minPrice, maxPrice]);

       function clearFilters() {
              setQuery("");
              setCategory(initialCategory);
              setSort("default");
              setMinPrice("");
              setMaxPrice("");
       }

       return (
              <div>
                     {/* ===== Filter bar ===== */}
                     <div className="grid gap-4 rounded-2xl border border-royal/10 bg-cream-pale p-4 shadow-soft sm:grid-cols-2 lg:grid-cols-5">
                            <div className="sm:col-span-2">
                                   <label htmlFor="shop-search" className={labelStyle}>
                                          Search · খুঁজুন
                                   </label>
                                   <div className="relative">
                                          <Search
                                                 size={18}
                                                 aria-hidden="true"
                                                 className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-ink/50"
                                          />
                                          <input
                                                 id="shop-search"
                                                 type="search"
                                                 value={query}
                                                 onChange={(e) => setQuery(e.target.value)}
                                                 placeholder="Search jewellery..."
                                                 className={`${fieldStyle} pl-10`}
                                          />
                                   </div>
                            </div>

                            <div>
                                   <label htmlFor="shop-category" className={labelStyle}>
                                          Category · ক্যাটাগরি
                                   </label>
                                   <select
                                          id="shop-category"
                                          value={category}
                                          onChange={(e) => setCategory(e.target.value)}
                                          className={fieldStyle}
                                   >
                                          <option value="all">All · সব</option>
                                          {categories.map((c) => (
                                                 <option key={c.slug} value={c.slug}>
                                                        {c.en} · {c.bn}
                                                 </option>
                                          ))}
                                   </select>
                            </div>

                            <div>
                                   <label htmlFor="shop-sort" className={labelStyle}>
                                          Sort by · সাজান
                                   </label>
                                   <select
                                          id="shop-sort"
                                          value={sort}
                                          onChange={(e) => setSort(e.target.value as SortOption)}
                                          className={fieldStyle}
                                   >
                                          <option value="default">Default</option>
                                          <option value="price-asc">Price: Low to High</option>
                                          <option value="price-desc">Price: High to Low</option>
                                   </select>
                            </div>

                            <div className="grid grid-cols-2 gap-2 sm:col-span-2 lg:col-span-1">
                                   <div>
                                          <label htmlFor="shop-min" className={labelStyle}>
                                                 Min ৳
                                          </label>
                                          <input
                                                 id="shop-min"
                                                 type="number"
                                                 min={0}
                                                 inputMode="numeric"
                                                 value={minPrice}
                                                 onChange={(e) => setMinPrice(e.target.value)}
                                                 placeholder="0"
                                                 className={fieldStyle}
                                          />
                                   </div>
                                   <div>
                                          <label htmlFor="shop-max" className={labelStyle}>
                                                 Max ৳
                                          </label>
                                          <input
                                                 id="shop-max"
                                                 type="number"
                                                 min={0}
                                                 inputMode="numeric"
                                                 value={maxPrice}
                                                 onChange={(e) => setMaxPrice(e.target.value)}
                                                 placeholder="Any"
                                                 className={fieldStyle}
                                          />
                                   </div>
                            </div>
                     </div>

                     {/* ===== Result count ===== */}
                     <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                            <p className="text-sm text-ink/70" aria-live="polite">
                                   {results.length} {results.length === 1 ? "product" : "products"} found
                            </p>
                            {hasFilters && (
                                   <button
                                          type="button"
                                          onClick={clearFilters}
                                          className="text-sm font-medium text-royal underline underline-offset-4 hover:text-ink"
                                   >
                                          Clear filters · ফিল্টার মুছুন
                                   </button>
                            )}
                     </div>

                     {results.some((p) => p.isSample) && (
                            <p className="mt-1 text-xs text-ink/60">
                                   Sample products shown for design preview. Real products coming soon.
                            </p>
                     )}

                     {/* ===== Product grid or empty state ===== */}
                     {results.length === 0 ? (
                            <div className="mt-10 rounded-2xl border border-dashed border-royal/20 bg-cream-pale p-10 text-center">
                                   <p className="text-lg font-semibold">No products found</p>
                                   <p className="mt-2 text-sm text-ink/70">
                                          কোনো পণ্য পাওয়া যায়নি। Try a different search or clear the filters.
                                   </p>
                                   <button
                                          type="button"
                                          onClick={clearFilters}
                                          className="mt-5 rounded-full bg-royal px-6 py-2.5 text-sm font-medium text-white transition hover:opacity-95"
                                   >
                                          Clear filters · ফিল্টার মুছুন
                                   </button>
                            </div>
                     ) : (
                            <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                                   {results.map((product) => (
                                          <ProductCard key={product.id} product={product} />
                                   ))}
                            </div>
                     )}
              </div>
       );
}