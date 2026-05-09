"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SCHOOL_INFO } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useHomeSlide } from "@/contexts/HomeSlideContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { currentSlide, isHomePage, totalSlides, isDesktop } = useHomeSlide();

  // Use pathname as fallback to prevent flash before context registers
  const onHomePage = (isHomePage || pathname === "/") && isDesktop;
  const isLastSlide = onHomePage && currentSlide === totalSlides - 1;
  const showFullNav = !onHomePage || isLastSlide;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        onHomePage
          ? isLastSlide
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
          : isScrolled
            ? "bg-white shadow-md"
            : "bg-white shadow-sm",
      )}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Gurukul Shikshaniketan Logo"
              width={40}
              height={40}
              className="transition-transform group-hover:scale-110 rounded-full"
            />
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-bold text-lg leading-tight transition-colors",
                  onHomePage
                    ? isLastSlide
                      ? "text-foreground"
                      : "text-foreground"
                    : isScrolled || pathname !== "/"
                      ? "text-foreground"
                      : "text-white",
                )}>
                {SCHOOL_INFO.shortName}
              </span>
              <span
                className={cn(
                  "text-xs leading-tight transition-colors",
                  onHomePage
                    ? isLastSlide
                      ? "text-muted-foreground"
                      : "text-muted-foreground"
                    : isScrolled || pathname !== "/"
                      ? "text-muted-foreground"
                      : "text-white/80",
                )}>
                English Medium School
              </span>
            </div>
          </Link>

          {/* Desktop nav links — conditionally shown on home page */}
          <AnimatePresence>
            {showFullNav && (
              <motion.div
                initial={onHomePage ? { opacity: 0, y: -20 } : false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="hidden lg:flex items-center gap-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary relative",
                      pathname === link.href
                        ? "text-primary"
                        : onHomePage
                          ? isLastSlide
                            ? "text-foreground"
                            : "text-foreground"
                          : isScrolled || pathname !== "/"
                            ? "text-foreground"
                            : "text-white",
                    )}>
                    {link.label}
                    {pathname === link.href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-4">
            {/* Enquire Now button — conditionally shown on home page */}
            <AnimatePresence>
              {showFullNav && (
                <motion.div
                  initial={onHomePage ? { opacity: 0, y: -20 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                  className="hidden lg:block">
                  <Button
                    asChild
                    className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/contact">Enquire Now</Link>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hamburger menu — always visible on home page, only mobile on other pages */}
            <button
              className={cn(
                "p-2 transition-colors relative w-10 h-10 flex items-center justify-center",
                onHomePage && !showFullNav ? "block" : "lg:hidden",
                onHomePage
                  ? isLastSlide
                    ? "text-foreground"
                    : "text-foreground"
                  : isScrolled || pathname !== "/"
                    ? "text-foreground"
                    : "text-white",
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu">
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    className="absolute">
                    <X className="w-6 h-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                    className="absolute">
                    <Menu className="w-6 h-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={cn(
              "bg-white border-t overflow-hidden",
              onHomePage && !showFullNav ? "" : "lg:hidden",
            )}>
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-2 text-base font-medium transition-colors hover:text-primary",
                      pathname === link.href
                        ? "text-primary"
                        : "text-foreground",
                    )}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1 }}>
                <Button
                  asChild
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact">Enquire Now</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
