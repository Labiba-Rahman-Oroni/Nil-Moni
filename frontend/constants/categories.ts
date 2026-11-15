export type Category = {
       slug: string;
       href: string;
       en: string;
       bn: string;
};

export const categories: Category[] = [
       { slug: "earrings", href: "/category/earrings", en: "Earrings", bn: "কানের দুল" },
       { slug: "necklaces", href: "/category/necklaces", en: "Necklaces", bn: "নেকলেস" },
       { slug: "jewellery-sets", href: "/category/jewellery-sets", en: "Jewellery Sets", bn: "গহনার সেট" },
       { slug: "bracelets", href: "/category/bracelets", en: "Bracelets", bn: "ব্রেসলেট" },
       { slug: "churi", href: "/category/churi", en: "Churi / Bangles", bn: "চুড়ি" },
       { slug: "payel", href: "/category/payel", en: "Payel / Anklets", bn: "পায়েল" },
       { slug: "rings", href: "/category/rings", en: "Rings", bn: "আংটি" },
       { slug: "bridal", href: "/bridal", en: "Bridal Collection", bn: "ব্রাইডাল কালেকশন" },
       { slug: "everyday", href: "/everyday", en: "Everyday Wear", bn: "প্রতিদিনের গহনা" },
       { slug: "children", href: "/children", en: "Children's Collection", bn: "শিশুদের গহনা" },
];