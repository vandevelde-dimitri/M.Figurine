"use client";
import ProductBox from "@/components/produc";
import { Input } from "@/components/ui/input";
import data from "@/data/data.json";
import { useState } from "react";

export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="w-full">
            <Input
                type="text"
                placeholder="Rechercher un produit..."
                className="p-4 border rounded-lg w-full"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                {data.product
                    .filter((product) =>
                        product.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                    )
                    .map((product) => (
                        <ProductBox
                            key={product.Id_product}
                            product={product}
                        />
                    ))}
            </div>
        </div>
    );
}
