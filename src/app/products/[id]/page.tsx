"use client";
import ProductDetails from "@/components/ProductDetails";
import data from "@/data/data.json";
import { useParams } from "next/navigation";

export default function Product() {
    const params = useParams();
    const productId = params.id;

    const product = data.product.find(
        (product) => product.Id_product.toString() === productId
    )!;

    return <ProductDetails product={product} />;
}
