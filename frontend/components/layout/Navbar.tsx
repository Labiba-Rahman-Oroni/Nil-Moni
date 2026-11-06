"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { navLinks, type Language } from "@/constants/navigation";
import { cn } from "@/utils/cn";

const iconButton =
       "inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-cream-soft hover:text-royal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal";

export default function Navbar() {
       const pathname = usePathname();
       const [language, setLanguage] = useState<Language>("en");
       const [menuOpen, setMenuOpen] = useState(false);

       const isActive = (href: string) =>
              href === "/" ? pathname === "/" : pathname.startsWith(href);

       return (
              <header className="sticky top-0 z-40 border-b border-royal/10 bg-white/95 backdrop-blur">
                     <Container className="flex h-20 items-center justify-between gap-4">
                            {/* ===== Logo ===== */}
                            <Link href="/" className="flex items-center gap-3" aria-label="NIL MONI home">
                                   <Image
                                          src="/images/brand/nil-moni-logo.jpeg"
                                          alt="NIL MONI logo"
                                          width={48}
                                          height={48}
                                          priority
                                          className="h-12 w-12 rounded-xl"
                                   />
                                   <span className="leading-tight">
                                          <span className="block font-heading text-xl font-semibold text-royal">
                                                 নীল মণি
                                          </span>
                                          <span className="block text-[0.7rem] tracking-[0.25em] text-ink/60">
                                                 NIL MONI
                                          </span>
                                   </span>
                            </Link>

                            {/* ===== Desktop links ===== */}
                            <nav aria-label="Main" className="hidden lg:block">
                                   <ul className="flex items-center gap-8">
                                          {navLinks.map((link) => (
                                                 <li key={link.href}>
                                                        <Link
                                                               href={link.href}
                                                               className={cn(
                                                                      "border-b-2 py-1 text-sm font-medium transition hover:text-royal",
                                                                      isActive(link.href)
                                                                             ? "border-mustard text-royal"
                                                                             : "border-transparent text-ink/80"
                                                               )}
                                                        >
                                                               {link.label[language]}
                                                        </Link>
                                                 </li>
                                          ))}
                                   </ul>
                            </nav>

                            {/* ===== Right side: language + icons ===== */}
                            <div className="flex items-center gap-1">
                                   <button
                                          type="button"
                                          onClick={() => setLanguage(language === "en" ? "bn" : "en")}
                                          className="mr-1 rounded-full border border-royal/25 px-3 py-1.5 text-sm font-medium text-royal transition hover:bg-royal-tint"
                                          aria-label="Switch language between English and Bangla"
                                   >
                                          {language === "en" ? "বাংলা" : "EN"}
                                   </button>

                                   <button type="button" className={iconButton} aria-label="Search">
                                          <Search size={20} />
                                   </button>
                                   <Link href="/wishlist" className={iconButton} aria-label="Wishlist">
                                          <Heart size={20} />
                                   </Link>
                                   <Link href="/login" className={iconButton} aria-label="Account">
                                          <User size={20} />
                                   </Link>
                                   <Link href="/cart" className={iconButton} aria-label="Shopping cart">
                                          <ShoppingBag size={20} />
                                   </Link>

                                   {/* Hamburger (mobile only) */}
                                   <button
                                          type="button"
                                          className={cn(iconButton, "lg:hidden")}
                                          onClick={() => setMenuOpen(!menuOpen)}
                                          aria-label={menuOpen ? "Close menu" : "Open menu"}
                                          aria-expanded={menuOpen}
                                          aria-controls="mobile-menu"
                                   >
                                          {menuOpen ? <X size={22} /> : <Menu size={22} />}
                                   </button>
                            </div>
                     </Container>

                     {/* ===== Mobile menu ===== */}
                     {menuOpen && (
                            <nav
                                   id="mobile-menu"
                                   aria-label="Mobile"
                                   className="border-t border-royal/10 bg-white lg:hidden"
                            >
                                   <ul className="mx-auto flex max-w-6xl flex-col px-6 py-3">
                                          {navLinks.map((link) => (
                                                 <li key={link.href}>
                                                        <Link
                                                               href={link.href}
                                                               onClick={() => setMenuOpen(false)}
                                                               className={cn(
                                                                      "block border-b border-royal/10 py-3 text-base font-medium",
                                                                      isActive(link.href) ? "text-royal" : "text-ink/80"
                                                               )}
                                                        >
                                                               {link.label[language]}
                                                        </Link>
                                                 </li>
                                          ))}
                                   </ul>
                            </nav>
                     )}
              </header>
       );
}