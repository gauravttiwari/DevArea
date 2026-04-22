'use client'

import { motion } from 'framer-motion'

export default function Cookies() {
  return (
    <main className="w-full">
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-light-heading mb-4">Cookie Policy</h1>
            <p className="text-light-text">Last updated: {new Date().toLocaleDateString()}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12 space-y-8 text-light-text"
          >
            <section>
              <h2 className="text-2xl font-bold text-light-heading mb-4">What Are Cookies?</h2>
              <p className="leading-relaxed">
                Cookies are small text files placed on your device when you visit our website. They help us recognize you and understand your preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-light-heading mb-4">How We Use Cookies</h2>
              <ul className="space-y-3 ml-4">
                <li>• <strong>Essential Cookies:</strong> Required for website functionality</li>
                <li>• <strong>Analytics Cookies:</strong> Help us understand how you use our site</li>
                <li>• <strong>Preference Cookies:</strong> Remember your choices</li>
                <li>• <strong>Marketing Cookies:</strong> Track your interaction with our content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-light-heading mb-4">Managing Cookies</h2>
              <p className="leading-relaxed">
                You can control cookie settings through your browser. Most browsers allow you to refuse cookies or alert you when cookies are being sent. However, disabling cookies may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-light-heading mb-4">Third-Party Cookies</h2>
              <p className="leading-relaxed">
                We may use third-party services that place cookies on your device. These include analytics services and advertising partners.
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </main>
  )
}