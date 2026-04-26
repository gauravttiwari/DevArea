'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ShoppingCart, TrendingUp, Package } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { generateServiceSchema } from '@/lib/schema'

const service = SERVICES.find(s => s.id === 'ecommerce')

export default function Ecommerce() {
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
            <p className="text-orange-600 dark:text-orange-400 font-semibold uppercase tracking-widest mb-4">Ecommerce</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-light-text dark:text-dark-text mb-6 leading-tight">
              Powerful
              <span className="bg-gradient-to-r from-orange-600 dark:from-orange-400 to-red-600 dark:to-red-400 bg-clip-text text-transparent"> Ecommerce Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-light-text dark:text-dark-text mb-8 max-w-2xl leading-relaxed opacity-90">
              Full-featured online stores that sell. From product catalogs to payment processing, inventory management, and fulfillment integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/40 transition-all"
                >
                  Start Your Store
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 rounded-lg font-semibold hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-all"
                >
                  View Stores
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
            Ecommerce Features
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: ShoppingCart,
                title: 'Seamless Shopping',
                description: 'Intuitive product browsing, filtering, and one-click checkout with multiple payment options.'
              },
              {
                icon: Package,
                title: 'Inventory Management',
                description: 'Real-time stock tracking, automated reordering, and multi-warehouse support.'
              },
              {
                icon: TrendingUp,
                title: 'Sales Analytics',
                description: 'Detailed reports on sales, customer behavior, popular products, and conversion metrics.'
              },
              {
                icon: Check,
                title: 'Integrations',
                description: 'Connect with payment gateways, shipping providers, CRM, and accounting software.'
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
                <benefit.icon className="w-12 h-12 text-orange-600 dark:text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-2">{benefit.title}</h3>
                <p className="text-light-text dark:text-dark-text opacity-75">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-24 px-4 bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-900 dark:to-red-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Launch Your Online Store?</h2>
            <p className="text-xl text-white/90 mb-8">Let's build a store that generates revenue</p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-orange-600 dark:text-orange-400 rounded-lg font-semibold hover:shadow-lg transition-all"
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
