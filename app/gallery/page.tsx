'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '@/lib/constants';
import { GalleryCard, GalleryItem } from '@/components/gallery/GalleryCard';
import { GalleryLightbox } from '@/components/gallery/GalleryLightbox';
import { GalleryCardSkeleton } from '@/components/gallery/GalleryCardSkeleton';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulated premium initial page load loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedItem(null);
  }, []);

  // Simulates a smooth transition loading state when filtering categories
  const handleCategoryChange = useCallback((category: string) => {
    if (category === selectedCategory) return;
    setIsLoading(true);
    setSelectedCategory(category);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer); // Note: react handles cleanups, but this is a callback function. Let's make sure it doesn't store state.
  }, [selectedCategory]);

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-blue-50/50 via-white to-green-50/50">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">
              School Gallery
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Explore moments of discovery, laughter, achievement, and daily life at Gurukul Shikshaniketan.
            </p>

            {/* Premium Pill Categorization Buttons */}
            <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto">
              {GALLERY_CATEGORIES.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={`cursor-pointer px-4 py-1.5 text-xs font-semibold rounded-full tracking-wide transition-all duration-300 shadow-sm ${
                    selectedCategory === category
                      ? 'bg-primary hover:bg-primary/95 text-white scale-105 shadow-md shadow-primary/10'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Grid view containing the Card Stack Elements */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 px-4 md:px-2"
          >
            <AnimatePresence mode="popLayout">
              {isLoading ? (
                // Beautiful grid of 8 skeleton cards animating sequentially
                Array.from({ length: 8 }).map((_, idx) => (
                  <motion.div
                    key={`skeleton-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                  >
                    <GalleryCardSkeleton />
                  </motion.div>
                ))
              ) : (
                filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <GalleryCard
                      item={item}
                      onClick={() => setSelectedItem(item)}
                    />
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {!isLoading && filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-slate-500 text-lg">
                No albums found in this category
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Album Lightbox Overlay Component */}
      <GalleryLightbox
        item={selectedItem}
        isOpen={selectedItem !== null}
        onClose={handleClose}
      />
    </div>
  );
}
