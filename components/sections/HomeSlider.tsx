"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHomeSlide } from "@/contexts/HomeSlideContext";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { HeroSection } from "./HeroSection";
import { StatsSection } from "./StatsSection";
import { AboutSnapshot } from "./AboutSnapshot";
import { TestimonialsSection } from "./TestimonialsSection";

const TOTAL_SLIDES = 4;
const DEBOUNCE_MS = 800;

export function HomeSlider() {
  const { currentSlide, setCurrentSlide, setIsHomePage, setIsDesktop, isDesktop } = useHomeSlide();
  const pathname = usePathname();
  const isLocked = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isLastSlide = currentSlide === TOTAL_SLIDES - 1;
  const isDesktopQuery = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    setIsDesktop(isDesktopQuery);
  }, [isDesktopQuery, setIsDesktop]);

  // Register as home page on mount
  useEffect(() => {
    if (pathname === "/") {
      setIsHomePage(true);
      setCurrentSlide(0);
    }
    return () => {
      setIsHomePage(false);
    };
  }, [pathname, setIsHomePage, setCurrentSlide]);

  const goToSlide = useCallback(
    (direction: "next" | "prev") => {
      if (isLocked.current) return;
      isLocked.current = true;

      setCurrentSlide(
        direction === "next"
          ? Math.min(currentSlide + 1, TOTAL_SLIDES - 1)
          : Math.max(currentSlide - 1, 0),
      );

      setTimeout(() => {
        isLocked.current = false;
      }, DEBOUNCE_MS);
    },
    [currentSlide, setCurrentSlide],
  );

  // Mouse wheel handler
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) < 10) return;

      if (e.deltaY > 0) {
        goToSlide("next");
      } else {
        goToSlide("prev");
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        goToSlide("next");
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goToSlide("prev");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToSlide]);

  // Touch support
  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaX = e.changedTouches[0].clientX - touchStartX;
      const deltaY = e.changedTouches[0].clientY - touchStartY;

      // Use whichever axis had more movement
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (Math.abs(deltaX) > 50) {
          if (deltaX < 0) goToSlide("next");
          else goToSlide("prev");
        }
      } else {
        if (Math.abs(deltaY) > 50) {
          if (deltaY < 0) goToSlide("next");
          else goToSlide("prev");
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      container.addEventListener("touchend", handleTouchEnd, {
        passive: true,
      });
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [goToSlide]);

  // Prevent body scroll on home page, but only on desktop
  useEffect(() => {
    if (isDesktop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDesktop]);

  if (!isDesktop) {
    return (
      <div className="flex flex-col w-full">
        <HeroSection />
        <StatsSection />
        <AboutSnapshot />
        <TestimonialsSection />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen overflow-hidden"
      style={{ zIndex: 1 }}>
      {/* Horizontal track */}
      <motion.div
        className="flex h-full"
        animate={{ x: `-${currentSlide * 100}vw` }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 35,
          mass: 0.8,
        }}
        style={{ width: `${TOTAL_SLIDES * 100}vw` }}>
        {/* Slide 1: Hero */}
        <div className="w-screen h-screen flex-shrink-0 overflow-hidden">
          <HeroSection />
        </div>

        {/* Slide 2: Stats */}
        <div className="w-screen h-screen flex-shrink-0 overflow-hidden flex items-center justify-center">
          <StatsSection />
        </div>

        {/* Slide 3: About */}
        <div className="w-screen h-screen flex-shrink-0 overflow-hidden flex items-center justify-center">
          <AboutSnapshot />
        </div>

        {/* Slide 4: Testimonials */}
        <motion.div 
          className="h-screen flex-shrink-0 overflow-hidden flex items-center justify-center max-w-[100vw]"
          animate={{
            width: isLastSlide ? "calc(100vw - 20rem)" : "100vw"
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 35,
            mass: 0.8,
          }}
        >
          <TestimonialsSection />
        </motion.div>
      </motion.div>

      {/* Slide indicator dots */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50">
        {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isLocked.current) {
                isLocked.current = true;
                setCurrentSlide(index);
                setTimeout(() => {
                  isLocked.current = false;
                }, DEBOUNCE_MS);
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
            className="group relative p-1">
            <motion.div
              className={`rounded-full transition-colors duration-300 ${
                currentSlide === index
                  ? "bg-primary"
                  : "border-2 border-primary/40 bg-transparent hover:border-primary/70"
              }`}
              animate={{
                width: currentSlide === index ? 32 : 10,
                height: 10,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
            />
          </button>
        ))}
      </div>

      {/* Slide progress bar (subtle, top of screen) */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-primary/10 z-[60]">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
          animate={{
            width: `${((currentSlide + 1) / TOTAL_SLIDES) * 100}%`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>
    </div>
  );
}
