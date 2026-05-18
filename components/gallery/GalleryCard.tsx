'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Images } from 'lucide-react';

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  coverImage: string;
  images: string[];
}

interface GalleryCardProps {
  item: GalleryItem;
  onClick: () => void;
}

export function GalleryCard({ item, onClick }: GalleryCardProps) {
  const { title, category, coverImage, images } = item;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div 
      onClick={onClick}
      className="relative group w-full aspect-[4/5] cursor-pointer select-none"
    >
      {/* Ghost Card 2 (Backmost card in physical stack) */}
      <div 
        className="absolute inset-0 rounded-2xl bg-white border border-slate-100 shadow-md transform rotate-6 translate-y-3 translate-x-3 transition-all duration-500 ease-out group-hover:rotate-[10deg] group-hover:translate-y-5 group-hover:translate-x-5 z-10 overflow-hidden"
        style={{ transformOrigin: 'bottom center' }}
      >
        <div className="absolute inset-0 bg-slate-950/10 z-10" />
        <Image 
          src={coverImage} 
          alt="" 
          fill 
          sizes="(max-width: 768px) 33vw, 25vw"
          className="object-cover opacity-40 blur-[2px]" 
        />
      </div>

      {/* Ghost Card 1 (Middle card in physical stack) */}
      <div 
        className="absolute inset-0 rounded-2xl bg-white border border-slate-100 shadow-md transform -rotate-3 -translate-y-2 translate-x-1.5 transition-all duration-500 ease-out group-hover:-rotate-[5deg] group-hover:-translate-y-3 group-hover:translate-x-2.5 z-20 overflow-hidden"
        style={{ transformOrigin: 'bottom center' }}
      >
        <div className="absolute inset-0 bg-slate-950/10 z-10" />
        <Image 
          src={coverImage} 
          alt="" 
          fill 
          sizes="(max-width: 768px) 33vw, 25vw"
          className="object-cover opacity-60 blur-[1px]" 
        />
      </div>

      {/* Main Front Card */}
      <div 
        className="relative w-full h-full rounded-2xl bg-white border border-slate-200/80 shadow-lg transition-all duration-500 ease-out transform group-hover:-translate-y-4 group-hover:scale-[1.02] group-hover:shadow-2xl z-30 overflow-hidden flex flex-col"
      >
        {/* Cover Image Area */}
        <div className="relative flex-1 w-full overflow-hidden bg-slate-50">
          <Image 
            src={coverImage} 
            alt={title} 
            fill 
            sizes="(max-width: 768px) 50vw, 33vw"
            className={`object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
              isImageLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
            }`} 
            priority={item.id <= 4}
            onLoad={() => setIsImageLoaded(true)}
          />

          {/* Skeleton Shimmer Overlay */}
          {!isImageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200/65 animate-pulse z-10" />
          )}
          
          {/* Subtle vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-75 z-10" />

          {/* Category Badge */}
          <div className="absolute top-3.5 left-3.5 z-20">
            <span className="px-3 py-1 text-xs font-semibold text-white bg-slate-950/60 backdrop-blur-md border border-white/10 rounded-full shadow-sm">
              {category}
            </span>
          </div>

          {/* Photos Count Indicator */}
          <div className="absolute bottom-3.5 right-3.5 z-20 bg-slate-950/60 backdrop-blur-md border border-white/10 text-white text-xs px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-sm font-medium">
            <Images className="w-3.5 h-3.5 text-blue-300" />
            <span>{images.length} Photos</span>
          </div>
        </div>

        {/* Album Metadata Footer */}
        <div className="p-4 md:p-5 bg-white border-t border-slate-100 flex flex-col justify-center">
          <h3 className="font-bold text-slate-800 text-sm md:text-base line-clamp-1 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-bold">
            View Album
          </p>
        </div>
      </div>
    </div>
  );
}
