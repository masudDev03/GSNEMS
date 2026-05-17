'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '@/lib/constants';
import { GalleryCard, GalleryItem } from '@/components/gallery/GalleryCard';
import { GalleryLightbox } from '@/components/gallery/GalleryLightbox';

export function GalleryPreview() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  
  // Show 6 albums on the homepage preview
  const previewItems = GALLERY_ITEMS.slice(0, 6);

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Life at Gurukul Shikshaniketan"
          subtitle="Glimpses of learning, playing, and growing together"
          centered
        />

        {/* Premium grid display for gallery cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16 px-4 md:px-2">
          {previewItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <GalleryCard
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            </motion.div>
          ))}
        </div>

        {/* View Full Gallery Link Button */}
        <div className="text-center">
          <Button asChild size="lg" className="rounded-full px-8 shadow-md hover:shadow-lg transition-all duration-300">
            <Link href="/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Album Lightbox Overlay Component */}
      <GalleryLightbox
        item={selectedItem}
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
