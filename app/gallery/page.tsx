'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '@/lib/constants';
import { GalleryCard, GalleryItem } from '@/components/gallery/GalleryCard';
import { GalleryLightbox } from '@/components/gallery/GalleryLightbox';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

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
                  onClick={() => setSelectedCategory(category)}
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
              {filteredItems.map((item) => (
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
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
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
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
