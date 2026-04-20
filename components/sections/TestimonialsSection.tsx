'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { TESTIMONIALS } from '@/lib/constants';
import { Quote, Star } from 'lucide-react';

export function TestimonialsSection() {
  // Triple the items to ensure seamless infinite looping on all screen sizes
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <SectionHeader
          title="What Parents Say"
          subtitle="Hear from the families who trust us with their children's education"
          centered
        />
      </div>

      <div className="relative flex overflow-hidden w-full group py-4">
        <motion.div
          animate={{ x: ['0%', '-33.333333%'] }}
          transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
          className="flex gap-6 px-3 w-max"
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={index} className="w-[300px] sm:w-[350px] shrink-0">
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-primary/20 mb-4 shrink-0" />
                  <div className="flex mb-4 shrink-0">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-grow">
                    {testimonial.content}
                  </p>
                  <div className="border-t pt-4 shrink-0">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
