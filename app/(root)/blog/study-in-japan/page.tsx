// app/blog/[slug]/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen, Target, Users } from 'lucide-react';

// This would typically come from your CMS or API
const blogPost = {
  id: 1,
  title: "Study in Japan from Nepal: Complete Guide for April 2026 Intake",
  excerpt: "Learn everything about the April 2026 intake process, requirements, and how to prepare for studying in Japan from Nepal.",
  image: "/connect-2.jpg",
  date: "2024-12-19",
  readTime: "8 min read",
  author: "Fairmont Education Team",
  category: "Japan Education",
  content: `
    <p>Fairmont Education Consultancy is proud to guide Nepali students through the April 2026 intake process for Japanese educational institutions. With over 10 years of experience and professional N3 passed language instructors, we provide comprehensive support from application to arrival.</p>

    <h2>Key Highlights for April 2026 Intake</h2>
    <p>Interviews are currently ongoing for the April 2026 intake. We consider profiles with GPA up to 1.9 and study gaps up to 5–6 years, making Japanese education accessible to a wider range of students.</p>

    <h3>Eligibility Requirements</h3>
    <ul>
      <li>GPA accepted up to 1.9</li>
      <li>Study gap accepted up to 5–6 years</li>
      <li>JLPT N5/N4 preferred (Free foundation classes available)</li>
      <li>Ongoing interviews with limited slots</li>
    </ul>

    <h3>Featured University Partnerships</h3>
    <p>We have partnerships with top Japanese universities including Waseda University, Osaka University, Kyoto University, and the University of Tokyo.</p>

    <h2>Our Comprehensive Support System</h2>
    <p>At Fairmont Education, we provide end-to-end guidance ensuring your success in Japan:</p>

    <h3>Language Preparation</h3>
    <p>Our professional N3 certified instructors offer Japanese language training using authentic Japanese education methodologies.</p>

    <h3>Documentation & Visa Assistance</h3>
    <p>Complete support with Certificate of Eligibility (COE) application and student visa processing.</p>

    <h3>Post-Arrival Support</h3>
    <p>We continue to support students after arrival in Japan with accommodation, cultural adaptation, and part-time job assistance.</p>
  `,
  tags: ["Japan Education", "Student Visa", "JLPT", "April 2026", "Nepali Students"]
};

const relatedPosts = [
  {
    id: 2,
    title: "JLPT Preparation: Free Classes and Study Strategies",
    image: "/connect-2.jpg",
    date: "2024-12-15",
    readTime: "6 min read",
    slug: "study-in-japan"
  },
  {
    id: 3,
    title: "Understanding Japanese Student Visa Process",
    image: "/japan.jpg",
    date: "2024-12-10",
    readTime: "10 min read",
    slug: "japanese-student-visa-process"
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-white mt-34">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#AE1418] hover:text-[#1E165F] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </nav>

      {/* Article Header */}
      <section className="py-12 bg-gradient-to-br from-[#1E165F]/5 to-[#AE1418]/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="bg-[#AE1418] text-white px-4 py-2 rounded-full text-sm font-semibold">
                {blogPost.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E165F] mb-6">
              {blogPost.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {blogPost.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="prose prose-lg max-w-none"
              >
                <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
                
                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-6"
              >
                {/* Author Info */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#1E165F] to-[#AE1418] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-[#1E165F]">Fairmont Team</h3>
                    <p className="text-sm text-gray-600 mt-1">Education Experts</p>
                    <p className="text-xs text-gray-500 mt-2">
                      Over 10 years of experience guiding Nepali students to Japan
                    </p>
                  </div>
                </div>

                {/* Quick Facts */}
                <div className="bg-gradient-to-br from-[#1E165F] to-[#AE1418] rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Key Facts
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      GPA accepted: Up to 1.9
                    </li>
                    <li className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Study gap: 5-6 years
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Free JLPT classes
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1E165F] mb-4">Related Articles</h2>
            <div className="w-16 h-1 bg-[#AE1418] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1E165F] mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[#AE1418] font-semibold">
                      Read More
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E165F] to-[#AE1418] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Japanese Education Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact Fairmont Education today for personalized guidance on the April 2026 intake and free Japanese language classes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#1E165F] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/test-preparations/japanese-language"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors duration-300"
              >
                Join Free JLPT Class
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}