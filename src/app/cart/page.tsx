import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import data from "@/data/data.json";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

export default function Cart() {
    return (
        <div className="flex w-full flex-col">
            <main className="flex-1">
                <div className="container px-4 py-8 mx-auto  max-w-[1400px]">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Cart Section */}
                        <div className="flex-1 bg-white rounded-xl p-8">
                            <h1 className="text-2xl font-bold mb-6">Pannier</h1>
                            <div className="space-y-4">
                                <div className="grid grid-cols-3 text-sm text-muted-foreground">
                                    <span>ARTICLE</span>
                                    <span className="text-center">
                                        QUANTITE
                                    </span>
                                    <span className="text-right">PRIX</span>
                                </div>
                                {/* un article */}
                                <ScrollArea className="h-[200px]">
                                    {data.product.map((product) => (
                                        <div
                                            key={product.Id_product}
                                            className="grid grid-cols-3 items-center gap-4 py-4 border-b"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="h-20 w-20 relative bg-white rounded-lg p-2">
                                                    <Image
                                                        src={product.image}
                                                        alt={"item.name"}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <span className="font-medium hidden md:block">
                                                    {product.name}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-center gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                >
                                                    <Minus className="h-4 w-4" />
                                                </Button>
                                                <span className="w-8 text-center">
                                                    {2}
                                                </span>
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <div className="text-right font-medium">
                                                ${product.price}
                                            </div>
                                        </div>
                                    ))}
                                </ScrollArea>
                                {/* Total Section */}
                                <div className="space-y-2 pt-4">
                                    <div className="flex justify-between text-base">
                                        <span>Products</span>
                                        <span>
                                            ${"subtotal.toLocaleString()"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-base">
                                        <span>Shipping</span>
                                        <span>${"shipping"}</span>
                                    </div>
                                    <div className="flex justify-between border-t pt-2 text-lg font-bold">
                                        <span>Total</span>
                                        <span>${"total.toLocaleString()"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order Information Section */}
                        <div className="md:w-[400px] flex flex-col justify-center bg-white rounded-xl p-8">
                            <h2 className="text-2xl font-bold mb-6">
                                Order information
                            </h2>
                            <div className="space-y-4">
                                <Input placeholder="John Doe" />
                                <Input type="email" placeholder="john@doe.fr" />
                                <div className="grid grid-cols-2 gap-4">
                                    <Input placeholder="Lens" />
                                    <Input placeholder="62 800" />
                                </div>
                                <Input placeholder="15 rue de la raclette" />
                                <Input placeholder="Pays" />
                                <Button className="w-full bg-black text-white hover:bg-black/90">
                                    Continuer vers le paiement
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
