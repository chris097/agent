"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { animated, useSpring, useTransition } from "@react-spring/web";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Button from "../ui/button";

const navItems = [
    { name: "For Rent", href: "/rent" },
    { name: "For Sale", href: "/sale" },
];

const Header = ({
    isTextColor = true
}: {
    isTextColor?: boolean;
}) => {
    const pathname = usePathname();
    const router = useRouter();
    const [showNav, setShowNav] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // handle hide on scroll down / show on scroll up
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        setLastScrollY(window.scrollY);
        const throttled = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttled);
        return () => window.removeEventListener("scroll", throttled);
    }, []);

    const fadeInAnimation: any = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? "0%" : "-100%"})`,
        config: { tension: 220, friction: 20 },
    });

    const AnimatedHeader = animated.header as React.ComponentType<
        React.HTMLAttributes<HTMLElement>
    >;

    // transition for mobile nav drawer
    const transitions = useTransition(showNav, {
        from: { opacity: 0, transform: "translateX(100%)" },  // start offscreen right
        enter: { opacity: 1, transform: "translateX(0%)" },   // slide to center
        leave: { opacity: 0, transform: "translateX(100%)" }, // slide back right
        config: { tension: 120, friction: 30 },
    });

    return (
        <AnimatedHeader
            style={fadeInAnimation}
            className="fixed top-0 left-0 w-full bg-transparent z-50"
        >
            <div className={`max-w-7xl mx-auto lg:px-0 px-4 flex justify-between items-center h-16 ${isTextColor ? 'text-white' : 'text-black'}`}>
                {/* Logo */}
                <h1 className="text-2xl font-medium">payAgentt</h1>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-6">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`text-sm font-medium uppercase transition-colors duration-200
                      ${isActive
                                                ? "text-basegreen"
                                                : `${isTextColor ? 'text-white' : 'text-black'} hover:text-basegreen`
                                            }
                    `}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div>
                        <Button onClick={() => router.push('/login')} className={`transition-colors bg-transparent ${isTextColor ? '!text-white' : '!text-black'} font-semibold hover:bg-transparent hover:text-basegreen`}>
                            Login
                        </Button>
                        <Button onClick={() => router.push('/register')} className="text-white bg-basegreen px-4 py-2 !rounded-full font-medium hover:bg-basegreen/70 transition-colors">
                            Register
                        </Button>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setShowNav(true)}
                    className={`md:hidden focus:outline-none ${isTextColor ? 'text-white' : 'text-black'}`}
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Menu Drawer with animation */}
            {transitions(
                (styles, item) =>
                    item && (
                        <animated.div
                            style={styles}
                            className={`fixed top-0 left-0 w-full bg-black flex flex-col p-6 z-50 text-white`}
                        >
                            <div className="flex justify-between items-center mb-10">
                                <h1 className="text-2xl font-medium">payAgent</h1>
                                <button
                                    onClick={() => setShowNav(false)}
                                    className={`text-white focus:outline-none`}
                                >
                                    <X size={28} />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-6 text-lg">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setShowNav(false)}
                                            className={`uppercase font-medium transition-colors ${isActive ? "text-basegreen" : "hover:text-basegreen"
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}

                                <div className={`mt-8 flex flex-col gap-4 relative text-white`}>
                                    <Button onClick={() => router.push('/login')} className="transition-colors bg-transparent !text-white font-semibold hover:bg-transparent hover:text-basegreen">
                                        Login
                                    </Button>
                                    <Button onClick={() => router.push('/register')} className="text-white bg-basegreen px-4 py-2 !rounded-full font-medium hover:bg-basegreen/70 transition-colors">
                                        Register
                                    </Button>
                                </div>
                            </nav>
                        </animated.div>
                    )
            )}
        </AnimatedHeader>
    );
};

// Utility function for throttling
function throttle(fn: Function, wait: number) {
    let inThrottle: boolean, lastFn: ReturnType<typeof setTimeout>, lastTime: number;
    return function (this: any) {
        const context = this,
            args = arguments;
        if (!inThrottle) {
            fn.apply(context, args);
            lastTime = Date.now();
            inThrottle = true;
        } else {
            clearTimeout(lastFn);
            lastFn = setTimeout(function () {
                if (Date.now() - lastTime >= wait) {
                    fn.apply(context, args);
                    lastTime = Date.now();
                }
            }, Math.max(wait - (Date.now() - lastTime), 0));
        }
    };
}

export default Header;