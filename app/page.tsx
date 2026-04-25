'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, Star, TrendingUp, Zap, Shield, Code2, Palette, MessageCircle } from 'lucide-react'
import { BRAND, SERVICES, TESTIMONIALS, CASE_STUDIES, FAQ, PRICING, BLOG_POSTS } from '@/lib/constants'
import { generateOrganizationSchema, generateFAQSchema } from '@/lib/schema'

export default function Home() {
  const orgSchema = generateOrganizationSchema()
  const faqSchema = generateFAQSchema(FAQ.slice(0, 4).map(f => ({ question: f.question, answer: f.answer })))

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="flex flex-col w-full bg-light-bg">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pb-20 px-4 bg-light-bg dark:bg-dark-bg">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob" />
            <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000" />
          </div>

          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700/50 rounded-full">
                  <Star className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  <span className="text-sm text-yellow-700 dark:text-yellow-300 font-medium">Award-winning digital agency</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-light-text dark:text-white">
                  Build 
                  <span className="bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent"> Websites </span>
                  That Convert
                </h1>

                <p className="text-lg sm:text-xl text-light-text-secondary dark:text-dark-text-secondary mb-8 max-w-2xl leading-relaxed">
                  We design and develop premium websites, landing pages, and ecommerce stores that drive measurable growth. With strategic design, technical SEO, and AI integration, we help businesses dominate their markets.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-400/40 transition-all flex items-center gap-2"
                    >
                      Start Your Project <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  <Link href="/portfolio">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 border-2 border-yellow-400/50 dark:border-yellow-600/50 text-light-accent dark:text-yellow-400 rounded-lg font-semibold hover:bg-yellow-50 dark:hover:bg-yellow-500/10 transition-all"
                    >
                      View Our Work
                    </motion.button>
                  </Link>
                </div>

                <div className="flex gap-6 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span>50+ Successful Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span>Fast Turnaround</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Visual */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-96 lg:h-full min-h-96"
              >
                <div className="absolute inset-0 rounded-2xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/premium-solutions.png"
                    alt="Premium Digital Solutions - Laptop and Phone Mockup"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-light-bg dark:bg-dark-bg">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-light-text dark:text-white mb-4">
                Our Services
              </h2>
              <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl">
                End-to-end digital solutions designed to help businesses grow online
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Web Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Link href="/services#web-development">
                  <div className="group h-full p-8 bg-white dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative">
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 opacity-5 rounded-full group-hover:opacity-10 transition-opacity" />
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Code2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-light-text dark:text-white mb-3">Web Development</h3>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4 leading-relaxed">Custom websites built with modern technology, responsive design, and conversion optimization</p>
                    <div className="flex items-center text-orange-600 dark:text-orange-400 font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* UI/UX Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Link href="/services#uiux-design">
                  <div className="group h-full p-8 bg-white dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative">
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 opacity-5 rounded-full group-hover:opacity-10 transition-opacity" />
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-light-text dark:text-white mb-3">UI/UX Design</h3>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4 leading-relaxed">Beautiful, user-centered interfaces that improve engagement and drive conversions</p>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Landing Pages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Link href="/services#landing-pages">
                  <div className="group h-full p-8 bg-white dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative">
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 opacity-5 rounded-full group-hover:opacity-10 transition-opacity" />
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-light-text dark:text-white mb-3">Landing Pages</h3>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4 leading-relaxed">High-converting landing pages designed to capture leads and drive specific actions</p>
                    <div className="flex items-center text-green-600 dark:text-green-400 font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* AI Chatbot */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Link href="/services#ai-chatbot">
                  <div className="group h-full p-8 bg-white dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative">
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-pink-500 to-rose-600 opacity-5 rounded-full group-hover:opacity-10 transition-opacity" />
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-light-text dark:text-white mb-3">AI Chatbot</h3>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4 leading-relaxed">Smart AI-powered chatbots for 24/7 customer support and lead qualification</p>
                    <div className="flex items-center text-pink-600 dark:text-pink-400 font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 sm:mb-20 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                  Why Choose DevArea
                </span>
              </h2>
              <p className="text-xl text-light-text max-w-2xl mx-auto">
                We combine strategy, design, and technology to deliver results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: TrendingUp, title: 'Results-Driven', description: 'Every project is optimized for conversions and measurable growth' },
                { icon: Shield, title: 'Premium Quality', description: 'Production-ready code, modern design, and best practices' },
                { icon: Zap, title: 'Fast & Responsive', description: 'Blazing-fast websites optimized for mobile and desktop' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 border border-indigo-500/30 rounded-xl"
                >
                  <item.icon className="w-12 h-12 text-indigo-400 mb-4" />
                  <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">{item.title}</h3>
                  <p className="text-light-text">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-dark-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 sm:mb-20 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Loved by Clients
                </span>
              </h2>
              <p className="text-xl text-light-text max-w-2xl mx-auto">
                Hear from businesses we've helped grow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-dark-800 to-dark-900 border border-white/10 rounded-xl"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-light-text mb-6 leading-relaxed">{testimonial.content}</p>
                  <div className="pt-6 border-t border-white/10">
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-light-text text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 sm:mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Featured Work
                </span>
              </h2>
              <p className="text-xl text-light-text">
                Projects that showcase our expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CASE_STUDIES.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-indigo-600/20 to-purple-600/20 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent" />
                  </div>
                  <div className="p-6 bg-dark-900">
                    <div className="text-sm text-indigo-400 mb-2 font-semibold">{study.category}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                    <ul className="space-y-1 text-sm text-light-text">
                      {study.results.slice(0, 2).map((result, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-indigo-500 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500/10 transition-all inline-flex items-center gap-2"
                >
                  View All Case Studies <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border-y border-indigo-500/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Ready to grow your business?
            </h2>
            <p className="text-xl text-light-text mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a strategy that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2"
                >
                  Schedule a Consultation <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-indigo-500 text-indigo-300 rounded-lg font-semibold hover:bg-indigo-500/10 transition-all"
                >
                  View Pricing
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
