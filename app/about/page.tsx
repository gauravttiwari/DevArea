'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Lightbulb,
  Users,
  Target,
  Rocket,
  Code2,
  Eye,
  Heart,
  Brain,
  Zap,
  Shield,
  MessageSquare,
  TrendingUp,
  Smartphone,
} from 'lucide-react';
import Link from 'next/link';

// Components
import HighlightCard from '@/components/sections/HighlightCard';
import MissionCard from '@/components/sections/MissionCard';
import WhyChooseCard from '@/components/sections/WhyChooseCard';
import TeamCard from '@/components/sections/TeamCard';
import StatsCard from '@/components/sections/StatsCard';

// Highlight data
const highlights = [
  {
    title: 'Creative Team',
    description: 'Passionate designers and developers dedicated to excellence',
  },
  {
    title: 'Client-Focused',
    description: 'Your goals become our mission, success is our priority',
  },
  {
    title: 'Mobile-First',
    description: 'Every solution optimized for modern digital experiences',
  },
  {
    title: 'Growth-Driven',
    description: 'Strategic approach to sustainable business growth',
  },
];

// Mission data
const missionVision = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To empower businesses with cutting-edge digital solutions that drive growth, enhance user experiences, and establish meaningful connections in the online world.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be the most trusted digital partner for businesses seeking innovation, quality, and results-driven solutions in an ever-evolving digital landscape.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description:
      'Excellence, integrity, creativity, and collaboration. We believe in transparency, continuous improvement, and putting our clients success above all else.',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Brain,
    title: 'Strategic Thinking',
    description: 'Data-driven strategies that align with your business goals and market opportunities',
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Well-structured, maintainable code built with modern technologies and best practices',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Perfect user experience across all devices and screen sizes',
  },
  {
    icon: TrendingUp,
    title: 'SEO-Ready',
    description: 'Every project optimized for search engines and organic visibility',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Transparent collaboration from discovery through launch and beyond',
  },
  {
    icon: Shield,
    title: 'Ongoing Support',
    description: 'Dedicated technical support and maintenance for long-term success',
  },
];

// Team data
const team = [
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    name: 'Gaurav Tiwari',
    role: 'Founder & Full Stack Developer',
    bio: 'Visionary leader building innovative digital solutions with full-stack expertise',
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
      website: 'https://gaurav.com',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    name: 'Ekansh Pratap Singh',
    role: 'Co-Founder, Frontend Developer & SEO Expert',
    bio: 'Frontend specialist combining beautiful UI design with SEO optimization expertise',
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
      website: 'https://ekansh.com',
    },
  },
];

// Stats data
const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '40+', label: 'Happy Clients' },
  { number: '3+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' },
];

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-light-bg">
      {/* Hero Section */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-light-heading mb-4 leading-tight">
                Get to Know Us
              </h1>
              <p className="text-xl text-[#b91c1c] font-script italic mb-6">
                The Team Behind WeInsightians
              </p>
              <p className="text-xl text-light-text mb-8 leading-relaxed">
                We're not just developers â€“ we're storytellers, designers, and digital growth partners dedicated to helping businesses thrive online.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] text-white font-bold rounded-lg hover:shadow-lg transition-all"
                >
                  Start a Project
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-amber-600 text-[#b91c1c] font-bold rounded-lg hover:bg-amber-600/10 transition-all"
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/about.png"
                alt="DevArea Team"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="w-full py-12 px-4 bg-[#f59e0b]/5 border-y border-[#f59e0b]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <HighlightCard key={index} {...highlight} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-light-heading mb-4 text-center">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] mx-auto mb-12" />

            <div className="space-y-6 text-lg text-light-text leading-relaxed">
              <p>
                <span className="font-bold text-light-heading">WeInsightians began with just two friends and a shared vision.</span> It all started in a small college room, where long conversations about technology, business, and the future slowly turned into something bigger. What began as curiosity soon became a passion â€” a desire to create something meaningful in the digital space.
              </p>

              <p>
                As we explored more, one thing became clear. Many businesses, especially startups and local brands, had great ideas but struggled to build a strong online presence. They knew what they wanted to achieve, but didn't have the right digital tools or guidance to bring it to life. That gap is what inspired us to take the first step.
              </p>

              <p>
                With nothing more than our laptops, skills, and determination, we started building. The early days were not easy â€” balancing studies, late-night coding sessions, and client work pushed us constantly. We made mistakes, learned quickly, and improved with every project. Each small win gave us more confidence, and slowly, our work began to speak for itself.
              </p>

              <p>
                <span className="font-bold text-light-heading">What started as two friends working on small projects has now grown into something much bigger.</span> Businesses started trusting us â€” not just to build websites, but to create experiences that help them grow, connect, and stand out online.
              </p>

              <p>
                Today, <span className="font-bold text-light-heading">WeInsightians is more than just a digital agency.</span> It represents our journey, our mindset, and our commitment to building impactful digital solutions. From simple websites to complete digital experiences, our focus remains the same â€” helping businesses turn ideas into reality.
              </p>

              <p>
                And this is just the beginning. We continue to learn, evolve, and push our limits every day. <span className="font-bold">Because we believe that every great journey starts with a simple idea â€” and the courage to build it.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-[#f59e0b]/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-center text-light-heading mb-16"
          >
            Our <span className="bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">
              Mission, Vision & Values
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionVision.map((item, index) => (
              <MissionCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-center text-light-heading mb-16"
          >
            Why Clients Choose <span className="bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">
              Us
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <WhyChooseCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-[#f59e0b]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-light-heading mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-light-text">
              Talented professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <TeamCard key={index} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-center text-light-heading mb-16"
          >
            Our <span className="bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">
              Impact
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-gradient-to-r from-[#b91c1c]/10 to-[#f59e0b]/10 border-y border-[#f59e0b]/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-light-heading">
              Let's Build Something <span className="bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">
                Amazing
              </span>
            </h2>
            <p className="text-xl text-light-text mb-8 max-w-2xl mx-auto">
              Ready to start your next digital project? Let's collaborate and create something extraordinary together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Start Project
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-amber-600 text-[#b91c1c] font-bold rounded-lg hover:bg-amber-600/10 transition-all"
              >
                Call Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

