'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Briefcase, Award, Users } from 'lucide-react';
import FilterTabs from '@/components/sections/FilterTabs';
import ProjectCard from '@/components/sections/ProjectCard';
import CaseStudySection from '@/components/sections/CaseStudySection';

type CaseStudy = {
  title: string;
  category: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  image: string;
  imagePosition: 'left' | 'right';
  slug: string;
};

// Project data
const projects = [
  {
    id: '1',
    title: 'TechStartup Website Redesign',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1499747292307-58a92ef88001?w=600&h=400&fit=crop',
    result: 'Increased conversion rate by 45% with modern, responsive design',
    slug: 'techstartup-redesign',
  },
  {
    id: '2',
    title: 'E-commerce Platform Optimization',
    category: 'Ecommerce',
    image: 'https://images.unsplash.com/photo-1516534775068-bb57ad6e9f65?w=600&h=400&fit=crop',
    result: 'Boosted online sales by 60% through UX improvements and checkout optimization',
    slug: 'ecommerce-optimization',
  },
  {
    id: '3',
    title: 'SaaS Dashboard UI Redesign',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    result: 'Improved user engagement by 35% with intuitive dashboard design',
    slug: 'saas-dashboard-ui',
  },
  {
    id: '4',
    title: 'Healthcare Portal Development',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop',
    result: 'HIPAA-compliant portal serving 10,000+ patients with secure data access',
    slug: 'healthcare-portal',
  },
  {
    id: '5',
    title: 'Fashion Brand SEO Campaign',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop',
    result: 'Ranked top 3 for 25+ high-volume keywords, organic traffic +220%',
    slug: 'fashion-seo-campaign',
  },
  {
    id: '6',
    title: 'Mobile App Landing Page',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1512941691920-25bda097df5a?w=600&h=400&fit=crop',
    result: 'Generated 5,000+ app downloads with conversion-optimized landing page',
    slug: 'mobile-app-landing',
  },
  {
    id: '7',
    title: 'B2B SaaS UI/UX Redesign',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    result: 'Reduced user onboarding time by 40%, improved user retention by 28%',
    slug: 'saas-ux-redesign',
  },
  {
    id: '8',
    title: 'Online Store Launch',
    category: 'Ecommerce',
    image: 'https://images.unsplash.com/photo-1488190211105-8342881b725d?w=600&h=400&fit=crop',
    result: 'Successfully launched e-commerce platform with $500K first-month revenue',
    slug: 'online-store-launch',
  },
  {
    id: '9',
    title: 'Corporate Website Redesign',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=400&fit=crop',
    result: 'Enhanced brand presence with modern design, improved lead generation by 55%',
    slug: 'corporate-redesign',
  },
  {
    id: '10',
    title: 'Local Business SEO Strategy',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    result: 'Achieved #1 local rankings, generated 200+ qualified leads monthly',
    slug: 'local-seo-strategy',
  },
  {
    id: '11',
    title: 'Fintech App Interface Design',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop',
    result: 'Designed intuitive financial interface used by 100K+ daily active users',
    slug: 'fintech-interface',
  },
  {
    id: '12',
    title: 'Subscription Box Website',
    category: 'Ecommerce',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
    result: 'Built subscription model, achieved 70% monthly recurring revenue growth',
    slug: 'subscription-box-website',
  },
];

// Case studies data
const caseStudies: CaseStudy[] = [
  {
    title: 'TechStartup Website Redesign',
    category: 'Web Development',
    challenge:
      'TechStartup had an outdated website that didn\'t showcase their innovative product. Their bounce rate was high (65%), and they struggled to convert visitors into leads. The site wasn\'t mobile-responsive and lacked a clear value proposition.',
    solution:
      'We completely redesigned their website with a modern, mobile-first approach. We created compelling hero sections, streamlined navigation, integrated a lead capture form, and added detailed product showcase sections. We implemented smooth animations and optimized page speed.',
    results: [
      { label: 'Conversion Rate Increase', value: '+45%' },
      { label: 'Bounce Rate Reduction', value: '-35%' },
      { label: 'Monthly Leads Generated', value: '200+' },
      { label: 'Page Load Time', value: '2.1s' },
    ],
    image: 'https://images.unsplash.com/photo-1499747292307-58a92ef88001?w=800&h=600&fit=crop',
    imagePosition: 'right',
    slug: 'techstartup-redesign',
  },
  {
    title: 'E-commerce Platform Optimization',
    category: 'Ecommerce',
    challenge:
      'An established e-commerce store had poor conversion rates (1.2%) and high cart abandonment (72%). Product pages lacked compelling imagery and detailed descriptions. The checkout process was confusing with too many steps.',
    solution:
      'We redesigned the entire shopping experience with high-quality product images, improved descriptions, customer reviews integration, and a streamlined 1-click checkout process. We added trust signals, security badges, and abandoned cart recovery emails.',
    results: [
      { label: 'Conversion Rate Increase', value: '+60%' },
      { label: 'Cart Abandonment Reduction', value: '-45%' },
      { label: 'Average Order Value', value: '+32%' },
      { label: 'Customer Satisfaction', value: '4.8/5' },
    ],
    image: 'https://images.unsplash.com/photo-1516534775068-bb57ad6e9f65?w=800&h=600&fit=crop',
    imagePosition: 'left',
    slug: 'ecommerce-optimization',
  },
  {
    title: 'SaaS Dashboard UI Redesign',
    category: 'UI/UX',
    challenge:
      'A B2B SaaS company had a complex dashboard that overwhelmed users with information. User testing revealed high churn rates (45% after 30 days) and low feature adoption. Users didn\'t know where to start.',
    solution:
      'We redesigned the dashboard with a focus on user goals. We created personalized home screens, simplified data visualization, improved navigation, and added contextual help. We implemented dark/light modes and customizable widgets for power users.',
    results: [
      { label: 'User Engagement Increase', value: '+35%' },
      { label: 'Feature Adoption Rate', value: '+72%' },
      { label: 'Churn Rate Reduction', value: '-28%' },
      { label: 'Support Tickets Reduction', value: '-40%' },
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    imagePosition: 'right',
    slug: 'saas-dashboard-ui',
  },
];

// Filter categories
const categories = ['All', 'Web Development', 'UI/UX', 'Ecommerce', 'SEO'];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="min-h-screen bg-light-bg">
      {/* Hero Section */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-light-heading mb-4">
              Our Work
            </h1>
            <p className="text-xl text-light-text max-w-2xl mx-auto mb-8">
              Discover how we've helped businesses transform their digital presence and achieve remarkable results
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              <div className="p-4 bg-white rounded-xl border border-light-border">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-light-text text-sm mt-1">Projects Delivered</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-light-border">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">
                  40+
                </div>
                <div className="text-light-text text-sm mt-1">Happy Clients</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-light-border">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">
                  5+ Yrs
                </div>
                <div className="text-light-text text-sm mt-1">Industry Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="w-full px-4 mb-8">
        <div className="max-w-6xl mx-auto">
          <FilterTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      {/* Project Grid */}
      <section className="w-full px-4 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                {...project}
                index={index}
              />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-light-text text-lg">
                No projects found in this category. Try another filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-[#f59e0b]/5 border-y border-[#f59e0b]/20">
        <div className="max-w-6xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-light-heading mb-4">
              Featured <span className="bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">Case Studies</span>
            </h2>
            <p className="text-xl text-light-text max-w-2xl mx-auto">
              In-depth looks at our most impactful projects and the strategies that drove success
            </p>
          </motion.div>
        </div>

        {caseStudies.map((caseStudy, index) => (
          <CaseStudySection
            key={index}
            {...caseStudy}
            index={index}
          />
        ))}
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl sm:text-6xl font-serif font-bold text-light-heading">
              Ready to Create Your <span className="bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">Success Story?</span>
            </h2>
            <p className="text-xl text-light-text max-w-2xl mx-auto">
              Let's work together to transform your digital vision into measurable results. Whether you need a website redesign, a new application, or digital marketing strategy, we're here to help.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] text-white font-bold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-amber-600 text-[#b91c1c] font-bold rounded-lg hover:bg-amber-600/10 transition-all"
              >
                Get a Free Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

