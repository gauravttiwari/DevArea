'use client'

import { motion } from 'framer-motion'
import { BRAND } from '@/lib/constants'

export default function Disclaimer() {
  return (
    <main className="w-full">
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-light-heading mb-4">Disclaimer</h1>
            <p className="text-light-text">Last updated: {new Date().toLocaleDateString()}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12 space-y-8 text-light-text"
          >
            <section>
              <h2 className="text-2xl font-bold text-light-heading mb-4">General Disclaimer</h2>
              <p className="leading-relaxed">
                The information provided by {BRAND.name} ("we," "us," or "our") on our website is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-light-heading mb-4">External Links Disclaimer</h2>
              <p className="leading-relaxed">
                Our Site may contain links to external websites. We are not responsible for the content, accuracy, or practices of external websites. Your use of external websites is at your own risk and subject to their terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-light-heading mb-4">Professional Advice</h2>
              <p className="leading-relaxed">
                The information provided on this Site is not a substitute for professional advice. While we strive to provide accurate information, we recommend consulting with qualified professionals for specific guidance related to your business needs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-light-heading mb-4">Limitation of Liability</h2>
              <p className="leading-relaxed">
                In no event shall {BRAND.name}, nor any of its officers, directors and employees, shall be held liable to you for anything arising out of or in any way connected with your use of this Website whether such liability is under contract, tort or otherwise, and such liability shall not exceed the total amount paid by you to us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Disclaimer</h2>
              <p className="leading-relaxed">
                We reserve the right to modify this disclaimer at any time. Your continued use of the Site following any changes constitutes your acceptance of the new disclaimer.
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </main>
  )
}