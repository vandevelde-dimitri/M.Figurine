"use client";
import ProductBox from "@/components/produc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import data from "@/data/data.json";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Account() {
    const [activeTab, setActiveTab] = useState<"orders" | "wishlist">("orders");

    return (
        <div className="flex min-h-screen w-full flex-col">
            <main className="flex-1">
                <div className="container px-4 py-8 mx-auto max-w-[1400px]">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Orders and Wishlist Section */}
                        <div className="flex-1 bg-white rounded-xl p-8">
                            <div className="flex gap-6 mb-6">
                                <button
                                    className={`text-xl font-medium pb-2 border-b-2 ${
                                        activeTab === "orders"
                                            ? "border-black text-black"
                                            : "border-transparent text-gray-400"
                                    }`}
                                    onClick={() => setActiveTab("orders")}
                                >
                                    Orders
                                </button>
                                <button
                                    className={`text-xl font-medium pb-2 border-b-2 ${
                                        activeTab === "wishlist"
                                            ? "border-black text-black"
                                            : "border-transparent text-gray-400"
                                    }`}
                                    onClick={() => setActiveTab("wishlist")}
                                >
                                    Wishlist
                                </button>
                            </div>

                            {activeTab === "orders" ? (
                                <div className="space-y-6">
                                    {data.orders.map((order, index) => (
                                        <div
                                            key={index}
                                            className="border-b pb-6"
                                        >
                                            <p className="text-sm text-gray-600 mb-2">
                                                {order.created_at}
                                            </p>
                                            <div className="space-y-1 mb-4">
                                                <p>{"John Doe"}</p>
                                                <p>{"john@doe.fr"}</p>
                                                <p>{"123 Main St"}</p>
                                                <p>
                                                    {"62 800"} {"Lens"},{" "}
                                                    {"France"}
                                                </p>
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-sm">
                                                    {2} × {"phone"}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {data.product.map((product) => (
                                        <ProductBox
                                            key={product.Id_product}
                                            product={product}
                                        />
                                    ))}
                                    <div className="relative">
                                        <Heart className="absolute top-2 right-2 w-6 h-6 text-red-500 fill-red-500" />
                                        <div className="aspect-square relative mb-4">
                                            <Image
                                                src={
                                                    "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
                                                }
                                                alt={"phone"}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <h3 className="font-medium mb-2">
                                            {"phone"}
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-bold">
                                                ${24}
                                            </span>
                                            <Button variant="outline">
                                                Add to cart
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Account Details Section */}
                        <div className="md:w-[400px] bg-white rounded-xl p-8">
                            <h2 className="text-2xl font-bold mb-6">
                                Account details
                            </h2>
                            <div className="space-y-4">
                                <Input defaultValue="Dawid Paszko" />
                                <Input
                                    defaultValue="dawid.paszko@gmail.com"
                                    type="email"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <Input defaultValue="Stockholm" />
                                    <Input defaultValue="12345" />
                                </div>
                                <Input defaultValue="Test 123" />
                                <Input defaultValue="Sweden" />
                                <Button className="w-full bg-black text-white hover:bg-black/90">
                                    Mettre à jour
                                </Button>
                                <Button className="w-full bg-green-800 text-white hover:bg-green-800/90">
                                    Deconnexion
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
