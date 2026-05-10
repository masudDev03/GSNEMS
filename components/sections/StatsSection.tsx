'use client';

 import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { STATS } from '@/lib/constants';

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });

  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function StatsSection() {
  return (

<section className="relative w-full h-screen overflow-hidden">

  {/* Background Image */}
  <Image
    src="/homepage.counting.bg.jpeg"
    alt="Background"
    fill
    priority
    className="object-contain"
  />

  {/* Content */}
  <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
    <div className="bg-primary text-primary-foreground py-16 px-8 rounded-2xl shadow-2xl max-w-5xl w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {STATS.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <AnimatedNumber value={stat.value} />
            </div>

            <div className="text-base md:text-lg text-primary-foreground/90">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}
