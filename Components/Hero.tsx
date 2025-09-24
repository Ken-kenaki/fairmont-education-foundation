"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, MapPin, GraduationCap, Shield, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface StatData {
  value: string;
  label: string;
  icon: JSX.Element;
}

interface FloatingCard {
  position: string;
  bg: string;
  text: string;
  title: string;
  value: string;
  icon: JSX.Element;
}

export default function HeroSection(): JSX.Element {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const floatingCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textElementsRef = useRef<(HTMLElement | null)[]>([]);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const addToRefs = useCallback(
    (
      refsArray: React.MutableRefObject<(HTMLElement | null)[]>,
      index: number
    ) =>
    (el: HTMLElement | null): void => {
      refsArray.current[index] = el;
    },
    []
  );

  const addToFloatingRefs = useCallback(
    (index: number) =>
    (el: HTMLDivElement | null): void => {
      floatingCardsRef.current[index] = el;
    },
    []
  );

  useEffect(() => {
    const animateElements = (): void => {
      textElementsRef.current.forEach((el, index) => {
        if (el) {
          el.style.opacity = "0";
          el.style.transform = "translateY(30px)";
          setTimeout(() => {
            el.style.transition = "all 0.8s ease-out";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, index * 100);
        }
      });

      if (imageContainerRef.current) {
        imageContainerRef.current.style.opacity = "0";
        imageContainerRef.current.style.transform = "scale(0.9)";
        setTimeout(() => {
          if (imageContainerRef.current) {
            imageContainerRef.current.style.transition = "all 1s ease-out";
            imageContainerRef.current.style.opacity = "1";
            imageContainerRef.current.style.transform = "scale(1)";
          }
        }, 400);
      }

      if (buttonsRef.current) {
        const buttons = buttonsRef.current.children;
        Array.from(buttons).forEach((button, index) => {
          const buttonElement = button as HTMLElement;
          buttonElement.style.opacity = "0";
          buttonElement.style.transform = "translateY(20px)";
          setTimeout(() => {
            buttonElement.style.transition = "all 0.6s ease-out";
            buttonElement.style.opacity = "1";
            buttonElement.style.transform = "translateY(0)";
          }, 600 + index * 100);
        });
      }

      floatingCardsRef.current.forEach((card, index) => {
        if (card) {
          card.style.opacity = "0";
          card.style.transform = `translateY(50px) translateX(${
            index % 2 === 0 ? "30px" : "-30px"
          }) scale(0.8)`;
          setTimeout(() => {
            if (card) {
              card.style.transition =
                "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
              card.style.opacity = "1";
              card.style.transform = "translateY(0) translateX(0) scale(1)";
            }
          }, 800 + index * 150);
        }
      });
    };

    animateElements();
  }, []);

  const statsData: StatData[] = [
    { 
      value: "99.2%", 
      label: "Japan Visa Success", 
      icon: <Shield className="w-4 h-4 md:w-5 md:h-5" /> 
    },
    { 
      value: "200+", 
      label: "Japanese Partners", 
      icon: <MapPin className="w-4 h-4 md:w-5 md:h-5" /> 
    },
    { 
      value: "15+", 
      label: "Years Experience", 
      icon: <Clock className="w-4 h-4 md:w-5 md:h-5" /> 
    },
  ];

  const floatingCardsData: FloatingCard[] = [
    {
      position: "lg:top-8 lg:left-8 top-4 left-4",
      bg: "bg-[#AE1418]",
      text: "text-white",
      title: "Tokyo",
      value: "University",
      icon: <GraduationCap className="w-3 h-3 md:w-4 md:h-4" />
    },
    {
      position: "lg:top-1/2 lg:right-6 top-1/3 right-3",
      bg: "bg-[#1E165F]",
      text: "text-white",
      title: "Australian",
      value: "Campus",
      icon: <MapPin className="w-3 h-3 md:w-4 md:h-4" />
    },
    {
      position: "lg:bottom-1/3 lg:left-4 bottom-1/3 left-3",
      bg: "bg-[#AE1418]",
      text: "text-white",
      title: "British",
      value: "Colleges",
      icon: <GraduationCap className="w-3 h-3 md:w-4 md:h-4" />
    },
    {
      position: "lg:bottom-8 lg:right-8 bottom-4 right-4",
      bg: "bg-[#1E165F]",
      text: "text-white",
      title: "Yokohama",
      value: "Campus",
      icon: <MapPin className="w-3 h-3 md:w-4 md:h-4" />
    },
  ];

  return (
    <div
      ref={heroRef}
      className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen lg:pt-38 pt-32 md:pt-40 pb-8 md:pb-12"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-center">
          {/* Left Content - Text Section */}
          <div className="relative order-2 lg:order-1">
            <div className="space-y-6 md:space-y-8 lg:space-y-10">
              <div className="space-y-4 md:space-y-6 lg:space-y-7">

                {/* Main Heading - Responsive text sizes */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span
                    ref={addToRefs(textElementsRef, 1)}
                    className="text-[#1E165F] block"
                  >
                    Study Abroad
                  </span>
                  <span
                    ref={addToRefs(textElementsRef, 2)}
                    className="text-[#AE1418] block mt-1 md:mt-2"
                  >
                    With Fairmont
                  </span>
                  <span
                    ref={addToRefs(textElementsRef, 3)}
                    className="text-[#1E165F] block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 md:mt-4 font-normal"
                  >
                    Your Gateway to Foreign Education
                  </span>
                </h1>

                {/* Description - Responsive text */}
                <p
                  ref={addToRefs(textElementsRef, 4)}
                  className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed font-medium max-w-2xl"
                >
                  Fairmont Education Consultancy specializes in connecting students with 
                  premier Japanese, Australian, British educational institutions. Our expert team ensures 
                  seamless visa processing and comprehensive support for your academic 
                  journey abroad.
                </p>

                {/* Key Features - Responsive grid */}
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
                  <div className="flex items-center space-x-2 text-[#1E165F]">
                    <div className="w-2 h-2 bg-[#AE1418] rounded-full flex-shrink-0"></div>
                    <span className="font-semibold text-sm md:text-base">Visa Processing</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#1E165F]">
                    <div className="w-2 h-2 bg-[#AE1418] rounded-full flex-shrink-0"></div>
                    <span className="font-semibold text-sm md:text-base">Language Schools</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#1E165F]">
                    <div className="w-2 h-2 bg-[#AE1418] rounded-full flex-shrink-0"></div>
                    <span className="font-semibold text-sm md:text-base">University Placement</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#1E165F]">
                    <div className="w-2 h-2 bg-[#AE1418] rounded-full flex-shrink-0"></div>
                    <span className="font-semibold text-sm md:text-base">Accommodation</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons - Responsive layout */}
              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link
                  href="/contact"
                  className="group flex items-center justify-center space-x-2 md:space-x-3 bg-gradient-to-r from-[#AE1418] to-[#1E165F] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 shadow-lg hover:scale-105 text-base md:text-lg"
                >
                  <span>Free Consultation</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                </Link>

                <a
                  href="tel:+01-5921796"
                  className="group flex items-center justify-center space-x-2 md:space-x-3 bg-white border-2 border-[#1E165F] text-[#1E165F] px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold hover:bg-[#1E165F] hover:text-white hover:shadow-xl transition-all duration-300 text-base md:text-lg"
                >
                  <span className="text-lg md:text-xl">🇯🇵</span>
                  <span>Talk to Consulting Expert</span>
                </a>
              </div>

              {/* Success Stats - Responsive grid */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-6 border-t border-gray-300/60">
                {statsData.map((stat, index) => (
                  <div
                    key={`stat-${index}`}
                    ref={addToRefs(textElementsRef, 5 + index)}
                    className="text-center space-y-1 md:space-y-2 p-2 md:p-3 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex justify-center text-[#AE1418]">
                      {stat.icon}
                    </div>
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-[#1E165F]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Image Section */}
          <div className="relative order-1 lg:order-2">
            <div
              ref={imageContainerRef}
              className="relative w-full h-[600px] sm:h-[400px] md:h-[500px] lg:h-[650px] rounded-2xl overflow-hidden flex items-center justify-center"
            >
              {/* Hero Image */}
              <div className="relative z-10 w-full h-full">
                <Image
                  src="/girl.png"
                  alt="Fairmont Education Consultancy - Japan Study Experts"
                  width={4000}
                  height={9000}
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>

              {/* Enhanced Floating Cards - Responsive positioning */}
              {floatingCardsData.map((card, index) => (
                <div
                  key={`card-${index}`}
                  ref={addToFloatingRefs(index)}
                  className={`absolute ${card.position} ${card.bg} ${card.text} px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl shadow-2xl transition-all duration-300 cursor-pointer z-20 hover:z-30 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm border border-white/20`}
                  aria-label={`${card.title} ${card.value}`}
                >
                  <div className="flex items-center space-x-1 md:space-x-2">
                    {card.icon}
                    <div className="text-xs font-semibold opacity-90">{card.title}</div>
                  </div>
                  <div className="font-bold text-xs md:text-sm mt-0.5 md:mt-1">{card.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}