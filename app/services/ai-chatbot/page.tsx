'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, MessageCircle, Zap, Clock } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { generateServiceSchema } from '@/lib/schema'

const service = SERVICES.find(s => s.id === 'ai-chatbot')

export default function AIChatbot() {
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
            <p className="text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-widest mb-4">AI Chatbot</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-light-text dark:text-dark-text mb-6 leading-tight">
              Intelligent
              <span className="bg-gradient-to-r from-cyan-600 dark:from-cyan-400 to-blue-600 dark:to-blue-400 bg-clip-text text-transparent"> AI Chatbots</span>
            </h1>
            <p className="text-lg sm:text-xl text-light-text dark:text-dark-text mb-8 max-w-2xl leading-relaxed opacity-90">
              AI-powered chatbots that engage customers 24/7, qualify leads, answer questions, and drive conversions automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/40 transition-all"
                >
                  Deploy AI Chatbot
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 rounded-lg font-semibold hover:bg-cyan-50 dark:hover:bg-cyan-950/20 transition-all"
                >
                  See Examples
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
            Chatbot Capabilities
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: MessageCircle,
                title: '24/7 Customer Support',
                description: 'Instant responses to customer queries, reducing support tickets and improving satisfaction.'
              },
              {
                icon: Zap,
                title: 'Lead Qualification',
                description: 'Automatically qualify leads, collect information, and route to sales team for follow-up.'
              },
              {
                icon: Clock,
                title: 'Smart Responses',
                description: 'Natural language processing understands context and provides relevant, personalized answers.'
              },
              {
                icon: Check,
                title: 'CRM Integration',
                description: 'Seamless integration with your CRM, email, and ticketing systems for unified customer data.'
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
                <benefit.icon className="w-12 h-12 text-cyan-600 dark:text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-2">{benefit.title}</h3>
                <p className="text-light-text dark:text-dark-text opacity-75">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-24 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-900 dark:to-blue-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready for 24/7 Customer Support?</h2>
            <p className="text-xl text-white/90 mb-8">Deploy intelligent AI chatbots today</p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-cyan-600 dark:text-cyan-400 rounded-lg font-semibold hover:shadow-lg transition-all"
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
