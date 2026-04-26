'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Shield, Zap, Clock } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { generateServiceSchema } from '@/lib/schema'

const service = SERVICES.find(s => s.id === 'maintenance')

export default function Maintenance() {
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
            <p className="text-slate-600 dark:text-slate-400 font-semibold uppercase tracking-widest mb-4">Maintenance</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-light-text dark:text-dark-text mb-6 leading-tight">
              Keep Your Website
              <span className="bg-gradient-to-r from-slate-600 dark:from-slate-400 to-gray-600 dark:to-gray-400 bg-clip-text text-transparent"> Running Smoothly</span>
            </h1>
            <p className="text-lg sm:text-xl text-light-text dark:text-dark-text mb-8 max-w-2xl leading-relaxed opacity-90">
              Ongoing support, updates, security patches, and optimization to keep your website secure, fast, and always performing at peak levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-slate-600 to-gray-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-slate-500/40 transition-all"
                >
                  Get Support
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-slate-600 dark:border-slate-400 text-slate-600 dark:text-slate-400 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-950/20 transition-all"
                >
                  Learn More
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
            Maintenance Services
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: 'Security Monitoring',
                description: 'Regular security audits, vulnerability scanning, SSL certificate management, and DDoS protection.'
              },
              {
                icon: Zap,
                title: 'Performance Optimization',
                description: 'Database optimization, caching strategies, image compression, and code minification for speed.'
              },
              {
                icon: Clock,
                title: 'Regular Updates',
                description: 'CMS updates, plugin management, dependency updates, and compatibility testing.'
              },
              {
                icon: Check,
                title: '24/7 Monitoring',
                description: 'Uptime monitoring, error tracking, performance analytics, and proactive issue detection.'
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
                <benefit.icon className="w-12 h-12 text-slate-600 dark:text-slate-400 mb-4" />
                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-2">{benefit.title}</h3>
                <p className="text-light-text dark:text-dark-text opacity-75">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-24 px-4 bg-gradient-to-r from-slate-600 to-gray-600 dark:from-slate-900 dark:to-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Keep Your Website Secure & Fast</h2>
            <p className="text-xl text-white/90 mb-8">Let us handle maintenance while you focus on your business</p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-slate-600 dark:text-slate-400 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Start Maintenance Plan
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
