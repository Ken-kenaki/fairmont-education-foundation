"use client";

import { Users, Award, Globe, BookOpen, Heart, Target, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1E165F] to-[#AE1418] text-white py-20 mt-32 md:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Fairmont Education</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Your Trusted Partner for Japanese Education
            </p>
            <div className="w-24 h-1 bg-white/80 mx-auto mb-8"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/connect-2.jpg"
                alt="Fairmont Education Team"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E165F]">
                Welcome to Fairmont Education Consultancy
              </h2>
              <div className="w-16 h-1 bg-[#AE1418]"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Fairmont Education Consultancy is a well-recognized and genuine educational 
                consultancy dedicated to guiding ambitious students in fulfilling their 
                educational and career goals in Japan.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 10 years of experience, professional N3 passed language instructors, 
                and a Japanese system-based teaching approach, we offer personalized guidance 
                from university selection to post-arrival support in Japan.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                We are committed to providing honest and accurate information to help you succeed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyUsSection />

      {/* Mission Vision Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#1E165F]/5 to-[#AE1418]/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <Target className="w-12 h-12 text-[#AE1418] mb-4" />
              <h3 className="text-2xl font-bold text-[#1E165F] mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower students with comprehensive educational guidance and Japanese language 
                training that bridges cultural gaps and opens doors to world-class education 
                opportunities in Japan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <Globe className="w-12 h-12 text-[#AE1418] mb-4" />
              <h3 className="text-2xl font-bold text-[#1E165F] mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted education consultancy for Japanese studies, known for 
                our integrity, expertise, and commitment to student success in the global arena.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Why Us Component
function WhyUsSection() {
  const features = [
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "Over a decade of expertise in guiding students to Japanese educational institutions"
    },
    {
      icon: Users,
      title: "N3 Certified Instructors",
      description: "Professional language instructors with JLPT N3 certification and teaching expertise"
    },
    {
      icon: BookOpen,
      title: "Japanese System Teaching",
      description: "Authentic Japanese education methodology for effective learning and adaptation"
    },
    {
      icon: Heart,
      title: "End-to-End Support",
      description: "Comprehensive guidance from application to post-arrival settlement in Japan"
    },
    {
      icon: CheckCircle,
      title: "Genuine Consultancy",
      description: "Honest and accurate information with transparent processes"
    },
    {
      icon: Globe,
      title: "Cultural Integration",
      description: "Preparation for smooth cultural transition and successful adaptation in Japan"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E165F] mb-4">
            Why Choose Fairmont Education?
          </h2>
          <div className="w-16 h-1 bg-[#AE1418] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We stand out with our specialized focus on Japanese education and proven track record 
            of student success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-[#1E165F] to-[#AE1418] rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1E165F] mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-[#1E165F] to-[#AE1418] rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Japanese Education Journey?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Let our experienced team guide you every step of the way
          </p>
          <button className="bg-white text-[#1E165F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Get Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}