'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl font-bold bg-gradient-to-r from-[#fbbf24] to-[#dc2626] bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-4xl font-bold text-light-heading mb-4">Page Not Found</h2>
          <p className="text-xl text-light-text mb-8 max-w-2xl mx-auto">
            Sorry, the page you're looking for doesn't exist. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#b91c1c]/40 transition-all flex items-center justify-center gap-2"
              >
                Back to Home <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[#f59e0b] text-amber-300 rounded-lg font-semibold hover:bg-amber-500/10 transition-all"
              >
                Contact Support
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

