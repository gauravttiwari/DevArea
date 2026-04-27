'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Code, Zap, Users } from 'lucide-react'
import { SERVICES, PRICING } from '@/lib/constants'
import { generateServiceSchema } from '@/lib/schema'
import { useTheme } from '@/components/providers/ThemeProvider'

const service = SERVICES.find(s => s.id === 'web-development')

export default function WebDevelopment() {
  const schema = generateServiceSchema(service!)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <main className={`flex flex-col w-full transition-colors duration-500 ${isDark ? 'bg-[#050505]' : 'bg-[#eeeedf]'}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className={`w-full py-12 sm:py-20 lg:py-32 px-4 pt-32 transition-colors duration-500 ${isDark ? 'bg-[#050505]' : 'bg-[#eeeedf]'}`}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#b91c1c] dark:text-[#fbbf24] font-semibold uppercase tracking-widest mb-4">Web Development</p>
            <h1 className={`text-5xl sm:text-6xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              High-Performance Custom
              <span className="bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] dark:from-[#fbbf24] dark:to-[#dc2626] bg-clip-text text-transparent"> Web Development</span>
            </h1>
            <p className={`text-lg sm:text-xl mb-8 max-w-2xl leading-relaxed opacity-90 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
              We build scalable, high-performance websites and web applications tailored to your business needs. From concept to deployment, we're with you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#b91c1c]/30 transition-all"
                >
                  Start Your Project
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-[#b91c1c] dark:border-[#fbbf24] text-[#b91c1c] dark:text-[#fbbf24] rounded-lg font-semibold hover:bg-red-50 dark:hover:bg-yellow-950/20 transition-all"
                >
                  View Our Portfolio
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`w-full py-16 sm:py-24 px-4 transition-colors duration-500 ${isDark ? 'bg-[#050505]' : 'bg-[#f8f8ef]'}`}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            Why Choose Our Web Development Services?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Code,
                title: 'Latest Technology Stack',
                description: 'We use modern frameworks and tools like Next.js, React, TypeScript, and Node.js to build scalable solutions.'
              },
              {
                icon: Zap,
                title: 'Lightning-Fast Performance',
                description: 'Optimized for speed with image optimization, code splitting, and intelligent caching strategies.'
              },
              {
                icon: Users,
                title: 'User-Focused Design',
                description: 'Every project is built with UX best practices, accessibility standards, and mobile-first approach.'
              },
              {
                icon: Check,
                title: 'Maintenance & Support',
                description: 'Ongoing support, updates, security patches, and performance monitoring included.'
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`border border-[#f59e0b]/30 rounded-lg p-8 hover:border-[#b91c1c]/60 transition-all ${isDark ? 'bg-[#0f172a]' : 'bg-white'}`}
              >
                <benefit.icon className={`w-12 h-12 mb-4 ${isDark ? 'text-[#fbbf24]' : 'text-[#b91c1c]'}`} />
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>{benefit.title}</h3>
                <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`w-full py-16 sm:py-24 px-4 transition-colors duration-500 ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            Our Development Process
          </motion.h2>

          <div className="space-y-8">
            {[
              { step: '1', title: 'Discovery & Planning', desc: 'We understand your goals, target audience, and technical requirements.' },
              { step: '2', title: 'Design & Architecture', desc: 'Create wireframes, design mockups, and plan the technical architecture.' },
              { step: '3', title: 'Development', desc: 'Build your solution using best practices, clean code, and comprehensive testing.' },
              { step: '4', title: 'Deployment & Launch', desc: 'Deploy to production with monitoring, analytics, and ongoing optimization.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                  <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={`w-full py-16 sm:py-24 px-4 transition-colors duration-500 ${isDark ? 'bg-[#050505]' : 'bg-[#eeeedf]'}`}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            Pricing Options
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {PRICING.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`rounded-lg p-8 border-2 transition-all ${
                  plan.popular
                    ? `${isDark ? 'bg-[#0f172a]' : 'bg-white'} border-[#f59e0b] scale-105 md:scale-105 shadow-lg shadow-[#b91c1c]/20`
                    : `${isDark ? 'bg-[#0f172a] border-slate-700' : 'bg-white border-slate-300'}`
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                <p className={`mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{plan.description}</p>
                <div className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>${plan.price}</div>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-lg font-semibold transition-all mb-6 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] text-white'
                        : `${isDark ? 'text-[#fbbf24]' : 'text-[#b91c1c]'} border-2 border-[#f59e0b] hover:bg-[#f59e0b]/10`
                    }`}
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-24 px-4 bg-gradient-to-r from-[#f59e0b]/15 to-[#b91c1c]/15">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            Ready to Build Something Amazing?
          </motion.h2>
          <p className={`text-xl mb-8 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            Let's discuss your project and create a custom solution that drives real results.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#b91c1c]/30 transition-all"
            >
              Schedule a Consultation
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  )
}