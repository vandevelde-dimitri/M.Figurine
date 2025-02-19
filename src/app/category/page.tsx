import SectionProduct from "@/components/SectionProduct";
import data from "@/data/data.json";

export default function CategoryPage() {
    return (
        <>
            {data.category.map((category) => {
                const products = data.product.filter((product) =>
                    data.product_category.some(
                        (pc) =>
                            pc.Id_product === product.Id_product &&
                            pc.Id_category === category.Id_category
                    )
                );

                return (
                    <SectionProduct
                        link={`/category/${category.Id_category.toString()}`}
                        key={category.Id_category}
                        titleSection={category.name}
                        product={products}
                    />
                );
            })}
        </>
    );
}
