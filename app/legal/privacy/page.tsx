'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/constants'

export default function Privacy() {
  return (
    <main className="flex flex-col w-full">
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-light-heading mb-4">Privacy Policy</h1>
            <p className="text-light-text">Last updated: {new Date().toLocaleDateString()}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12 prose max-w-none space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold text-light-heading mb-4">Introduction</h2>
              <p className="text-light-text leading-relaxed">
                {BRAND.name} ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-light-heading mb-4">Information We Collect</h2>
              <p className="text-light-text leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              <ul className="text-light-text space-y-2 ml-4">
                <li>• Personal Data: Name, email address, phone number, company information</li>
                <li>• Financial Data: Financial information necessary to process your transactions</li>
                <li>• Data From Social Networks: Social media handle, profile picture, public posts</li>
                <li>• Device Data: Browser information, IP address, operating system</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-light-heading mb-4">Use of Your Information</h2>
              <p className="text-light-text leading-relaxed mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul className="text-light-text space-y-2 ml-4">
                <li>• Generate a personal profile about you</li>
                <li>• Increase the efficiency and operation of the Site</li>
                <li>• Monitor and analyze usage and trends to improve your experience</li>
                <li>• Notify you of updates to the Site</li>
                <li>• Perform other business activities as necessary</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-light-heading mb-4">Disclosure of Your Information</h2>
              <p className="text-light-text leading-relaxed">
                We may share information we have collected about you in certain situations:
              </p>
              <ul className="text-light-text space-y-2 ml-4 mt-4">
                <li>• By Law or to Protect Rights</li>
                <li>• Third-Party Service Providers</li>
                <li>• Marketing Communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-light-heading mb-4">Security of Your Information</h2>
              <p className="text-light-text leading-relaxed">
                We use administrative, technical, and physical security measures to protect your personal information. However, perfect security does not exist on the Internet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-light-heading mb-4">Contact Us</h2>
              <p className="text-light-text leading-relaxed">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <p className="text-light-text mt-4">
                {BRAND.name}<br />
                {BRAND.email}<br />
                {BRAND.phone}
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </main>
  )
}