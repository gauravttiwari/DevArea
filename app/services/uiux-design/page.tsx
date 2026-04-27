'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Eye, Users, Palette } from 'lucide-react'
import { SERVICES, TESTIMONIALS, PRICING } from '@/lib/constants'
import { generateServiceSchema } from '@/lib/schema'

const service = SERVICES.find(s => s.id === 'uiux-design')

export default function UIUXDesign() {
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
            <p className="text-orange-600 dark:text-orange-400 font-semibold uppercase tracking-widest mb-4">UI/UX Design</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-light-text dark:text-dark-text mb-6 leading-tight">
              Beautiful Design That
              <span className="bg-gradient-to-r from-orange-600 dark:from-[#dc2626] to-[#f59e0b] dark:to-[#f59e0b] bg-clip-text text-transparent"> Converts</span>
            </h1>
            <p className="text-lg sm:text-xl text-light-text dark:text-dark-text mb-8 max-w-2xl leading-relaxed opacity-90">
              We create stunning, user-centered designs that not only look beautiful but drive engagement, satisfaction, and business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-600 to-[#f59e0b] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/40 transition-all"
                >
                  Get Design Consultation
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 rounded-lg font-semibold hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-all"
                >
                  View Design Portfolio
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="w-full py-16 sm:py-24 px-4 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-light-text dark:text-dark-text mb-12 text-center"
          >
            Our Design Approach
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Eye,
                title: 'Research & Discovery',
                description: 'We conduct in-depth user research, competitor analysis, and market study to inform our designs.'
              },
              {
                icon: Users,
                title: 'User-Centered Design',
                description: 'Every design decision is backed by user testing, feedback, and usability best practices.'
              },
              {
                icon: Palette,
                title: 'Visual Excellence',
                description: 'We create stunning visuals that align with your brand identity and captivate your audience.'
              },
              {
                icon: Check,
                title: 'Conversion Optimization',
                description: 'Designs are optimized for conversions with strategic CTAs, information hierarchy, and user flow.'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg p-8 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all"
              >
                <item.icon className="w-12 h-12 text-orange-600 dark:text-orange-400 mb-4" />
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-3">{item.title}</h3>
                <p className="text-light-text dark:text-dark-text opacity-75">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-24 px-4 bg-gradient-to-r from-orange-600 to-[#f59e0b] dark:from-orange-900 dark:to-orange-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Create Beautiful Designs?</h2>
            <p className="text-xl text-white/90 mb-8">Let's design an experience that captivates and converts</p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-orange-600 dark:text-orange-400 rounded-lg font-semibold hover:shadow-lg transition-all"
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

