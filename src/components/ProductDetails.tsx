import { Product } from "@/types/type";
import Image from "next/image";
import Rating from "./ReviewForm";
import ReviewList from "./ReviewList";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";

export default function ProductDetails({ product }: { product: Product }) {
    return (
        <>
            <Card className=" bg-transparent w-9/12">
                <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4 bg-white p-5 rounded-lg">
                            <div className="relative w-1/2 aspect-square mb-4 m-auto">
                                <Image
                                    src={product.image}
                                    alt="Image principale du produit"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    priority={true}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="flex justify-start gap-4">
                                <div className="relative w-1/5 aspect-square">
                                    <Image
                                        src="https://images.unsplash.com/photo-1707592691247-5c3a1c7ba0e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lyZWxlc3MlMjBtb3VzZXxlbnwwfHwwfHx8MA%3D%3D"
                                        alt="Image secondaire du produit 1"
                                        fill
                                        style={{ objectFit: "cover" }}
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                                        className="rounded-lg"
                                    />
                                </div>
                                <div className="relative w-1/5 aspect-square">
                                    <Image
                                        src="https://images.unsplash.com/photo-1707592691247-5c3a1c7ba0e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lyZWxlc3MlMjBtb3VzZXxlbnwwfHwwfHx8MA%3D%3D"
                                        alt="Image secondaire du produit 2"
                                        fill
                                        style={{ objectFit: "cover" }}
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 flex flex-col justify-around">
                            <CardHeader className="p-0">
                                <CardTitle className="text-2xl font-bold">
                                    {product.name}
                                </CardTitle>
                            </CardHeader>
                            <div className="space-y-2">
                                <p>{product.description}</p>
                            </div>
                            <CardDescription className="text-lg font-semibold text-primary flex flex-col md:flex-row justify-between items-center">
                                <p>{product.price} €</p>
                                <Button>Ajouter au panier</Button>
                            </CardDescription>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <div className="flex w-9/12 justify-between mt-6">
                <Rating />
                <ReviewList />
            </div>
        </>
    );
}
