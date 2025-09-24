"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

interface VideoCard {
  title: string;
  videoSrc: string;
  size: "small" | "medium" | "large";
  tiltDirection: "left" | "right" | "up" | "down";
}

export default function CareerChoicesSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Initialize videos to play automatically
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        
        const playVideo = async () => {
          try {
            await video.play();
          } catch (err) {
            console.log(`Video ${index} autoplay failed:`, err);
          }
        };
        
        playVideo();
      }
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (isMobile) return;
    
    const card = cardRefs.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 10; // Increased tilt effect
    const rotateX = ((y - centerY) / centerY) * -10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  };

  const videoCards: VideoCard[] = [
    {
      title: "Japan Universities",
      videoSrc: "/japan.mp4",
      size: "medium",
      tiltDirection: "right"
    },
    {
      title: "UK Universities",
      videoSrc: "/uk.mp4",
      size: "medium",
      tiltDirection: "left"
    },
    {
      title: "Australia",
      videoSrc: "/australia.mp4",
      size: "medium",
      tiltDirection: "up"
    },
    {
      title: "Engineering",
      videoSrc: "/engineering.mp4",
      size: "small",
      tiltDirection: "down"
    },
    {
      title: "Nursing",
      videoSrc: "/nursing.mp4",
      size: "small",
      tiltDirection: "up"
    },
  ];

  const getCardClass = (size: string) => {
    const baseClass = "rounded-2xl border-2 border-white/20 shadow-2xl transition-all duration-500 ease-out overflow-hidden relative group";
    const sizeClass = size === "medium" ? "md:col-span-2 aspect-video" : "md:col-span-3 aspect-video";
    return `${baseClass} ${sizeClass}`;
  };

  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1E165F] mb-4">
            Global Education Opportunities
          </h2>
          <p className="text-[#1E165F]/80 max-w-2xl mx-auto text-base md:text-lg">
            Experience premier academic destinations through immersive visuals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4 md:gap-6 mb-8 md:mb-12">
          {videoCards.map((card, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={getCardClass(card.size)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Video Background */}
              <video
                ref={el => videoRefs.current[index] = el}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                autoPlay
              >
                <source src={card.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              
              {/* Title in Bottom Left */}
              <div className="absolute bottom-4 left-4 z-10">
                <span className="text-white text-lg md:text-xl font-bold drop-shadow-lg">
                  {card.title}
                </span>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            type="button"
            className="group flex items-center justify-center space-x-2 bg-[#AE1418] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-[#1E165F] hover:shadow-lg transition-all duration-300 shadow-md mx-auto text-sm md:text-base"
          >
            <Link href="/universities">
              <span>EXPLORE ALL DESTINATIONS</span>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}