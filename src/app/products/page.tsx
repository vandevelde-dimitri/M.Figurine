import SectionProduct from "@/components/SectionProduct";
import data from "@/data/data.json";

export default function ProductPage() {
    return (
        <SectionProduct titleSection={"Nos articles"} product={data.product} />
    );
}
