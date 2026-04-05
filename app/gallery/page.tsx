'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '@/lib/constants';
import { X } from 'lucide-react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const selectedImageData = selectedImage
    ? GALLERY_ITEMS.find((item) => item.id === selectedImage)
    : null;

  return (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore moments of learning, joy, and growth at Gurukul Shikshaniketan
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {GALLERY_CATEGORIES.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={`cursor-pointer transition-all ${
                    selectedCategory === category
                      ? 'bg-primary hover:bg-primary/90'
                      : 'hover:bg-primary/10'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImage(item.id)}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center"
                  >
                    <p className="text-white text-sm font-medium text-center px-4">
                      {item.title}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">
                No images found in this category
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <DialogTitle className="sr-only">
            {selectedImageData?.title}
          </DialogTitle>
          {selectedImageData && (
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/80 to-secondary/80 rounded-lg flex items-center justify-center">
                <div className="text-center text-white px-8">
                  <h3 className="text-2xl font-bold mb-4">
                    {selectedImageData.title}
                  </h3>
                  <Badge variant="secondary" className="mb-4">
                    {selectedImageData.category}
                  </Badge>
                  <p className="text-white/90">{selectedImageData.alt}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
