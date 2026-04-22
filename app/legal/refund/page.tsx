'use client'

import { motion } from 'framer-motion'

export default function Refund() {
  return (
    <main className="w-full">
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-light-heading mb-4">Refund Policy</h1>
            <p className="text-light-text">Last updated: {new Date().toLocaleDateString()}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12 space-y-8 text-light-text"
          >
            <section>
              <h2 className="text-2xl font-bold text-light-heading mb-4">Refund Policy</h2>
              <p className="leading-relaxed mb-4">
                We stand behind our work. If you're not satisfied with our deliverables, we offer a satisfaction guarantee.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-light-heading mb-4">Satisfaction Guarantee</h2>
              <ul className="space-y-3 ml-4">
                <li>• <strong>30-Day Money Back Guarantee:</strong> If you're not satisfied with your project within 30 days, we'll make revisions at no additional cost.</li>
                <li>• <strong>Unlimited Revisions:</strong> During the development phase, we offer unlimited revision rounds to ensure your satisfaction.</li>
                <li>• <strong>Non-Refundable Deposits:</strong> Project deposits are non-refundable but applied toward your project costs.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-light-heading mb-4">Exceptions</h2>
              <p className="leading-relaxed mb-4">
                Refunds are not available for:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Cancelled projects after work has begun</li>
                <li>• Delays caused by client-provided content or feedback</li>
                <li>• Projects completed according to original specifications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How to Request a Refund</h2>
              <p className="leading-relaxed">
                Contact us with details about your request, and we'll respond within 5 business days.
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </main>
  )
}