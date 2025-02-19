import { Product } from "@/types/type";
import Link from "next/link";
import ProductBox from "./produc";

export default function SectionProduct({
    titleSection,
    product,
    link,
}: {
    titleSection: string;
    product: Product[];
    link?: string;
}) {
    return (
        <section className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">{titleSection}</h1>
                {link && (
                    <Link
                        href={link}
                        className="text-sm font-normal text-gray-800 hover:underline"
                    >
                        Voir tout
                    </Link>
                )}
            </div>
            <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {product.map((product) => (
                    <ProductBox key={product.Id_product} product={product} />
                ))}
            </section>
        </section>
    );
}
