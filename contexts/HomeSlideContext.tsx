"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface HomeSlideContextType {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  totalSlides: number;
  isHomePage: boolean;
  setIsHomePage: (value: boolean) => void;
  isDesktop: boolean;
  setIsDesktop: (value: boolean) => void;
}

const HomeSlideContext = createContext<HomeSlideContextType>({
  currentSlide: 0,
  setCurrentSlide: () => {},
  totalSlides: 4,
  isHomePage: false,
  setIsHomePage: () => {},
  isDesktop: true,
  setIsDesktop: () => {},
});

export function HomeSlideProvider({ children }: { children: ReactNode }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHomePage, setIsHomePage] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  return (
    <HomeSlideContext.Provider
      value={{
        currentSlide,
        setCurrentSlide,
        totalSlides: 4,
        isHomePage,
        setIsHomePage,
        isDesktop,
        setIsDesktop,
      }}>
      {children}
    </HomeSlideContext.Provider>
  );
}

export function useHomeSlide() {
  return useContext(HomeSlideContext);
}
