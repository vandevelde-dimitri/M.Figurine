"use client";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };
    const navigation = [
        {
            name: "Acceuil",
            href: "/",
        },
        {
            name: "Nos produits",
            href: "/products",
        },
        {
            name: "Categories",
            href: "/category",
        },
        {
            name: "Compte",
            href: "/account",
        },
        {
            name: "Pannier (0)",
            href: "/cart",
        },
        {
            name: isOpen ? "Rechercher" : <Search width={"20"} />,
            href: "/search",
        },
    ];

    return (
        <header className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-5 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-white text-xl font-bold relative z-10"
                >
                    M. Figurine
                </Link>
                <nav
                    className={
                        "hidden fixed inset-0 bg-gray-900 p-10 md:flex md:static md:p-0 md:space-x-6"
                    }
                >
                    {navigation.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="block text-gray-400 py-2 md:py-0 hover:text-white"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="lg:hidden ml-auto">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                        <nav className="flex flex-col space-y-4 mt-6">
                            {navigation.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="text-foreground/60 transition-colors hover:text-foreground"
                                    onClick={handleLinkClick}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
