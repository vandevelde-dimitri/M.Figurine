import SectionProduct from "@/components/SectionProduct";
import data from "@/data/data.json";

export default function Home() {
    return (
        <>
            <SectionProduct
                titleSection={"Nos articles"}
                product={data.product}
            />
        </>
    );
}
