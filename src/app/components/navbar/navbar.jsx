"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import MobileNavLinks from "./mobile-nav-links";
import { Button } from "@/components/ui/button";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [visibleMenu, setVisibleMenu] = useState(false);
    const pathName = usePathname();
    return (
        <div className="py-2 lg:py-4 shadow sticky top-0 z-[100] ">
            <div className="container mx-auto flex justify-center lg:justify-between items-center relative">
                <Link href="/">
                    <Image
                        alt="logo"
                        src="/images/logo.png"
                        height={100}
                        width={200}
                        className="w-[82px] lg:w-[90px] object-contain"
                    />
                </Link>

                <MobileNavLinks
                    visibleMenu={visibleMenu}
                    setVisibleMenu={setVisibleMenu}
                />

                <div className="text-dark hidden lg:flex gap-8 items-center font-medium">
                    <Link href="/">Home</Link>
                    <Link
                        href="/about"
                        className={cn(pathName === "/about" && "text-primary")}
                    >
                        About us
                    </Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Policyholder Portal</Link>
                    <Button>Report a Claim</Button>
                </div>

                <div className="absolute right-6 lg:hidden">
                    {!visibleMenu && (
                        <HiMenuAlt3
                            className="text-xl"
                            onClick={() => setVisibleMenu(true)}
                        />
                    )}
                    {visibleMenu && (
                        <MdClose
                            className="text-xl"
                            onClick={() => setVisibleMenu(false)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
