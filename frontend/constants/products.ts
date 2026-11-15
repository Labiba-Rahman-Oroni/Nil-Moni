export type Product = {
       id: string;
       slug: string;
       nameEn: string;
       nameBn: string;
       categorySlug: string;
       price: number; // in BDT
       discountPrice?: number; // only when a real discount exists
       image?: string; // add real photos later
       inStock: boolean;
       isNew?: boolean;
       isFeatured?: boolean;
       isBestSeller?: boolean;
       isSample?: boolean; // true = placeholder, NOT a real product
};

// SAMPLE DATA ONLY. Names and prices are placeholders for testing the design.
// They will be replaced by real products from the database later.
export const sampleProducts: Product[] = [
       {
              id: "s1",
              slug: "sample-jhumka-earrings",
              nameEn: "Sample Jhumka Earrings",
              nameBn: "নমুনা ঝুমকা",
              categorySlug: "earrings",
              price: 1200,
              inStock: true,
              isNew: true,
              isSample: true,
       },
       {
              id: "s2",
              slug: "sample-neck-set",
              nameEn: "Sample Neck Set",
              nameBn: "নমুনা নেকলেস সেট",
              categorySlug: "necklaces",
              price: 2500,
              discountPrice: 2100,
              inStock: true,
              isNew: true,
              isSample: true,
       },
       {
              id: "s3",
              slug: "sample-churi-set",
              nameEn: "Sample Churi Set",
              nameBn: "নমুনা চুড়ি সেট",
              categorySlug: "churi",
              price: 900,
              inStock: true,
              isNew: true,
              isSample: true,
       },
       {
              id: "s4",
              slug: "sample-payel",
              nameEn: "Sample Payel",
              nameBn: "নমুনা পায়েল",
              categorySlug: "payel",
              price: 1100,
              inStock: true,
              isNew: true,
              isSample: true,
       },
       {
              id: "s5",
              slug: "sample-bridal-set",
              nameEn: "Sample Bridal Set",
              nameBn: "নমুনা ব্রাইডাল সেট",
              categorySlug: "bridal",
              price: 8500,
              discountPrice: 7500,
              inStock: true,
              isFeatured: true,
              isSample: true,
       },
       {
              id: "s6",
              slug: "sample-ring",
              nameEn: "Sample Ring",
              nameBn: "নমুনা আংটি",
              categorySlug: "rings",
              price: 700,
              inStock: true,
              isFeatured: true,
              isSample: true,
       },
       {
              id: "s7",
              slug: "sample-bracelet",
              nameEn: "Sample Bracelet",
              nameBn: "নমুনা ব্রেসলেট",
              categorySlug: "bracelets",
              price: 950,
              inStock: true,
              isFeatured: true,
              isSample: true,
       },
       {
              id: "s8",
              slug: "sample-kids-set",
              nameEn: "Sample Kids Set",
              nameBn: "শিশুদের নমুনা সেট",
              categorySlug: "children",
              price: 600,
              inStock: false, // used to test the "Out of stock" label
              isFeatured: true,
              isSample: true,
       },
       {
              id: "s9",
              slug: "sample-drop-earrings",
              nameEn: "Sample Drop Earrings",
              nameBn: "নমুনা ড্রপ ইয়াররিং",
              categorySlug: "earrings",
              price: 850,
              inStock: true,
              isBestSeller: true,
              isSample: true,
       },
       {
              id: "s10",
              slug: "sample-pendant-necklace",
              nameEn: "Sample Pendant Necklace",
              nameBn: "নমুনা পেন্ডেন্ট নেকলেস",
              categorySlug: "necklaces",
              price: 1500,
              discountPrice: 1350,
              inStock: true,
              isBestSeller: true,
              isSample: true,
       },
       {
              id: "s11",
              slug: "sample-charm-bracelet",
              nameEn: "Sample Charm Bracelet",
              nameBn: "নমুনা চার্ম ব্রেসলেট",
              categorySlug: "bracelets",
              price: 800,
              inStock: true,
              isBestSeller: true,
              isSample: true,
       },
       {
              id: "s12",
              slug: "sample-statement-ring",
              nameEn: "Sample Statement Ring",
              nameBn: "নমুনা স্টেটমেন্ট আংটি",
              categorySlug: "rings",
              price: 650,
              inStock: true,
              isBestSeller: true,
              isSample: true,
       },
];