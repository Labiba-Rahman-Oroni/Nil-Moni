import type { Metadata } from "next";
import CollectionView from "@/components/shop/CollectionView";

export const metadata: Metadata = {
       title: "Children's Collection | NIL MONI – নীল মণি",
       description: "Jewellery for little ones from NIL MONI.",
};

export default function ChildrenPage() {
       return <CollectionView slug="children" />;
}