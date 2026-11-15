export type Category = {
       slug: string;
       href: string;
       en: string;
       bn: string;
       description: string;
       image?: string; // e.g. "/images/categories/earrings.jpg" (add real photos later)
       productCount?: number; // only set when real products exist
};

// NOTE: descriptions are simple placeholders. Edit them to match your shop.
export const categories: Category[] = [
       {
              slug: "earrings",
              href: "/category/earrings",
              en: "Earrings",
              bn: "কানের দুল",
              description: "Jhumka, drops and studs",
       },
       {
              slug: "necklaces",
              href: "/category/necklaces",
              en: "Necklaces",
              bn: "নেকলেস",
              description: "Necklaces and neck sets",
       },
       {
              slug: "jewellery-sets",
              href: "/category/jewellery-sets",
              en: "Jewellery Sets",
              bn: "গহনার সেট",
              description: "Matching sets for occasions",
       },
       {
              slug: "bracelets",
              href: "/category/bracelets",
              en: "Bracelets",
              bn: "ব্রেসলেট",
              description: "Bracelets for the wrist",
       },
       {
              slug: "churi",
              href: "/category/churi",
              en: "Churi / Bangles",
              bn: "চুড়ি",
              description: "Churi and bangles",
       },
       {
              slug: "payel",
              href: "/category/payel",
              en: "Payel / Anklets",
              bn: "পায়েল",
              description: "Payel and anklets",
       },
       {
              slug: "rings",
              href: "/category/rings",
              en: "Rings",
              bn: "আংটি",
              description: "Rings for every day",
       },
       {
              slug: "bridal",
              href: "/bridal",
              en: "Bridal Collection",
              bn: "ব্রাইডাল কালেকশন",
              description: "Jewellery for brides",
       },
       {
              slug: "everyday",
              href: "/everyday",
              en: "Everyday Wear",
              bn: "প্রতিদিনের গহনা",
              description: "Light jewellery for daily wear",
       },
       {
              slug: "children",
              href: "/children",
              en: "Children's Collection",
              bn: "শিশুদের গহনা",
              description: "Jewellery for little ones",
       },
];