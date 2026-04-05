'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '@/lib/constants';

export function GalleryPreview() {
  const previewItems = GALLERY_ITEMS.slice(0, 6);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Life at Gurukul Shikshaniketan"
          subtitle="Glimpses of learning, playing, and growing together"
          centered
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {previewItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center"
              >
                <p className="text-white text-sm font-medium text-center px-4">
                  {item.title}
                </p>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
