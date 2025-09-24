"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  Clock,
  Briefcase,
  DollarSign,
  FileText,
  Calendar,
  MapPin,
  GraduationCap,
  Users,
  Globe,
  Award,
  CheckCircle,
  Star,
  Plane,
  Home,
  Landmark,
  ScrollText,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function StudyInJapan() {
  const universities = [
    {
      name: "University of Tokyo",
      ranking: "#1 in Japan",
      programs: "150+ English Programs"
    },
    {
      name: "Kyoto University", 
      ranking: "#2 in Japan",
      programs: "120+ English Programs"
    },
    {
      name: "Tokyo Institute of Technology",
      ranking: "#3 in Japan",
      programs: "80+ English Programs"
    },
    {
      name: "Osaka University",
      ranking: "Top 100 Global",
      programs: "90+ English Programs"
    },
    {
      name: "Tohoku University",
      ranking: "Top 150 Global", 
      programs: "70+ English Programs"
    },
    {
      name: "Waseda University",
      ranking: "Top 200 Global",
      programs: "100+ English Programs"
    },
  ];

  const studyRequirements = [
    {
      icon: FileText,
      title: "Offer Letter from Fairmont",
      description: "Secure admission through Fairmont Education Foundation's partnered Japanese institutions with simplified application process.",
    },
    {
      icon: DollarSign,
      title: "Financial Support Guidance",
      description: "Fairmont Education Foundation helps demonstrate financial capacity and assists with MEXT scholarship applications.",
    },
    {
      icon: BookOpen,
      title: "Language Preparation",
      description: "Fairmont provides Japanese language classes (N5-N1) and cultural orientation for smooth transition.",
    },
    {
      icon: Briefcase,
      title: "Visa Assistance",
      description: "Complete Certificate of Eligibility (COE) and student visa documentation support from Fairmont experts.",
    },
  ];

  const fairmontServices = [
    {
      icon: Award,
      title: "University Selection",
      description: "Fairmont's expert counselors match you with the perfect Japanese university based on your profile."
    },
    {
      icon: Users,
      title: "Application Processing", 
      description: "End-to-end application handling including document translation and verification."
    },
    {
      icon: CheckCircle,
      title: "Visa Guidance",
      description: "Comprehensive visa support with 95% success rate at Fairmont."
    },
    {
      icon: Star,
      title: "Cultural Preparation",
      description: "Fairmont's pre-departure program prepares you for Japanese academic and social life."
    }
  ];

  const intakes = [
    {
      name: "April Intake",
      timeframe: "April to July",
      application: "September to December",
      fairmontSupport: "MEXT scholarship application support"
    },
    {
      name: "September Intake", 
      timeframe: "September to January",
      application: "January to May",
      fairmontSupport: "Early application discount available"
    },
    {
      name: "October Intake",
      timeframe: "October to February", 
      application: "February to June",
      fairmontSupport: "Fast-track processing available"
    },
  ];

  const faqs = [
    {
      question: "How does Fairmont Education Foundation help with Japanese university applications?",
      answer: "Fairmont Education Foundation provides complete guidance from university selection to visa processing. Our experienced counselors have strong relationships with Japanese institutions and can help you choose the right program based on your academic background and career goals. Fairmont ensures your application stands out with proper documentation and cultural adaptation support.",
    },
    {
      question: "What financial support does Fairmont offer for studying in Japan?",
      answer: "Fairmont Education Foundation assists students in identifying scholarship opportunities including MEXT, JASSO, and university-specific scholarships. We help you prepare the required financial documents and provide guidance on cost-effective living options in Japan. Fairmont also offers flexible payment plans for our service fees.",
    },
    {
      question: "Does Fairmont provide Japanese language training?",
      answer: "Yes, Fairmont Education Foundation offers comprehensive Japanese language training from beginner to advanced levels (N5 to N1). Our certified instructors prepare you for both academic requirements and daily life in Japan through immersive learning experiences.",
    },
    {
      question: "How does Fairmont prepare students for Japanese student life?",
      answer: "Fairmont conducts extensive pre-departure orientation sessions covering cultural norms, academic expectations, part-time work regulations (28 hours/week), and health insurance. We also connect you with Fairmont alumni in Japan for peer support and networking.",
    },
    {
      question: "What makes Fairmont different from other consultancies for Japan?",
      answer: "Fairmont Education Foundation stands out with our specialized experience in Japanese education, N1 certified language instructors, and strong university partnerships. Our success rate of 95% and personalized approach ensure each student receives individual attention throughout their journey to Japan.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white pt-20">
      {/* Hero Section with Video */}
      <div className="relative bg-gradient-to-r from-[#BC002D] to-[#003580] min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-98"
          >
            <source src="/japan.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#BC002D]/80 to-[#003580]/80"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Study in <span className="text-yellow-300">Japan</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            World-class education with Fairmont Education Foundation - Your trusted partner for Japanese dreams
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" className="bg-white text-[#BC002D] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Start with Fairmont
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Explore Programs
            </button>
          </motion.div>
        </div>
      </div>

      {/* Fairmont Advantage Section */}
      <div className="py-20 bg-gradient-to-br from-[#BC002D]/5 to-[#003580]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#BC002D] mb-4">
              Why Choose <span className="text-[#003580]">Fairmont</span> for Japan?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fairmont Education Foundation makes your Japanese dream achievable with expert guidance and proven success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fairmontServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#003580]"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#BC002D] to-[#003580] rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#BC002D] mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* University Partners */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#BC002D] mb-4">
              Fairmont's <span className="text-[#003580]">Partner Universities</span>
            </h2>
            <p className="text-lg text-gray-600">Top Japanese institutions partnered with Fairmont Education Foundation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((uni, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#BC002D]/5 to-[#003580]/5 p-6 rounded-2xl border border-[#BC002D]/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <GraduationCap className="w-8 h-8 text-[#003580]" />
                  <span className="bg-[#003580] text-white px-3 py-1 rounded-full text-sm font-bold">{uni.ranking}</span>
                </div>
                <h3 className="text-xl font-bold text-[#BC002D] mb-2">{uni.name}</h3>
                <p className="text-gray-600 mb-4">{uni.programs}</p>
                <button className="text-[#003580] font-semibold hover:text-[#BC002D] transition-colors">
                  Explore through Fairmont →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="py-20 bg-gradient-to-r from-[#BC002D] to-[#003580] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Study Requirements with <span className="text-yellow-300">Fairmont Support</span>
            </h2>
            <p className="text-xl opacity-90">Fairmont Education Foundation simplifies every requirement</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {studyRequirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                    <req.icon className="w-6 h-6 text-[#BC002D]" />
                  </div>
                  <h3 className="text-xl font-bold">{req.title}</h3>
                </div>
                <p className="opacity-90">{req.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Intakes Timeline */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#BC002D] mb-4">
              Application <span className="text-[#003580]">Timeline</span> with Fairmont
            </h2>
            <p className="text-lg text-gray-600">Plan your journey with Fairmont Education Foundation's structured timeline</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#BC002D] to-[#003580]"></div>
            
            {intakes.map((intake, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <h3 className="text-2xl font-bold text-[#BC002D] mb-2">{intake.name}</h3>
                  <p className="text-gray-600 mb-2"><strong>Study Period:</strong> {intake.timeframe}</p>
                  <p className="text-gray-600 mb-2"><strong>Fairmont Application:</strong> {intake.application}</p>
                  <p className="text-[#003580] font-semibold">{intake.fairmontSupport}</p>
                </div>
                
                <div className="relative w-8 h-8 bg-gradient-to-r from-[#BC002D] to-[#003580] rounded-full z-10"></div>
                
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                  <div className="bg-gradient-to-r from-[#BC002D]/10 to-[#003580]/10 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Fairmont Education Foundation recommends applying 8-10 months in advance for Japanese universities
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Unique Features of Japan */}
      <div className="py-20 bg-gradient-to-br from-[#BC002D]/5 to-[#003580]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#BC002D] mb-4">
              Why <span className="text-[#003580]">Japan</span> is Unique
            </h2>
            <p className="text-lg text-gray-600">Discover the exceptional advantages of studying in Japan with Fairmont</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#BC002D] to-[#003580] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#BC002D] mb-3">MEXT Scholarships</h3>
              <p className="text-gray-600">Full tuition + monthly stipend opportunities for outstanding students</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#BC002D] to-[#003580] rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#BC002D] mb-3">Work Opportunities</h3>
              <p className="text-gray-600">28 hours/week part-time work permission for international students</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#BC002D] to-[#003580] rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#BC002D] mb-3">Safety & Quality</h3>
              <p className="text-gray-600">World's 3rd safest country with exceptional living standards</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#BC002D] mb-4">
              Fairmont Education Foundation <span className="text-[#003580]">FAQs</span>
            </h2>
            <p className="text-lg text-gray-600">Common questions about studying in Japan with Fairmont</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg border border-[#BC002D]/10"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-[#BC002D]/5 transition-colors rounded-2xl"
                >
                  <h3 className="text-lg font-semibold text-[#BC002D] pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#003580] transition-transform ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-[#BC002D] to-[#003580] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <Award className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">
            Start Your Japanese Journey with Fairmont
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful students who achieved their Japanese dreams with Fairmont Education Foundation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[#BC002D] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Free Consultation with Fairmont
            </Link>
            <Link href="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Learn About Fairmont
            </Link>
          </div>
          <p className="mt-6 text-sm opacity-80">
            ✅ 95% Success Rate • ✅ 10+ Years Experience • ✅ N1 Certified Instructors
          </p>
        </div>
      </div>
    </div>
  );
}