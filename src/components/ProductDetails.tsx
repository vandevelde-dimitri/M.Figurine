import { Product } from "@/types/type";
import Image from "next/image";
import Rating from "./ReviewForm";
import ReviewList from "./ReviewList";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Button } from "./ui/button";

export default function ProductDetails({ product }: { product: Product }) {
    return (
        <>
            <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl p-6 border flex flex-col justify-between md:flex-row">
                    <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src={product.image}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <div className="flex flex-col justify-between p-3">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            {product.name}
                        </CardItem>
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            {product.description}
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                {product.price}$
                            </CardItem>
                            <Button
                                className="px-4 py-2 rounded-xl border text-xs font-bold"
                                variant={"ghost"}
                            >
                                Ajouter au panier
                            </Button>
                        </div>
                    </div>
                </CardBody>
            </CardContainer>
            {/* <Card className=" bg-transparent w-9/12">
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
            </Card> */}
            <div className="flex w-9/12 justify-between mt-6">
                <Rating />
                <ReviewList />
            </div>
        </>
    );
}
