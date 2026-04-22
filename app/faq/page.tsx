'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FAQ } from '@/lib/constants'
import { generateFAQSchema } from '@/lib/schema'

export default function FAQPage() {
  const faqSchema = generateFAQSchema(FAQ.map(f => ({ question: f.question, answer: f.answer })))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
                  Frequently Asked Questions
                </span>
              </h1>
              <p className="text-xl text-light-text max-w-2xl mx-auto mb-8">
                Find answers to common questions about our services and process
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Items */}
        <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-white/50">
          <div className="max-w-3xl mx-auto space-y-6">
            {FAQ.map((faq, index) => (
              <motion.details
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-6 bg-gradient-to-br from-white to-gray-50 border border-light-border rounded-xl hover:border-indigo-400 transition-all cursor-pointer"
              >
                <summary className="flex items-center justify-between text-lg font-bold text-light-heading marker:content-none">
                  <span>{faq.question}</span>
                  <span className="text-2xl text-indigo-600 group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-light-text leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-light-bg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-light-heading">Still have questions?</h2>
            <p className="text-xl text-light-text mb-8">Our team is here to help. Get in touch for a personalized consultation.</p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/40 transition-all inline-flex items-center gap-2"
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}