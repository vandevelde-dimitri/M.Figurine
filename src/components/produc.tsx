"use client";
import { Product } from "@/types/type";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

export default function ProductBox({ product }: { product: Product }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const url = `/products/${product.Id_product}`;

    return (
        <article className="py-4 rounded-lg shadow-sm relative flex flex-col justify-between">
            {/* Icône Favori */}
            <button
                className="absolute top-7 right-3 transition"
                onClick={() => setIsFavorite(!isFavorite)}
            >
                <Heart
                    className={`w-6 h-6 transition ${
                        isFavorite
                            ? "text-red-500 fill-red-500"
                            : "text-gray-500"
                    }`}
                />
            </button>
            <Link
                href={url}
                className="flex bg-white flex-1  p-5 items-center justify-center rounded-lg"
            >
                <Image
                    src={product.image}
                    alt={"toto"}
                    width={"100"}
                    height={"80"}
                    className=" w-full h-full object-cover rounded-lg"
                />
            </Link>
            <div className="mt-2">
                <Link
                    href={url}
                    className="text-sm font-normal text-gray-800 hover:underline"
                >
                    {product.name}
                </Link>
                <div className="mt-1 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div className="text-lg font-semibold text-gray-900">
                        ${product.price}
                    </div>
                    <Button variant="ghost" className="border border-black">
                        Ajouter au pannier
                    </Button>
                </div>
            </div>
        </article>
    );
}
