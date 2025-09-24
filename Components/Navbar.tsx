"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  // Handle click outside mobile menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerButtonRef.current &&
        !hamburgerButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > 50) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const mobileMenuVariants = {
    hidden: {
      x: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        ref={navbarRef}
        initial={{ y: 0 }}
        animate={{
          y: isVisible ? 0 : "-100%",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white shadow-lg fixed top-0 z-40 w-full"
      >
        <div className="container mx-auto px-4">
          {/* Top Bar - Integrated into main nav */}

          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <Link
                href="/"
                className="text-2xl md:text-3xl font-bold"
                aria-label="Home"
              >
                <Image
                  src="/logo.png"
                  alt="Fairmont Education Foundation Logo"
                  width={110}
                  height={110}
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/countries"
                  className="text-gray-700 hover:text-[#1E165F] font-medium transition-colors whitespace-nowrap"
                  aria-label="Countries"
                >
                  COUNTRIES
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-[#1E165F] font-medium transition-colors whitespace-nowrap"
                  aria-label="Our services"
                >
                  OUR SERVICES
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/sample-documents"
                  className="hover:opacity-80 transition-opacity whitespace-nowrap"
                  aria-label="Sample Documents"
                >
                  SAMPLE DOCUMENTS
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-[#1E165F] font-medium transition-colors whitespace-nowrap"
                  aria-label="About us"
                >
                  ABOUT US
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/gallery"
                  className="text-gray-700 hover:text-[#1E165F] font-medium transition-colors whitespace-nowrap"
                  aria-label="Gallery"
                >
                  GALLERY
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-[#1E165F] font-medium transition-colors whitespace-nowrap"
                  aria-label="Blog"
                >
                  BLOG
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="tel:+977-9841615934"
                  className="hover:opacity-80 transition-opacity whitespace-nowrap"
                  aria-label="Call Us"
                >
                  CALL US
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="bg-[#1E165F] text-white px-4 xl:px-6 py-2 rounded font-medium hover:bg-[#AE1418] transition-all duration-300 whitespace-nowrap"
                  aria-label="Contact us"
                >
                  APPLY NOW
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              ref={hamburgerButtonRef}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden hover:scale-110 transition-transform duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                ref={mobileMenuRef}
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="lg:hidden fixed top-0 left-0 w-full max-w-xs bg-white h-screen z-50 shadow-xl overflow-y-auto"
              >
                <div className="p-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 hover:scale-110 transition-transform duration-200"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col space-y-6 mt-12"
                  >
                    {/* Mobile Top Nav Items */}
                    <div className="border-b pb-4 space-y-2">
                      <Link
                        href="/success-stories"
                        className="block py-2 text-gray-700 hover:text-[#35B354] font-medium transition-colors"
                        onClick={() => setIsOpen(false)}
                        aria-label="Success Stories"
                      >
                        SUCCESS STORIES
                      </Link>
                      <Link
                        href="/sample-documents"
                        className="block py-2 text-gray-700 hover:text-[#35B354] font-medium transition-colors"
                        onClick={() => setIsOpen(false)}
                        aria-label="Sample Documents"
                      >
                        SAMPLE DOCUMENTS
                      </Link>
                      <Link
                        href="tel:+977-9841615934"
                        className="block py-2 text-gray-700 hover:text-[#35B354] font-medium transition-colors"
                        onClick={() => setIsOpen(false)}
                        aria-label="Call Us"
                      >
                        CALL US
                      </Link>
                    </div>

                    {/* Mobile Main Nav Items */}
                    <div className="space-y-4">
                      <Link
                        href="/countries"
                        className="block py-2 text-gray-700 hover:text-[#35B354] font-medium transition-colors border-b"
                        onClick={() => setIsOpen(false)}
                        aria-label="Countries"
                      >
                        COUNTRIES
                      </Link>

                      <Link
                        href="/about"
                        className="block py-2 text-gray-700 hover:text-[#35B354] font-medium transition-colors border-b"
                        onClick={() => setIsOpen(false)}
                        aria-label="About us"
                      >
                        ABOUT US
                      </Link>

                      <Link
                        href="/services"
                        className="block py-2 text-gray-700 hover:text-[#35B354] font-medium transition-colors border-b"
                        onClick={() => setIsOpen(false)}
                        aria-label="Our services"
                      >
                        OUR SERVICES
                      </Link>

                      <Link
                        href="/gallery"
                        className="block py-2 text-gray-700 hover:text-[#35B354] font-medium transition-colors border-b"
                        onClick={() => setIsOpen(false)}
                        aria-label="Gallery"
                      >
                        GALLERY
                      </Link>

                      <Link
                        href="/blog"
                        className="block py-2 text-gray-700 hover:text-[#35B354] font-medium transition-colors border-b"
                        onClick={() => setIsOpen(false)}
                        aria-label="Blog"
                      >
                        BLOG
                      </Link>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="/contact"
                        className="w-full bg-[#AE1418] text-white px-6 py-3 rounded font-medium hover:bg-[#2a8e43] transition-all duration-300 text-center block"
                        onClick={() => setIsOpen(false)}
                        aria-label="Contact us"
                      >
                        CONTACT US
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
