"use client";
import { Product } from "@/types/type";
import Image from "next/image";
import { useState } from "react";
import Rating from "./ReviewForm";
import ReviewList from "./ReviewList";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Button } from "./ui/button";

export default function ProductDetails({ product }: { product: Product }) {
    const [mainImage, setMainImage] = useState(product.image);
    return (
        <>
            <CardContainer>
                <CardBody className="bg-gray-50 relative group/card   border-black/[0.1] w-full  h-auto rounded-xl p-6 border flex flex-col justify-between md:flex-row">
                    <div>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={mainImage}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="image principale du produit"
                            />
                        </CardItem>
                        <div className="flex gap-3">
                            <CardItem
                                translateZ="100"
                                className="mt-4 "
                                onClick={() =>
                                    setMainImage(
                                        "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D"
                                    )
                                }
                            >
                                <Image
                                    src={
                                        "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D"
                                    }
                                    height="1000"
                                    width="1000"
                                    className="h-16 w-16 object-cover rounded-xl cursor-pointer group-hover/card:shadow-xl hover:border hover:border-black"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <CardItem
                                translateZ="100"
                                className="mt-4"
                                onClick={() =>
                                    setMainImage(
                                        "https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvbmV8ZW58MHx8MHx8fDA%3D"
                                    )
                                }
                            >
                                <Image
                                    src={
                                        "https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvbmV8ZW58MHx8MHx8fDA%3D"
                                    }
                                    height="1000"
                                    width="1000"
                                    className="h-16 w-16 object-cover rounded-xl cursor-pointer group-hover/card:shadow-xl hover:border hover:border-black"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <CardItem
                                translateZ="100"
                                className="mt-4"
                                onClick={() =>
                                    setMainImage(
                                        "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lfGVufDB8fDB8fHww"
                                    )
                                }
                            >
                                <Image
                                    src={
                                        "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lfGVufDB8fDB8fHww"
                                    }
                                    height="1000"
                                    width="1000"
                                    className="h-16 w-16 object-cover rounded-xl cursor-pointer group-hover/card:shadow-xl hover:border hover:border-black"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <CardItem
                                translateZ="100"
                                className="mt-4"
                                onClick={() =>
                                    setMainImage(
                                        "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
                                    )
                                }
                            >
                                <Image
                                    src={
                                        "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
                                    }
                                    height="1000"
                                    width="1000"
                                    className="h-16 w-16 object-cover rounded-xl cursor-pointer group-hover/card:shadow-xl hover:border hover:border-black"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <CardItem
                                translateZ="100"
                                className="mt-4"
                                onClick={() =>
                                    setMainImage(
                                        "https://images.unsplash.com/photo-1525598912003-663126343e1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8fDA%3D"
                                    )
                                }
                            >
                                <Image
                                    src={
                                        "https://images.unsplash.com/photo-1525598912003-663126343e1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8fDA%3D"
                                    }
                                    height="1000"
                                    width="1000"
                                    className="h-16 w-16 object-cover rounded-xl cursor-pointer group-hover/card:shadow-xl hover:border hover:border-black"
                                    alt="thumbnail"
                                />
                            </CardItem>
                        </div>
                    </div>
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
            <div className="flex flex-col md:flex-row md:w-4/5 w-full justify-between mt-6">
                <Rating />
                <ReviewList />
            </div>
        </>
    );
}
