"use client";

import { GraduationCap, Languages, BookOpen, Users, Target, CheckCircle, Clock, Award, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('all');

  const serviceTabs = [
    { id: 'all', name: 'All Services' },
    { id: 'language', name: 'Language Training' },
    { id: 'admission', name: 'Admission Guidance' },
    { id: 'visa', name: 'Visa Assistance' },
    { id: 'support', name: 'Student Support' },
  ];

  const services = [
    {
      id: 1,
      title: "Japanese Language Training",
      category: "language",
      icon: Languages,
      description: "Comprehensive Japanese language courses from beginner to advanced levels",
      features: ["JLPT N5 to N3 Preparation", "Native Japanese Instructors", "Interactive Learning", "Cultural Immersion"],
      duration: "3-12 Months",
      level: "All Levels",
      popular: true
    },
    {
      id: 2,
      title: "University Admission Guidance",
      category: "admission",
      icon: GraduationCap,
      description: "Expert guidance for university selection and application process",
      features: ["University Selection", "Application Preparation", "Document Review", "Interview Training"],
      duration: "1-3 Months",
      level: "Undergraduate/Graduate",
      popular: false
    },
    {
      id: 3,
      title: "Student Visa Processing",
      category: "visa",
      icon: BookOpen,
      description: "End-to-end student visa application support and documentation",
      features: ["Visa Consultation", "Document Preparation", "Application Submission", "Follow-up Support"],
      duration: "2-4 Weeks",
      level: "All Students",
      popular: true
    },
    {
      id: 4,
      title: "Pre-Departure Orientation",
      category: "support",
      icon: Users,
      description: "Complete preparation for life and studies in Japan",
      features: ["Cultural Training", "Accommodation Setup", "Banking & SIM Card", "Transportation Guide"],
      duration: "2 Weeks",
      level: "Pre-Arrival",
      popular: false
    },
    {
      id: 5,
      title: "Scholarship Assistance",
      category: "admission",
      icon: Award,
      description: "Guidance and support for scholarship applications",
      features: ["Scholarship Search", "Application Support", "Document Preparation", "Interview Practice"],
      duration: "1-2 Months",
      level: "Eligible Students",
      popular: true
    },
    {
      id: 6,
      title: "Post-Arrival Support",
      category: "support",
      icon: Heart,
      description: "Continuous support after arriving in Japan",
      features: ["Airport Pickup", "Accommodation Support", "Part-time Job Assistance", "24/7 Emergency Support"],
      duration: "Ongoing",
      level: "All Students",
      popular: false
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1E165F] to-[#AE1418] text-white py-20 mt-32 md:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 opacity-90"
            >
              Comprehensive Solutions for Your Japanese Education Journey
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-24 h-1 bg-white/80 mx-auto mb-8"
            ></motion.div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E165F] mb-4">
                Your Complete Education Partner
              </h2>
              <div className="w-16 h-1 bg-[#AE1418] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From language preparation to post-arrival support, we provide end-to-end services 
                to ensure your success in Japan. Our experienced team guides you through every step 
                of your educational journey.
              </p>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
            >
              {[
                { number: "1000+", label: "Students Guided" },
                { number: "50+", label: "Partner Institutions" },
                { number: "98%", label: "Visa Success Rate" },
                { number: "10+", label: "Years Experience" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#1E165F] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-[#1E165F] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  {service.popular && (
                    <div className="bg-[#AE1418] text-white text-sm font-semibold px-4 py-1 text-center">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-[#1E165F] to-[#AE1418] rounded-lg flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      {service.popular && (
                        <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                          Popular
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-[#1E165F] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="bg-gray-100 px-2 py-1 rounded">
                        {service.level}
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-[#1E165F] to-[#AE1418] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-br from-[#1E165F]/5 to-[#AE1418]/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E165F] mb-4">
              Our 5-Step Success Process
            </h2>
            <div className="w-16 h-1 bg-[#AE1418] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure your success at every stage of your journey to Japan
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              { step: "01", title: "Initial Consultation", description: "Understanding your goals and academic background" },
              { step: "02", title: "Language Training", description: "Japanese language preparation and JLPT guidance" },
              { step: "03", title: "University Selection", description: "Matching you with the right institutions and programs" },
              { step: "04", title: "Application & Visa", description: "Document preparation and visa processing" },
              { step: "05", title: "Pre-Departure & Support", description: "Orientation and ongoing support in Japan" }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center gap-6 mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse text-right'}`}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-[#1E165F] to-[#AE1418] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {process.step}
                </div>
                <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <h3 className="text-xl font-bold text-[#1E165F] mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-[#1E165F] to-[#AE1418] rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Journey to Japan?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Let us help you achieve your educational dreams in Japan with our comprehensive services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#1E165F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Free Consultation
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1E165F] transition-all duration-300">
                  View All Services
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}