'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, RefreshCw, Zap, Palette } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { generateServiceSchema } from '@/lib/schema'

const service = SERVICES.find(s => s.id === 'website-redesign')

export default function WebsiteRedesign() {
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
            <p className="text-[#b91c1c] dark:text-[#fbbf24] font-semibold uppercase tracking-widest mb-4">Website Redesign</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-light-text dark:text-dark-text mb-6 leading-tight">
              Modernize Your
              <span className="bg-gradient-to-r from-[#b91c1c] dark:from-[#fbbf24] to-[#f59e0b] dark:to-[#dc2626] bg-clip-text text-transparent"> Online Presence</span>
            </h1>
            <p className="text-lg sm:text-xl text-light-text dark:text-dark-text mb-8 max-w-2xl leading-relaxed opacity-90">
              Give your website a modern makeover. We refresh designs, improve user experience, and boost conversions while maintaining your brand identity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/40 transition-all"
                >
                  Start Redesign
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-red-600 dark:border-red-400 text-[#b91c1c] dark:text-[#fbbf24] rounded-lg font-semibold hover:bg-red-50 dark:hover:bg-red-950/20 transition-all"
                >
                  View Before/After
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
            Redesign Benefits
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Palette,
                title: 'Modern Design',
                description: 'Contemporary, clean designs that reflect current web trends and your brand evolution.'
              },
              {
                icon: Zap,
                title: 'Better Performance',
                description: 'Faster load times, improved SEO, and mobile optimization with modern web standards.'
              },
              {
                icon: RefreshCw,
                title: 'Enhanced UX',
                description: 'Improved navigation, clearer CTAs, better conversion paths, and user-friendly interface.'
              },
              {
                icon: Check,
                title: 'Zero Downtime Migration',
                description: 'Smooth transition from old to new without losing SEO rankings or customer data.'
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
                <benefit.icon className="w-12 h-12 text-[#b91c1c] dark:text-[#fbbf24] mb-4" />
                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-2">{benefit.title}</h3>
                <p className="text-light-text dark:text-dark-text opacity-75">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-24 px-4 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] dark:from-red-900 dark:to-orange-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready for a Fresh Look?</h2>
            <p className="text-xl text-white/90 mb-8">Let's modernize your website and boost results</p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#b91c1c] dark:text-[#fbbf24] rounded-lg font-semibold hover:shadow-lg transition-all"
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


