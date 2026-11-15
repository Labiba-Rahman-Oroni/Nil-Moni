import type { Metadata } from "next";
import CollectionView from "@/components/shop/CollectionView";

export const metadata: Metadata = {
       title: "Everyday Wear | NIL MONI – নীল মণি",
       description: "Light and easy everyday jewellery from NIL MONI.",
};

export default function EverydayPage() {
       return <CollectionView slug="everyday" />;
}