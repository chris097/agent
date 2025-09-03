import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PropertyGalleryProps {
    images: string[] | any[];
    autoPlayInterval?: number; // ms
}

const PropertyGallery: React.FC<PropertyGalleryProps> = ({
    images,
    autoPlayInterval = 4000,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // autoplay
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, autoPlayInterval);
        return () => clearInterval(timer);
    }, [currentIndex, autoPlayInterval]);

    // sliding window of 3 thumbnails
    const getVisibleThumbnails = () => {
        if (images.length <= 3) return images;

        if (currentIndex <= 1) {
            return images.slice(0, 3); // [0,1,2]
        } else if (currentIndex >= images.length - 2) {
            return images.slice(images.length - 3); // last 3
        } else {
            return images.slice(currentIndex - 1, currentIndex + 2); // center on current
        }
    };

    return (
        <div className="w-full space-y-4">
            {/* Main image */}
            <div className="w-full h-[243px] relative overflow-hidden rounded-[20px]">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full h-full"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt="property detail"
                            fill
                            className="object-cover rounded-[20px]"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/30 rounded-[20px]" />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full z-50 hover:bg-black/60 transition"
                >
                    <ChevronLeft className="text-white" size={22} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full z-50 hover:bg-black/60 transition"
                >
                    <ChevronRight className="text-white" size={22} />
                </button>
            </div>

            {/* Thumbnails (always 3, sliding window) */}
            <div className="grid grid-cols-3 gap-3">
                {getVisibleThumbnails().map((img, i) => {
                    const actualIndex = images.indexOf(img);
                    return (
                        <motion.div
                            key={actualIndex}
                            onClick={() => setCurrentIndex(actualIndex)}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative w-full h-[150px] cursor-pointer rounded-[20px] overflow-hidden 
              transition-all duration-300 ${actualIndex === currentIndex ? "ring-2 ring-baseb" : ""
                                }`}
                        >
                            <Image
                                src={img}
                                alt="property thumbnail"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30" />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default PropertyGallery;