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
      icon: <Shield className="w-5 h-5" /> 
    },
    { 
      value: "200+", 
      label: "Japanese Partners", 
      icon: <MapPin className="w-5 h-5" /> 
    },
    { 
      value: "15+", 
      label: "Years Experience", 
      icon: <Clock className="w-5 h-5" /> 
    },
  ];

  const floatingCardsData: FloatingCard[] = [
    {
      position: "top-8 left-8",
      bg: "bg-[#AE1418]",
      text: "text-white",
      title: "Tokyo",
      value: "University",
      icon: <GraduationCap className="w-4 h-4" />
    },
    {
      position: "top-1/2 right-6",
      bg: "bg-[#1E165F]",
      text: "text-white",
      title: "Osaka",
      value: "Institute",
      icon: <MapPin className="w-4 h-4" />
    },
    {
      position: "bottom-1/3 left-4",
      bg: "bg-[#AE1418]",
      text: "text-white",
      title: "Kyoto",
      value: "College",
      icon: <GraduationCap className="w-4 h-4" />
    },
    {
      position: "bottom-8 right-8",
      bg: "bg-[#1E165F]",
      text: "text-white",
      title: "Yokohama",
      value: "Campus",
      icon: <MapPin className="w-4 h-4" />
    },
  ];

  return (
    <div
      ref={heroRef}
      className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen lg:pt-38 pt-48 pb-8 md:pb-12"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Content - Image Section */}
          <div className="relative order-1">
            <div
              ref={imageContainerRef}
              className="relative w-full h-[450px] md:h-[550px] lg:h-[650px] rounded-2xl overflow-hidden flex items-center justify-center"
            >
              {/* Hero Image - Clean background without rectangle */}
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

              {/* Enhanced Floating Cards - Japan Focus */}
              {floatingCardsData.map((card, index) => (
                <div
                  key={`card-${index}`}
                  ref={addToFloatingRefs(index)}
                  className={`absolute ${card.position} ${card.bg} ${card.text} px-4 py-3 rounded-xl shadow-2xl transition-all duration-300 cursor-pointer z-20 hover:z-30 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm border border-white/20`}
                  aria-label={`${card.title} ${card.value}`}
                >
                  <div className="flex items-center space-x-2">
                    {card.icon}
                    <div className="text-xs font-semibold opacity-90">{card.title}</div>
                  </div>
                  <div className="font-bold text-sm mt-1">{card.value}</div>
                </div>
              ))}

              {/* Subtle gradient overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div> */}
            </div>
          </div>

          {/* Right Content - Text Section */}
          <div className="space-y-8 md:space-y-10 order-2">
            <div className="space-y-6 md:space-y-7">

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span
                  ref={addToRefs(textElementsRef, 1)}
                  className="text-[#1E165F] block"
                >
                  Study in Japan
                </span>
                <span
                  ref={addToRefs(textElementsRef, 2)}
                  className="text-[#AE1418] block mt-2"
                >
                  With Fairmont
                </span>
                <span
                  ref={addToRefs(textElementsRef, 3)}
                  className="text-[#1E165F] block text-2xl md:text-3xl lg:text-4xl mt-4 font-normal"
                >
                  Your Gateway to Japanese Education
                </span>
              </h1>

              {/* Description */}
              <p
                ref={addToRefs(textElementsRef, 4)}
                className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium max-w-2xl"
              >
                Fairmont Education Consultancy specializes in connecting students with 
                premier Japanese educational institutions. Our expert team ensures 
                seamless visa processing and comprehensive support for your academic 
                journey in Japan.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center space-x-2 text-[#1E165F]">
                  <div className="w-2 h-2 bg-[#AE1418] rounded-full"></div>
                  <span className="font-semibold">Visa Processing</span>
                </div>
                <div className="flex items-center space-x-2 text-[#1E165F]">
                  <div className="w-2 h-2 bg-[#AE1418] rounded-full"></div>
                  <span className="font-semibold">Language Schools</span>
                </div>
                <div className="flex items-center space-x-2 text-[#1E165F]">
                  <div className="w-2 h-2 bg-[#AE1418] rounded-full"></div>
                  <span className="font-semibold">University Placement</span>
                </div>
                <div className="flex items-center space-x-2 text-[#1E165F]">
                  <div className="w-2 h-2 bg-[#AE1418] rounded-full"></div>
                  <span className="font-semibold">Accommodation</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/japan-consultation"
                className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-[#AE1418] to-[#1E165F] text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 shadow-lg hover:scale-105 text-lg"
              >
                <span>Free Japan Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>

              <a
                href="tel:+81312345678"
                className="group flex items-center justify-center space-x-3 bg-white border-2 border-[#1E165F] text-[#1E165F] px-8 py-4 rounded-xl font-bold hover:bg-[#1E165F] hover:text-white hover:shadow-xl transition-all duration-300 text-lg"
              >
                <span className="text-xl">🇯🇵</span>
                <span>Talk to Japan Expert</span>
              </a>
            </div>

            {/* Success Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-300/60">
              {statsData.map((stat, index) => (
                <div
                  key={`stat-${index}`}
                  ref={addToRefs(textElementsRef, 5 + index)}
                  className="text-center space-y-2 p-3 bg-white rounded-lg shadow-sm"
                >
                  <div className="flex justify-center text-[#AE1418]">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-[#1E165F]">
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
      </div>
    </div>
  );
}