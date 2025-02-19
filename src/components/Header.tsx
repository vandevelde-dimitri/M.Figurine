"use client";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [mobileNavActive, setMobileNavActive] = useState(false);

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
                    className={`${
                        mobileNavActive ? "block" : "hidden"
                    } fixed inset-0 bg-gray-900 p-10 md:flex md:static md:p-0 md:space-x-6`}
                >
                    <Link
                        href="/"
                        className="block text-gray-400 py-2 md:py-0 hover:text-white"
                    >
                        Acceuil
                    </Link>
                    <Link
                        href="/products"
                        className="block text-gray-400 py-2 md:py-0 hover:text-white"
                    >
                        Nos produits
                    </Link>
                    <Link
                        href="/category"
                        className="block text-gray-400 py-2 md:py-0 hover:text-white"
                    >
                        Categories
                    </Link>
                    <Link
                        href="/account"
                        className="block text-gray-400 py-2 md:py-0 hover:text-white"
                    >
                        Compte
                    </Link>
                    <Link
                        href="/cart"
                        className="block text-gray-400 py-2 md:py-0 hover:text-white"
                    >
                        Pannier (0)
                    </Link>
                    <Link
                        href="/search"
                        className="block text-gray-400 py-2 md:py-0 hover:text-white"
                    >
                        <Search width={"20"} />
                    </Link>
                </nav>
                <button
                    onClick={() => setMobileNavActive((prev) => !prev)}
                    className="text-white w-8 h-8 md:hidden relative z-10"
                >
                    <Menu />
                </button>
            </div>
        </header>
    );
}
