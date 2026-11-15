"use client";

import { useState } from "react";
import Image from "next/image";
import { Gem } from "lucide-react";
import { cn } from "@/utils/cn";

type ProductGalleryProps = {
       images: string[];
       alt: string;
};

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
       const [active, setActive] = useState(0);

       // Empty state: no real photos yet
       if (images.length === 0) {
              return (
                     <div className="flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-royal/10 bg-cream text-royal/50 shadow-soft">
                            <Gem size={56} aria-hidden="true" />
                            <span className="text-sm">Photo coming soon · ছবি শীঘ্রই আসছে</span>
                     </div>
              );
       }

       return (
              <div>
                     <div className="relative aspect-square overflow-hidden rounded-3xl border border-royal/10 bg-cream shadow-soft">
                            <Image
                                   src={images[active]}
                                   alt={alt}
                                   fill
                                   priority
                                   sizes="(min-width: 1024px) 50vw, 100vw"
                                   className="object-cover"
                            />
                     </div>

                     {images.length > 1 && (
                            <ul className="mt-4 grid grid-cols-5 gap-3">
                                   {images.map((src, i) => (
                                          <li key={src}>
                                                 <button
                                                        type="button"
                                                        onClick={() => setActive(i)}
                                                        aria-label={`Show photo ${i + 1} of ${images.length}`}
                                                        aria-current={i === active}
                                                        className={cn(
                                                               "relative block aspect-square w-full overflow-hidden rounded-xl border-2 transition",
                                                               i === active
                                                                      ? "border-royal"
                                                                      : "border-transparent opacity-80 hover:opacity-100"
                                                        )}
                                                 >
                                                        <Image src={src} alt="" fill sizes="100px" className="object-cover" />
                                                 </button>
                                          </li>
                                   ))}
                            </ul>
                     )}
              </div>
       );
}