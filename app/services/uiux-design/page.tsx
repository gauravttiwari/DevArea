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
            <p className="text-purple-600 font-semibold uppercase tracking-widest mb-4">UI/UX Design</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-light-heading mb-6 leading-tight">
              Beautiful Design That
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Converts</span>
            </h1>
            <p className="text-xl text-light-text mb-8 max-w-2xl leading-relaxed">
              We create stunning, user-centered designs that not only look beautiful but drive engagement, satisfaction, and business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/40 transition-all"
                >
                  Get Design Consultation
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all"
                >
                  View Design Portfolio
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="w-full py-16 sm:py-24 px-4 bg-light-bg">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-light-heading mb-12 text-center"
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
                className="bg-dark-900/50 border border-purple-500/20 rounded-lg p-8 hover:border-purple-500/50 transition-all"
              >
                <item.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-light-text">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Deliverables */}
      <section className="w-full py-16 sm:py-24 px-4 bg-dark-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            What You'll Receive
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Wireframes & User Flows',
              'High-Fidelity Mockups',
              'Interactive Prototypes',
              'Design System & Components',
              'Brand Guidelines',
              'Responsive Design Specs',
              'Accessibility Audit',
              'Design Handoff Documentation',
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="flex items-center gap-4 p-4 bg-dark-950 border border-purple-500/20 rounded-lg"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-light-text font-medium">{item}</p>
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
            Design Packages
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
                    ? 'border-purple-500 bg-dark-900/50 scale-105 md:scale-105'
                    : 'border-gray-700 bg-dark-900/30'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                    Recommended
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
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10'
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
      <section className="w-full py-16 sm:py-24 px-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Let's Create Something Beautiful
          </motion.h2>
          <p className="text-xl text-light-text mb-8">
            Ready to bring your vision to life? Let's discuss your design needs and create a stunning experience.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/40 transition-all"
            >
              Start Your Design Project
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  )
}