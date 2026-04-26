'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, TrendingUp, Zap, Target } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { generateServiceSchema } from '@/lib/schema'

const service = SERVICES.find(s => s.id === 'seo-websites')

export default function SEOWebsites() {
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
            <p className="text-green-600 dark:text-green-400 font-semibold uppercase tracking-widest mb-4">SEO Optimization</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-light-text dark:text-dark-text mb-6 leading-tight">
              SEO-Optimized
              <span className="bg-gradient-to-r from-green-600 dark:from-green-400 to-emerald-600 dark:to-emerald-400 bg-clip-text text-transparent"> Websites</span>
            </h1>
            <p className="text-lg sm:text-xl text-light-text dark:text-dark-text mb-8 max-w-2xl leading-relaxed opacity-90">
              Websites built for search visibility. From technical SEO to content optimization, we ensure your site ranks and attracts qualified organic traffic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/40 transition-all"
                >
                  Boost Your Rankings
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 rounded-lg font-semibold hover:bg-green-50 dark:hover:bg-green-950/20 transition-all"
                >
                  View Results
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
            SEO Excellence
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Organic Traffic Growth',
                description: 'Proven strategies to increase your website visibility and attract qualified organic visitors.'
              },
              {
                icon: Target,
                title: 'Keyword Research',
                description: 'Data-driven keyword targeting aligned with your business goals and customer search behavior.'
              },
              {
                icon: Zap,
                title: 'Technical SEO',
                description: 'Site speed optimization, mobile-first indexing, structured data, and crawlability improvements.'
              },
              {
                icon: Check,
                title: 'Content Strategy',
                description: 'SEO-optimized content that ranks and converts, addressing customer search intent.'
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
                <benefit.icon className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-2">{benefit.title}</h3>
                <p className="text-light-text dark:text-dark-text opacity-75">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-24 px-4 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-900 dark:to-emerald-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Dominate Search Results?</h2>
            <p className="text-xl text-white/90 mb-8">Let's improve your visibility and organic traffic</p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-green-600 dark:text-green-400 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
