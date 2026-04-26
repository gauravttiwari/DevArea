'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Zap, BarChart3, Target } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { generateServiceSchema } from '@/lib/schema'

const service = SERVICES.find(s => s.id === 'landing-pages')

export default function LandingPages() {
  const schema = generateServiceSchema(service!)

  return (
    <main className="flex flex-col w-full bg-light-bg dark:bg-dark-bg transition-colors duration-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 pt-32 bg-light-bg dark:bg-dark-bg transition-colors duration-500">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-red-600 dark:text-red-400 font-semibold uppercase tracking-widest mb-4">Landing Pages</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-light-text dark:text-dark-text mb-6 leading-tight">
              High-Converting
              <span className="bg-gradient-to-r from-red-600 dark:from-red-400 to-pink-600 dark:to-pink-400 bg-clip-text text-transparent"> Landing Pages</span>
            </h1>
            <p className="text-lg sm:text-xl text-light-text dark:text-dark-text mb-8 max-w-2xl leading-relaxed opacity-90">
              Custom landing pages designed and built to convert visitors into customers. Every element optimized for maximum engagement and ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/40 transition-all"
                >
                  Start Your Project
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-red-600 dark:border-red-400 text-red-600 dark:text-red-400 rounded-lg font-semibold hover:bg-red-50 dark:hover:bg-red-950/20 transition-all"
                >
                  View Our Portfolio
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 sm:py-24 px-4 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-light-text dark:text-dark-text mb-12 text-center"
          >
            Why Our Landing Pages Convert
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: 'Conversion-First Design',
                description: 'Every design decision is data-driven and focused on turning visitors into leads or customers.'
              },
              {
                icon: Zap,
                title: 'Lightning-Fast Loading',
                description: 'Optimized for speed with minimal scripts, lazy loading, and CDN delivery for maximum performance.'
              },
              {
                icon: BarChart3,
                title: 'Analytics & Tracking',
                description: 'Built-in conversion tracking, A/B testing, and detailed analytics to measure and improve performance.'
              },
              {
                icon: Check,
                title: 'Mobile-First Responsive',
                description: 'Perfect on all devices with mobile-optimized forms, fast checkout, and touch-friendly interactions.'
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800"
              >
                <benefit.icon className="w-12 h-12 text-red-600 dark:text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-2">{benefit.title}</h3>
                <p className="text-light-text dark:text-dark-text opacity-75">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-24 px-4 bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-900 dark:to-pink-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Convert More Visitors?</h2>
            <p className="text-xl text-white/90 mb-8">Let's build a landing page that drives results</p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-red-600 dark:text-red-400 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Get Started Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
