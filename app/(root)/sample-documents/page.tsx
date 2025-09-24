"use client";

import { FileText, Download, Search, Filter, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const documentCategories = [
    { id: 'all', name: 'All Documents', count: 24 },
    { id: 'admission', name: 'Admission', count: 8 },
    { id: 'visa', name: 'Visa Requirements', count: 6 },
    { id: 'financial', name: 'Financial Documents', count: 5 },
    { id: 'academic', name: 'Academic Records', count: 5 },
  ];

  const documents = [
    {
      id: 1,
      title: "Student Visa Application Form",
      category: "visa",
      size: "2.4 MB",
      type: "PDF",
      date: "2024-01-15",
      status: "required",
      description: "Official student visa application form for Japan immigration"
    },
    {
      id: 2,
      title: "University Application Checklist",
      category: "admission",
      size: "1.2 MB",
      type: "PDF",
      date: "2024-01-10",
      status: "important",
      description: "Complete checklist for university application process"
    },
    {
      id: 3,
      title: "Financial Support Declaration",
      category: "financial",
      size: "3.1 MB",
      type: "DOCX",
      date: "2024-01-08",
      status: "required",
      description: "Template for financial support declaration letter"
    },
    {
      id: 4,
      title: "Academic Transcript Template",
      category: "academic",
      size: "1.8 MB",
      type: "PDF",
      date: "2024-01-05",
      status: "optional",
      description: "Format for academic transcripts submission"
    },
    {
      id: 5,
      title: "Passport Photo Requirements",
      category: "visa",
      size: "0.9 MB",
      type: "PDF",
      date: "2024-01-03",
      status: "important",
      description: "Specifications for passport-sized photographs"
    },
    {
      id: 6,
      title: "Scholarship Application Guide",
      category: "financial",
      size: "2.7 MB",
      type: "PDF",
      date: "2023-12-28",
      status: "optional",
      description: "Complete guide to scholarship opportunities"
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case 'required':
        return <AlertCircle className="w-4 h-4 text-[#AE1418]" />;
      case 'important':
        return <Clock className="w-4 h-4 text-orange-500" />;
      case 'optional':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <FileText className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'required':
        return "Required";
      case 'important':
        return "Important";
      case 'optional':
        return "Optional";
      default:
        return "Document";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1E165F] to-[#AE1418] text-white py-20 mt-32 md:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Important Documents</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              All the essential documents for your Japanese education journey
            </p>
            <div className="w-24 h-1 bg-white/80 mx-auto mb-8"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Search Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E165F]/20 focus:border-[#1E165F]"
                />
              </motion.div>

              {/* Filter Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative"
              >
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E165F]/20 focus:border-[#1E165F] appearance-none bg-white"
                >
                  {documentCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </motion.div>
            </div>

            {/* Category Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-2 justify-center"
            >
              {documentCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-[#1E165F] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documents Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E165F] mb-4 text-center">
              Essential Documents Collection
            </h2>
            <div className="w-16 h-1 bg-[#AE1418] mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDocuments.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#1E165F] to-[#AE1418] rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                        {doc.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      {getStatusIcon(doc.status)}
                      <span className={`text-sm font-medium ${
                        doc.status === 'required' ? 'text-[#AE1418]' :
                        doc.status === 'important' ? 'text-orange-500' :
                        'text-green-500'
                      }`}>
                        {getStatusText(doc.status)}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1E165F] mb-3 line-clamp-2">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {doc.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{doc.size}</span>
                      <span>{new Date(doc.date).toLocaleDateString()}</span>
                    </div>

                    <button className="w-full bg-gradient-to-r from-[#1E165F] to-[#AE1418] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download Document
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredDocuments.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center py-12"
              >
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-600 mb-2">No documents found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gradient-to-br from-[#1E165F]/5 to-[#AE1418]/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E165F] mb-6">
              Need Help with Documents?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is here to assist you with document preparation, verification, and submission process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#1E165F] to-[#AE1418] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300">
                Get Document Assistance
              </button>
              <button className="border border-[#1E165F] text-[#1E165F] px-8 py-3 rounded-lg font-semibold hover:bg-[#1E165F] hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}