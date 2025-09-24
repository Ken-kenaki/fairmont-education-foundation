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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function StudyInAustralia() {
  const universities = [
    {
      name: "University of Melbourne",
      ranking: "#1 in Australia",
      programs: "200+ Courses"
    },
    {
      name: "Australian National University (ANU)",
      ranking: "#2 in Australia", 
      programs: "180+ Courses"
    },
    {
      name: "University of Sydney",
      ranking: "#3 in Australia",
      programs: "190+ Courses"
    },
    {
      name: "University of Queensland (UQ)",
      ranking: "Top 50 Global",
      programs: "170+ Courses"
    },
    {
      name: "Monash University",
      ranking: "Top 60 Global", 
      programs: "160+ Courses"
    },
    {
      name: "UNSW Sydney",
      ranking: "Top 70 Global",
      programs: "150+ Courses"
    },
  ];

  const studyRequirements = [
    {
      icon: FileText,
      title: "Offer Letter from Fairmont",
      description: "Secure admission through Fairmont Education Foundation's partnered Australian institutions with simplified application process.",
    },
    {
      icon: DollarSign,
      title: "Financial Support Guidance",
      description: "Fairmont Education Foundation helps demonstrate financial capacity with proper documentation and scholarship assistance.",
    },
    {
      icon: BookOpen,
      title: "Language Preparation",
      description: "Fairmont provides IELTS/PTE preparation classes to meet Australian university language requirements.",
    },
    {
      icon: Briefcase,
      title: "Visa Assistance",
      description: "Complete GTE statement preparation and visa documentation support from Fairmont experts.",
    },
  ];

  const fairmontServices = [
    {
      icon: Award,
      title: "University Selection",
      description: "Fairmont's expert counselors match you with the perfect Australian university based on your profile."
    },
    {
      icon: Users,
      title: "Application Processing", 
      description: "End-to-end application handling by Fairmont Education Foundation team."
    },
    {
      icon: CheckCircle,
      title: "Visa Guidance",
      description: "Comprehensive visa support with 98% success rate at Fairmont."
    },
    {
      icon: Star,
      title: "Pre-Departure Briefing",
      description: "Fairmont's orientation program prepares you for Australian student life."
    }
  ];

  const intakes = [
    {
      name: "February Intake",
      timeframe: "February to June",
      application: "August to November",
      fairmontSupport: "Early application discount available"
    },
    {
      name: "July Intake", 
      timeframe: "July to November",
      application: "December to April",
      fairmontSupport: "Scholarship assistance priority"
    },
    {
      name: "November Intake",
      timeframe: "November to February", 
      application: "May to August",
      fairmontSupport: "Fast-track processing available"
    },
  ];

  const faqs = [
    {
      question: "How does Fairmont Education Foundation help with Australian university applications?",
      answer: "Fairmont Education Foundation provides complete guidance from university selection to visa processing. Our experienced counselors have strong relationships with Australian institutions and can help you choose the right program based on your academic background and career goals. Fairmont ensures your application stands out with proper documentation and timely submission.",
    },
    {
      question: "What financial support does Fairmont offer for studying in Australia?",
      answer: "Fairmont Education Foundation assists students in identifying scholarship opportunities, education loans, and financial planning. We help you prepare the required financial documents and provide guidance on cost-effective living options in Australia. Fairmont also offers flexible payment plans for our service fees.",
    },
    {
      question: "Does Fairmont provide accommodation assistance for Australia?",
      answer: "Yes, Fairmont Education Foundation offers comprehensive accommodation support including on-campus housing applications, homestay arrangements, and private rental guidance. Our post-arrival support team helps you settle comfortably in Australia.",
    },
    {
      question: "How does Fairmont prepare students for Australian student life?",
      answer: "Fairmont conducts pre-departure orientation sessions covering cultural adaptation, academic expectations, part-time work regulations, and health insurance. We also connect you with Fairmont alumni in Australia for peer support.",
    },
    {
      question: "What makes Fairmont different from other consultancies for Australia?",
      answer: "Fairmont Education Foundation stands out with our 10+ years of specialized experience in Australian education, N3 certified language instructors, and strong university partnerships. Our success rate of 98% and personalized approach ensure each student receives individual attention throughout their journey.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white pt-20">
      {/* Hero Section with Video */}
      <div className="relative bg-gradient-to-r from-[#1E165F] to-[#AE1418] min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-98"
          >
            <source src="/australia.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E165F]/80 to-[#AE1418]/80"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Study in <span className="text-[#D9F1F1]">Australia</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            World-class education with Fairmont Education Foundation - Your trusted partner for Australian dreams
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" className="bg-white text-[#1E165F] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Start with Fairmont
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Explore Programs
            </button>
          </motion.div>
        </div>
      </div>

      {/* Fairmont Advantage Section */}
      <div className="py-20 bg-gradient-to-br from-[#1E165F]/5 to-[#AE1418]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E165F] mb-4">
              Why Choose <span className="text-[#AE1418]">Fairmont</span> for Australia?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fairmont Education Foundation makes your Australian dream achievable with expert guidance and proven success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fairmontServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#AE1418]"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#1E165F] to-[#AE1418] rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1E165F] mb-3">{service.title}</h3>
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
            <h2 className="text-4xl font-bold text-[#1E165F] mb-4">
              Fairmont's <span className="text-[#AE1418]">Partner Universities</span>
            </h2>
            <p className="text-lg text-gray-600">Top Australian institutions partnered with Fairmont Education Foundation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((uni, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1E165F]/5 to-[#AE1418]/5 p-6 rounded-2xl border border-[#1E165F]/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <GraduationCap className="w-8 h-8 text-[#AE1418]" />
                  <span className="bg-[#AE1418] text-white px-3 py-1 rounded-full text-sm font-bold">{uni.ranking}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1E165F] mb-2">{uni.name}</h3>
                <p className="text-gray-600 mb-4">{uni.programs}</p>
                <button className="text-[#AE1418] font-semibold hover:text-[#1E165F] transition-colors">
                  Explore through Fairmont →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="py-20 bg-gradient-to-r from-[#1E165F] to-[#AE1418] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Study Requirements with <span className="text-[#D9F1F1]">Fairmont Support</span>
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
                    <req.icon className="w-6 h-6 text-[#AE1418]" />
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
            <h2 className="text-4xl font-bold text-[#1E165F] mb-4">
              Application <span className="text-[#AE1418]">Timeline</span> with Fairmont
            </h2>
            <p className="text-lg text-gray-600">Plan your journey with Fairmont Education Foundation's structured timeline</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#1E165F] to-[#AE1418]"></div>
            
            {intakes.map((intake, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <h3 className="text-2xl font-bold text-[#1E165F] mb-2">{intake.name}</h3>
                  <p className="text-gray-600 mb-2"><strong>Study Period:</strong> {intake.timeframe}</p>
                  <p className="text-gray-600 mb-2"><strong>Fairmont Application:</strong> {intake.application}</p>
                  <p className="text-[#AE1418] font-semibold">{intake.fairmontSupport}</p>
                </div>
                
                <div className="relative w-8 h-8 bg-gradient-to-r from-[#1E165F] to-[#AE1418] rounded-full z-10"></div>
                
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                  <div className="bg-gradient-to-r from-[#1E165F]/10 to-[#AE1418]/10 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Fairmont Education Foundation recommends applying 6-8 months in advance for optimal preparation
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gradient-to-br from-[#1E165F]/5 to-[#AE1418]/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E165F] mb-4">
              Fairmont Education Foundation <span className="text-[#AE1418]">FAQs</span>
            </h2>
            <p className="text-lg text-gray-600">Common questions about studying in Australia with Fairmont</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg border border-[#1E165F]/10"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-[#1E165F]/5 transition-colors rounded-2xl"
                >
                  <h3 className="text-lg font-semibold text-[#1E165F] pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#AE1418] transition-transform ${
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
      <div className="bg-gradient-to-r from-[#1E165F] to-[#AE1418] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <Award className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">
            Start Your Australian Journey with Fairmont
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful students who achieved their Australian dreams with Fairmont Education Foundation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[#1E165F] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Free Consultation with Fairmont
            </Link>
            <Link href="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Learn About Fairmont
            </Link>
          </div>
          <p className="mt-6 text-sm opacity-80">
            ✅ 98% Success Rate • ✅ 10+ Years Experience • ✅ N3 Certified Instructors
          </p>
        </div>
      </div>
    </div>
  );
}