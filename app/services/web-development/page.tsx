'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Code, Zap, Users } from 'lucide-react'
import { SERVICES, TESTIMONIALS, PRICING } from '@/lib/constants'
import { generateServiceSchema } from '@/lib/schema'

const service = SERVICES.find(s => s.id === 'web-development')

export default function WebDevelopment() {
  const schema = generateServiceSchema(service!)

  return (
    <main className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 pt-32 bg-gradient-to-br from-light-bg via-white to-light-bg">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-indigo-600 font-semibold uppercase tracking-widest mb-4">Web Development</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-light-heading mb-6 leading-tight">
              High-Performance Custom
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> Web Development</span>
            </h1>
            <p className="text-xl text-light-text mb-8 max-w-2xl leading-relaxed">
              We build scalable, high-performance websites and web applications tailored to your business needs. From concept to deployment, we're with you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/40 transition-all"
                >
                  Start Your Project
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all"
                >
                  View Our Portfolio
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 sm:py-24 px-4 bg-light-bg">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-light-heading mb-12 text-center"
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
                className="bg-dark-900/50 border border-indigo-500/20 rounded-lg p-8 hover:border-indigo-500/50 transition-all"
              >
                <benefit.icon className="w-12 h-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-light-text">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-16 sm:py-24 px-4 bg-dark-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-12 text-center"
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
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-light-text">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-16 sm:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-12 text-center"
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
                    ? 'border-indigo-500 bg-dark-900/50 scale-105 md:scale-105'
                    : 'border-gray-700 bg-dark-900/30'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-light-text mb-6">{plan.description}</p>
                <div className="text-4xl font-bold text-white mb-6">${plan.price}</div>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-lg font-semibold transition-all mb-6 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                        : 'border-2 border-indigo-500 text-indigo-300 hover:bg-indigo-500/10'
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
      <section className="w-full py-16 sm:py-24 px-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Build Something Amazing?
          </motion.h2>
          <p className="text-xl text-light-text mb-8">
            Let's discuss your project and create a custom solution that drives real results.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/40 transition-all"
            >
              Schedule a Consultation
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  )
}