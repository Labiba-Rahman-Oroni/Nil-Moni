export type Language = "en" | "bn";

export type NavLink = {
       href: string;
       label: Record<Language, string>;
};

export const navLinks: NavLink[] = [
       { href: "/", label: { en: "Home", bn: "হোম" } },
       { href: "/shop", label: { en: "Shop", bn: "শপ" } },
       { href: "/collections", label: { en: "Collections", bn: "কালেকশন" } },
       { href: "/bridal", label: { en: "Bridal", bn: "ব্রাইডাল" } },
       { href: "/about", label: { en: "About", bn: "আমাদের কথা" } },
       { href: "/contact", label: { en: "Contact", bn: "যোগাযোগ" } },
];