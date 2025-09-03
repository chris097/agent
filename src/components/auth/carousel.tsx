"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";

import first_auth from "../../../public/images/first_auth_img.png";
import second_auth from "../../../public/images/second_auth_img.png";
import third_auth from "../../../public/images/third_auth_img.png";

import logo from "../../../public/svgs/logo-light.svg";

const slides = [
    {
        image: first_auth,
        title: "payAgentt",
        description:
            "Lorem ipsum dolor sit amet consectetur. Vel sit non odio nisi urna. In etiam dapibus aliquam ut mi mauris sagittis arcu. Gravida semper iaculis tellus dapibus amet mauris vitae erat. Curabitur neque in  ",
    },
    // {
    //     image: second_auth,
    //     title: "payAgent",
    //     description:
    //         "The laws of Lagos, designed with love for Lagosians, by Lagosians",
    // },
    // {
    //     image: third_auth,
    //     title: "payAgent",
    //     description:
    //         "The laws of Lagos, designed with love for Lagosians, by Lagosians",
    // },
];

export function OfinEkoCarousel() {
    const [selectedIndex, setSelectedIndex] = useState(0);


    return (
        <div className="relative lg:block hidden h-[647px] w-[493px] overflow-hidden">
            <div className="h-full overflow-hidden">
                <div className="h-full">
                    {slides.map((slide, index) => (
                        <div key={index} className="h-full">
                            <div
                                className="relative z-50 w-full h-full overflow-hidden"
                            >
                                <Image
                                    className="h-full w-full rounded-[40px] object-cover"
                                    src={first_auth}
                                    alt={`Slide ${index + 1}`}
                                    priority
                                />
                                <div className="absolute top-0 left-0 inset-0 bg-foreground/50 rounded-[40px] z-40" />
                                <div className="absolute bottom-0 z-20 w-full h-[341px] rounded-b-[40px] overflow-hidden">
                                    <div className="w-full h-full bg-[#1A1A1A]/30 blur-2xl" />
                                </div>
                                <div className="absolute inset-0 flex flex-col z-50 p-8">
                                    {/* Top: Logo / Title */}
                                    <div className="flex justify-center">
                                        <motion.p
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6 }}
                                            className="text-[32px] font-semibold leading-10 text-white text-center"
                                        >
                                            {slides[0].title}
                                        </motion.p>
                                    </div>

                                    {/* Middle: Description */}
                                    <div className="flex flex-1 flex-col justify-center items-center">
                                        <p className="text-lg leading-6 font-normal text-white text-center mt-44">
                                            {slides[0].description}
                                        </p>
                                    </div>
                                    <div className="flex justify-center gap-2 mb-8">
                                        {slides.map((_, dotIndex) => (
                                            <button
                                                key={dotIndex}
                                                className={`h-2 w-2 rounded-full transition-all ${dotIndex === selectedIndex
                                                    ? "bg-white w-6 rounded-[10px]"
                                                    : "bg-white/50"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};
