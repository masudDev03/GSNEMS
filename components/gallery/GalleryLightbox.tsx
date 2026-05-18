'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import { GalleryItem } from './GalleryCard';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function GalleryLightbox({ item, isOpen, onClose }: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const images = item?.images || [];

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (images.length <= 1) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (images.length <= 1) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Reset index when modal opens with a new item
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setDirection(0);
    }
  }, [item, isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen || !item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, item, handleNext, handlePrev, onClose]);

  if (!item) return null;

  const handleThumbnailClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Framer motion variants for smooth page sliding/fading
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 150 : dir < 0 ? -150 : 0,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 320, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -150 : dir < 0 ? 150 : 0,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring' as const, stiffness: 320, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-slate-950/95 backdrop-blur-md select-none overflow-hidden"
        >
          {/* Header Bar */}
          <div 
            className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-b from-slate-950/60 to-transparent z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-bold text-primary tracking-wider uppercase">
                {item.category}
              </span>
              <h4 className="text-white font-bold text-base md:text-lg line-clamp-1">
                {item.title}
              </h4>
            </div>

            {/* Counter and Close Button */}
            <div className="flex items-center gap-4">
              <div className="text-xs font-semibold text-slate-300 bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full">
                {currentIndex + 1} / {images.length}
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full border border-slate-700/50 hover:border-slate-500/50 transition-all duration-200 cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Visual Arena */}
          <div className="relative flex-1 w-full flex items-center justify-center px-4 md:px-16">
            
            {/* Left Control Arrow */}
            {images.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-6 z-50 p-3 bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 hover:border-slate-600/80 text-white rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg group cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 transition-transform duration-200 group-hover:-translate-x-0.5" />
              </button>
            )}

            {/* Center Slider Image / Video */}
            <div 
              className="relative w-full max-w-5xl h-[55vh] md:h-[65vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full flex items-center justify-center"
                >
                  {images[currentIndex].toLowerCase().endsWith('.mp4') ? (
                    <video
                      key={images[currentIndex]}
                      src={images[currentIndex]}
                      controls
                      playsInline
                      className="w-full h-full max-h-[55vh] md:max-h-[65vh] object-contain rounded-xl shadow-2xl focus:outline-none"
                    />
                  ) : (
                    <Image
                      src={images[currentIndex]}
                      alt={`${item.title} - Image ${currentIndex + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1200px"
                      className="object-contain select-none"
                      priority
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Control Arrow */}
            {images.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-6 z-50 p-3 bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 hover:border-slate-600/80 text-white rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg group cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            )}
          </div>

          {/* Footer Thumbnails Navigation Strip */}
          <div 
            className="w-full bg-gradient-to-t from-slate-950/80 to-transparent py-6 px-6 z-50 flex justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto max-w-full no-scrollbar pb-1 px-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => handleThumbnailClick(idx, e)}
                    className={`relative w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-200 flex-shrink-0 ${
                      idx === currentIndex
                        ? 'border-primary scale-105 shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                        : 'border-slate-800 hover:border-slate-600 opacity-60 hover:opacity-90'
                    }`}
                  >
                    {img.toLowerCase().endsWith('.mp4') ? (
                      <>
                        <video
                          src={img}
                          className="object-cover w-full h-full"
                          muted
                          playsInline
                          preload="metadata"
                        />
                        <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center z-10">
                          <Play className="w-4.5 h-4.5 text-white fill-white/80" />
                        </div>
                      </>
                    ) : (
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
