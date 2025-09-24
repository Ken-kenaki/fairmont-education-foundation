"use client";

import { ArrowRight, MapPin, Users, GraduationCap, Star } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

interface CountryItem {
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
  buttonText: string;
  buttonLink: string;
  imageAlt?: string;
  students: string;
  universities: string;
  rating: string;
}

export default function CountriesPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.from(entry.target.querySelectorAll(".animate-item"), {
              y: 50,
              opacity: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: "power3.out",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const sections = sectionRef.current.querySelectorAll(".country-section");
      sections.forEach((section) => observer.observe(section));
    }

    return () => observer.disconnect();
  }, []);

  const countries: CountryItem[] = [
    {
      title: "Study in Japan",
      description:
        "Japan offers a unique blend of tradition and cutting-edge technology. Experience a rich cultural heritage, world-class education, and vibrant student life. Top universities include University of Tokyo, Kyoto University, and Osaka University with intakes in April and September.",
      image: "/japan.jpg",
      imagePosition: "left",
      buttonText: "EXPLORE JAPAN PROGRAMS",
      buttonLink: "/countries/japan",
      imageAlt: "Japan Landscape",
      students: "642,000+",
      universities: "100+",
      rating: "4.8/5",
    },
    {
      title: "Study in Australia",
      description:
        "Australia provides exceptional education quality with vibrant student life. Benefit from work rights during studies, strong post-study work visas, and research opportunities. Top institutions include University of Melbourne, ANU, and University of Sydney with February and July intakes.",
      image: "/australia.jpg",
      imagePosition: "right",
      buttonText: "EXPLORE AUSTRALIA PROGRAMS",
      buttonLink: "/countries/australia",
      imageAlt: "Australia Landscape",
      students: "738,000+",
      universities: "43",
      rating: "4.7/5",
    },
    {
      title: "Study in United Kingdom",
      description:
        "The UK boasts centuries of academic excellence with shorter degree durations. Experience rich cultural heritage, world-leading research, and strong industry connections. Prestigious universities include Oxford, Cambridge, Imperial College with September and January intakes.",
      image: "/uk.jpg",
      imagePosition: "left",
      buttonText: "EXPLORE UK PROGRAMS",
      buttonLink: "/countries/uk",
      imageAlt: "UK Landscape",
      students: "679,000+",
      universities: "130+",
      rating: "4.6/5",
    },
  ];

  return (
    <div className="min-h-screen mt-28 bg-gradient-to-br from-[#1E165F]/5 to-[#AE1418]/5">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1E165F] to-[#AE1418] text-white py-20 md:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-item">
              Study Abroad Destinations
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-item">
              Discover Your Perfect Study Destination with Expert Guidance
            </p>
            <div className="w-24 h-1 bg-white/80 mx-auto mb-8 animate-item"></div>
            <p className="text-lg opacity-80 max-w-2xl mx-auto animate-item">
              Explore world-class education opportunities across the globe with our comprehensive country guides and personalized counseling services.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Countries Listing */}
      <section ref={sectionRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {countries.map((country, index) => (
            <div
              key={index}
              className={`country-section mb-20 last:mb-0 flex flex-col ${
                country.imagePosition === "right"
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              } items-center gap-8 lg:gap-12 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300`}
            >
              {/* Image Section */}
              <div
                ref={(el) => (imageRefs.current[index] = el)}
                className={`w-full lg:w-5/12 h-80 md:h-96 relative animate-item`}
              >
                <Image
                  src={country.image}
                  alt={country.title}
                  fill
                  className="object-cover"
                  quality={100}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E165F]/40 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-[#1E165F] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                  <span>Popular Destination</span>
                </div>
              </div>

              {/* Content Section */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`w-full lg:w-7/12 p-8 animate-item`}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1E165F] mb-3">
                      {country.title}
                    </h3>
                    <div className="w-16 h-1 bg-[#AE1418] mb-4"></div>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    {country.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 py-4">
                    <div className="text-center p-3 bg-[#1E165F]/5 rounded-lg">
                      <Users className="w-6 h-6 text-[#AE1418] mx-auto mb-2" />
                      <div className="font-bold text-[#1E165F] text-lg">{country.students}</div>
                      <div className="text-sm text-gray-600">International Students</div>
                    </div>
                    <div className="text-center p-3 bg-[#1E165F]/5 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-[#AE1418] mx-auto mb-2" />
                      <div className="font-bold text-[#1E165F] text-lg">{country.universities}</div>
                      <div className="text-sm text-gray-600">Universities</div>
                    </div>
                    <div className="text-center p-3 bg-[#1E165F]/5 rounded-lg">
                      <Star className="w-6 h-6 text-[#AE1418] mx-auto mb-2" />
                      <div className="font-bold text-[#1E165F] text-lg">{country.rating}</div>
                      <div className="text-sm text-gray-600">Student Rating</div>
                    </div>
                  </div>

                  <Link
                    href={country.buttonLink}
                    className="group inline-flex items-center bg-gradient-to-r from-[#1E165F] to-[#AE1418] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 shadow-lg hover:from-[#AE1418] hover:to-[#1E165F]"
                  >
                    <span>{country.buttonText}</span>
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1E165F] to-[#AE1418] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <MapPin className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let us help you choose the perfect destination for your educational goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#1E165F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                FREE CONSULTATION
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                OUR SERVICES
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}