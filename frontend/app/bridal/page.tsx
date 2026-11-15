import type { Metadata } from "next";
import CollectionView from "@/components/shop/CollectionView";

export const metadata: Metadata = {
       title: "Bridal Collection | NIL MONI – নীল মণি",
       description: "Explore the NIL MONI bridal jewellery collection.",
};

export default function BridalPage() {
       return <CollectionView slug="bridal" />;
}