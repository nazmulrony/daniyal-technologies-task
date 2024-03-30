"use client";
import { cn } from "@/lib/utils";

export default function MobileNavLinks({ visibleMenu, setVisibleMenu }) {
    return (
        <div
            className={cn(
                "bg-primary h-40 w-full left-0 fixed top-16 duration-500 opacity-50",
                visibleMenu
                    ? "translate-x-0 opacity-100  "
                    : "translate-x-[-100%] "
            )}
        >
            <div className=" container"></div>
        </div>
    );
}
