import type { Product } from "@/constants/products";

export type PriceInfo = {
       current: number; // the price the customer pays
       original?: number; // shown crossed out, only when there is a real discount
       percentOff: number;
};

export function getPriceInfo(product: Product): PriceInfo {
       const { price, discountPrice } = product;

       if (typeof discountPrice === "number" && discountPrice < price) {
              return {
                     current: discountPrice,
                     original: price,
                     percentOff: Math.round(((price - discountPrice) / price) * 100),
              };
       }

       return { current: price, percentOff: 0 };
}