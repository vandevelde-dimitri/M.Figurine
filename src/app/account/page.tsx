"use client";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import data from "@/data/data.json";
import { Ellipsis } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Account() {
    const [activeTab, setActiveTab] = useState<"orders" | "wishlist">("orders");

    return (
        <div className="flex w-full flex-col">
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
                                    Mes commandes
                                </button>
                                <button
                                    className={`text-xl font-medium pb-2 border-b-2 ${
                                        activeTab === "wishlist"
                                            ? "border-black text-black"
                                            : "border-transparent text-gray-400"
                                    }`}
                                    onClick={() => setActiveTab("wishlist")}
                                >
                                    Mes favoris
                                </button>
                            </div>

                            {activeTab === "orders" ? (
                                <div className="space-y-6">
                                    <ScrollArea className="h-[300px] pr-4">
                                        {data.orders.map((order, index) => (
                                            <div
                                                key={index}
                                                className="border-b py-6"
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
                                    </ScrollArea>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Visuel</TableHead>
                                                <TableHead>Nom</TableHead>
                                                <TableHead>Prix</TableHead>
                                                <TableHead className="text-right">
                                                    Action
                                                </TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {data.product.map((product) => (
                                                <TableRow
                                                    key={product.Id_product}
                                                >
                                                    <TableCell>
                                                        <Image
                                                            src={product.image}
                                                            width={50}
                                                            height={50}
                                                            alt={product.name}
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        {product.name}
                                                    </TableCell>
                                                    <TableCell>
                                                        {product.price} €
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger
                                                                asChild
                                                            >
                                                                <Button
                                                                    size="icon"
                                                                    variant="outline"
                                                                    className="rounded-full"
                                                                >
                                                                    <Ellipsis />
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent className="w-56">
                                                                <DropdownMenuLabel>
                                                                    Action
                                                                </DropdownMenuLabel>
                                                                <DropdownMenuSeparator />
                                                                <DropdownMenuGroup>
                                                                    <DropdownMenuItem>
                                                                        Voir
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuItem>
                                                                        Mettre
                                                                        dans le
                                                                        panier
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuItem>
                                                                        Supprimer
                                                                    </DropdownMenuItem>
                                                                </DropdownMenuGroup>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            )}
                        </div>

                        {/* Account Details Section */}
                        <div className="md:w-[400px] bg-white rounded-xl p-8">
                            <h2 className="text-2xl font-bold mb-6">
                                Information personnelle
                            </h2>
                            <div className="space-y-4">
                                <Input defaultValue="John Doe" />
                                <Input
                                    defaultValue="john@doe.com"
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
