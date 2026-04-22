'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Calendar } from 'lucide-react'

export default function ThankYou() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CheckCircle className="w-24 h-24 mx-auto text-green-400 mb-6" />
          </motion.div>

          <h1 className="text-5xl font-bold text-light-heading mb-4">Thank You!</h1>
          <p className="text-2xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Your message has been received
          </p>

          <p className="text-light-text text-lg mb-8 leading-relaxed">
            We appreciate you reaching out. Our team will review your inquiry and get back to you as soon as possible. Typically, we respond within 24 business hours.
          </p>

          <div className="bg-white/50 border border-indigo-300 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <p className="text-light-heading font-semibold mb-1">What Happens Next?</p>
                <ul className="text-light-text space-y-2 text-sm">
                  <li>• We'll review your requirements</li>
                  <li>• You'll receive a confirmation email shortly</li>
                  <li>• Our team will contact you to discuss your project</li>
                  <li>• We'll prepare a custom proposal for you</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2"
              >
                Back to Home <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-indigo-500 text-indigo-300 rounded-lg font-semibold hover:bg-indigo-500/10 transition-all"
              >
                Read Our Blog
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}