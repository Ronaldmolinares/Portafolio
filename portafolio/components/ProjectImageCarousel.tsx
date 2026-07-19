"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectImageCarouselProps {
    images: string[];
    alt: string;
    className?: string;
    imageClassName?: string;
    intervalMs?: number;
}

export default function ProjectImageCarousel({
    images,
    alt,
    className = "h-full w-full",
    imageClassName = "w-full h-full object-cover",
    intervalMs = 6000,
}: ProjectImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setCurrentIndex(0);
    }, [images]);

    useEffect(() => {
        if (images.length <= 1) {
            return;
        }

        const intervalId = window.setInterval(() => {
            setCurrentIndex((previousIndex) => (previousIndex + 1) % images.length);
        }, intervalMs);

        return () => window.clearInterval(intervalId);
    }, [images.length, intervalMs]);

    const handlePrev = () => {
        setCurrentIndex((previousIndex) =>
            previousIndex === 0 ? images.length - 1 : previousIndex - 1,
        );
    };

    const handleNext = () => {
        setCurrentIndex((previousIndex) =>
            previousIndex === images.length - 1 ? 0 : previousIndex + 1,
        );
    };

    if (images.length === 0) {
        return null;
    }

    return (
        <div className={`relative group ${className}`}>
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={alt}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className={imageClassName}
                />
            </AnimatePresence>

            <div className="absolute inset-0 bg-linear-to-t from-slate-950/45 via-transparent to-transparent pointer-events-none" />

            {images.length > 1 && (
                <>
                    <button
                        onClick={handlePrev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-slate-800/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-slate-800/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                        {images.map((_, dotIndex) => (
                            <button
                                key={dotIndex}
                                onClick={() => setCurrentIndex(dotIndex)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === dotIndex
                                    ? "w-4 bg-purple-500"
                                    : "w-1.5 bg-slate-500/60 hover:bg-slate-400"
                                    }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}