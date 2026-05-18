'use client';

import { useState, useEffect } from 'react';
import { HomeSlider } from '@/components/sections/HomeSlider';
import { HomeSkeleton } from '@/components/sections/HomeSkeleton';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 850);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <HomeSkeleton />;
  }

  return <HomeSlider />;
}
