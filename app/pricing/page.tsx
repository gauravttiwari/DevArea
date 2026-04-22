'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { PRICING } from '@/lib/constants'
import { formatPrice } from '@/lib/utils'

export default function Pricing() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 pt-32">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-light-text max-w-2xl mx-auto mb-8">
              Choose the package that fits your needs. All packages include ongoing support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-xl border transition-all duration-300 flex flex-col ${
                  plan.popular
                    ? 'border-indigo-300 bg-gradient-to-br from-indigo-50 to-purple-50 ring-2 ring-indigo-200 scale-105 md:scale-100'
                    : 'border-light-border bg-gradient-to-br from-white to-gray-50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-1 rounded-full text-sm font-semibold text-white">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-light-heading mb-2">{plan.name}</h3>
                <p className="text-light-text text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  {plan.price ? (
                    <>
                      <div className="text-5xl font-bold text-light-heading">{formatPrice(plan.price)}</div>
                      <p className="text-light-text text-sm">{plan.period}</p>
                    </>
                  ) : (
                    <div className="text-2xl font-bold text-indigo-600">Custom Quote</div>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-light-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="w-full">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/40'
                        : 'border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-light-bg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-light-heading">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>

          <div className="space-y-6">
            {[
              { q: 'Can I customize the packages?', a: 'Absolutely! All packages are starting points. We customize based on your specific needs.' },
              { q: 'Do you offer payment plans?', a: 'Yes, we offer flexible payment plans for larger projects. Contact us for details.' },
              { q: 'What\'s included in support?', a: 'Support includes bug fixes, minor updates, and performance optimization.' },
              { q: 'Can I upgrade later?', a: 'Yes, you can upgrade your package at any time. We\'ll adjust pricing accordingly.' },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl"
              >
                <h3 className="text-lg font-bold text-light-heading mb-3">{faq.q}</h3>
                <p className="text-light-text">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-gradient-to-r from-indigo-50 to-purple-50 border-y border-indigo-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-light-heading">Ready to start?</h2>
          <p className="text-xl text-light-text mb-8">Let's discuss your project and find the perfect package for your needs.</p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/40 transition-all inline-flex items-center gap-2"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  )
}