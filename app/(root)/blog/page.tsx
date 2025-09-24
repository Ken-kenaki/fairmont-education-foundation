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
  image: "/blog-japan-2026.jpg",
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
    <div className="min-h-screen bg-white mt-30">


      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1E165F] mb-4">Our Blogs</h2>
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

  
    </div>
  );
}