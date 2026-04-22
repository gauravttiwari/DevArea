'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { BRAND } from '@/lib/constants'

export default function Contact() {
  return (
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
                Let's Talk
              </span>
            </h1>
            <p className="text-xl text-light-text max-w-2xl mx-auto mb-8">
              Ready to grow your business? Get in touch with our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-light-heading mb-8">Get in Touch</h2>
              </div>

              {[
                { icon: Mail, label: 'Email', value: BRAND.email, href: `mailto:${BRAND.email}` },
                { icon: Phone, label: 'Phone', value: BRAND.phone, href: `tel:${BRAND.phone}` },
                { icon: MapPin, label: 'Location', value: BRAND.address, href: '#' },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl hover:border-indigo-400 transition-all"
                >
                  <contact.icon className="w-6 h-6 text-indigo-600" />
                  <div>
                    <p className="text-light-text text-sm">{contact.label}</p>
                    <p className="text-light-heading font-semibold">{contact.value}</p>
                  </div>
                </motion.a>
              ))}

              <div className="pt-8 border-t border-light-border">
                <h3 className="text-light-heading font-semibold mb-4">Response Time</h3>
                <p className="text-light-text">We typically respond within 24 hours on weekdays.</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-white to-gray-50 border border-light-border rounded-xl"
            >
              <form className="space-y-6" action="/api/contact" method="POST">
                <div>
                  <label className="block text-light-heading font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white border border-light-border rounded-lg text-light-heading placeholder-light-text focus:border-indigo-600 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-light-heading font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-light-border rounded-lg text-light-heading placeholder-light-text focus:border-indigo-600 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-light-heading font-semibold mb-2">Service</label>
                  <select
                    name="service"
                    className="w-full px-4 py-3 bg-white border border-light-border rounded-lg text-light-heading focus:border-indigo-600 focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="landing-pages">Landing Pages</option>
                    <option value="ecommerce">Ecommerce</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-light-heading font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white border border-light-border rounded-lg text-light-heading placeholder-light-text focus:border-indigo-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/40 transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}