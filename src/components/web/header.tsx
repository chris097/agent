"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    const navItems = [
        { name: "For Rent", href: "/rent" },
        { name: "For Sale", href: "/sale" },
    ];

    return (
        <div className="max-w-7xl mx-auto font-montserrat relative z-[999]">
            <div className="flex justify-between items-center h-16">
                {/* Logo / Brand */}
                <div>
                    <h1 className="text-2xl text-white font-medium">payAgent</h1>
                </div>

                {/* Navigation */}
                <nav className="flex gap-4 items-center text-white">
                    <ul className="flex gap-6 mr-14">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`text-sm cursor-pointer font-medium uppercase transition-colors duration-200
                      ${isActive ? "text-basegreen" : "text-white hover:text-basegreen"}
                    `}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Auth Buttons */}
                    <div>
                        <button className="mr-6 font-medium cursor-pointer hover:text-basegreen transition-colors duration-200">
                            Login
                        </button>
                        <button className="bg-basegreen text-white px-4 py-2 rounded-full font-medium cursor-pointer hover:bg-basegreen/70 transition-colors duration-200">
                            Register
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;