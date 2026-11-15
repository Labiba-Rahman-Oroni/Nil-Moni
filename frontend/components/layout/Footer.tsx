import Link from "next/link";
import Container from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { categories } from "@/constants/categories";
import { siteConfig } from "@/constants/site";

const careLinks = [
       { href: "/contact", label: "Contact · যোগাযোগ" },
       { href: "/track-order", label: "Track Order · অর্ডার ট্র্যাক" },
       { href: "/wishlist", label: "Wishlist · উইশলিস্ট" },
       { href: "/cart", label: "Cart · কার্ট" },
       { href: "/login", label: "Login · লগইন" },
       { href: "/about", label: "About Us · আমাদের কথা" },
];

const linkStyle =
       "text-sm text-cream-soft/80 transition hover:text-mustard focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard";

const socialStyle =
       "inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-soft/30 text-cream-soft transition hover:border-mustard hover:bg-mustard hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard";

export default function Footer() {
       const year = new Date().getFullYear();

       return (
              <footer className="mt-auto bg-royal text-cream-soft">
                     <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
                            {/* ===== Brand ===== */}
                            <div>
                                   <p className="font-heading text-2xl font-semibold">
                                          {siteConfig.bengaliName}
                                   </p>
                                   <p className="text-xs tracking-[0.3em] text-cream-soft/70">
                                          {siteConfig.name}
                                   </p>
                                   <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-soft/80">
                                          {siteConfig.description}
                                   </p>
                            </div>

                            {/* ===== Shop ===== */}
                            <nav aria-label="Shop categories">
                                   <h2 className="font-heading text-lg text-mustard">Shop · শপ</h2>
                                   <ul className="mt-4 space-y-2.5">
                                          {categories.map((c) => (
                                                 <li key={c.slug}>
                                                        <Link href={c.href} className={linkStyle}>
                                                               {c.en} · {c.bn}
                                                        </Link>
                                                 </li>
                                          ))}
                                   </ul>
                            </nav>

                            {/* ===== Customer care ===== */}
                            <nav aria-label="Customer care">
                                   <h2 className="font-heading text-lg text-mustard">
                                          Customer Care · সহায়তা
                                   </h2>
                                   <ul className="mt-4 space-y-2.5">
                                          {careLinks.map((l) => (
                                                 <li key={l.href}>
                                                        <Link href={l.href} className={linkStyle}>
                                                               {l.label}
                                                        </Link>
                                                 </li>
                                          ))}
                                   </ul>
                            </nav>

                            {/* ===== Social ===== */}
                            <div>
                                   <h2 className="font-heading text-lg text-mustard">
                                          Follow Us · আমাদের সাথে থাকুন
                                   </h2>
                                   <p className="mt-4 text-sm leading-relaxed text-cream-soft/80">
                                          Message us on Facebook for product enquiries. <br />
                                          পণ্য সম্পর্কে জানতে ফেসবুকে মেসেজ করুন।
                                   </p>
                                   <div className="mt-5 flex gap-3">
                                          <a
                                                 href={siteConfig.facebookUrl}
                                                 target="_blank"
                                                 rel="noopener noreferrer"
                                                 aria-label="NIL MONI on Facebook (opens in a new tab)"
                                                 className={socialStyle}
                                          >
                                                 <FacebookIcon />
                                          </a>
                                          <a
                                                 href={siteConfig.instagramUrl}
                                                 target="_blank"
                                                 rel="noopener noreferrer"
                                                 aria-label="NIL MONI on Instagram (opens in a new tab)"
                                                 className={socialStyle}
                                          >
                                                 <InstagramIcon />
                                          </a>
                                   </div>
                            </div>
                     </Container>

                     {/* ===== Bottom bar ===== */}
                     <div className="border-t border-cream-soft/15">
                            <Container className="py-5 text-center text-xs text-cream-soft/70">
                                   © {year} {siteConfig.name} ({siteConfig.bengaliName}). All rights
                                   reserved.
                            </Container>
                     </div>
              </footer>
       );
}