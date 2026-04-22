'use client'

import { motion } from 'framer-motion'
import { BRAND } from '@/lib/constants'

export default function Terms() {
  return (
    <main className="w-full">
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-light-heading mb-4">Terms & Conditions</h1>
            <p className="text-light-text">Last updated: {new Date().toLocaleDateString()}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12 space-y-8 text-light-text"
          >
            <section>
              <h2 className="text-2xl font-bold text-light-heading mb-4">1. Agreement to Terms</h2>
              <p className="leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-light-heading mb-4">2. Use License</h2>
              <p className="leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on {BRAND.name}'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Modifying or copying the materials</li>
                <li>• Using the materials for any commercial purpose or for any public display</li>
                <li>• Attempting to reverse engineer any software contained on the website</li>
                <li>• Removing any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-light-heading mb-4">3. Disclaimer</h2>
              <p className="leading-relaxed">
                The materials on {BRAND.name}'s website are provided on an 'as is' basis. {BRAND.name} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
              <p className="leading-relaxed">
                In no event shall {BRAND.name} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Information</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at {BRAND.email}.
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </main>
  )
}