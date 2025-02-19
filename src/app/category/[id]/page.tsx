"use client";
import SectionProduct from "@/components/SectionProduct";
import data from "@/data/data.json";
import { useParams } from "next/navigation";

export default function CategoryDetails() {
    const params = useParams();
    const categoryId = params.id;
    // Trouver la catégorie en fonction de l'ID passé dans les params
    const category = data.category.find(
        (cat) => cat.Id_category.toString() === categoryId
    );

    // Si la catégorie n'est pas trouvée
    if (!category) {
        return <div>Category not found</div>;
    }

    // Filtrer les produits associés à cette catégorie
    const products = data.product.filter((product) =>
        data.product_category.some(
            (pc) =>
                pc.Id_product === product.Id_product &&
                pc.Id_category === category.Id_category
        )
    );

    return <SectionProduct titleSection={category.name} product={products} />;
}
