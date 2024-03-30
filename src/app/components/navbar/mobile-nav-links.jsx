"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavLinks({ visibleMenu, setVisibleMenu }) {
    return (
        <div
            className={cn(
                "lg:hidden bg-primary  w-full left-0 fixed top-16 duration-500 opacity-30",
                visibleMenu
                    ? "translate-x-0 opacity-100  "
                    : "translate-x-[-100%] "
            )}
        >
            <div className="container text-white flex flex-col gap-6  py-6 font-medium">
                <Link onClick={() => setVisibleMenu(false)} href="/">
                    Home
                </Link>
                <Link onClick={() => setVisibleMenu(false)} href="/about">
                    About us
                </Link>
                <Link onClick={() => setVisibleMenu(false)} href="/">
                    Contact
                </Link>
                <Link onClick={() => setVisibleMenu(false)} href="/">
                    Report a Claim
                </Link>
                <Link onClick={() => setVisibleMenu(false)} href="/">
                    Policyholder Portal
                </Link>
            </div>
        </div>
    );
}
