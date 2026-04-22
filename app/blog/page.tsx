'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarDays, User, Clock } from 'lucide-react'
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/constants'
import { formatDate } from '@/lib/utils'

export default function Blog() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Our Blog
              </span>
            </h1>
            <p className="text-xl text-light-text max-w-2xl mb-8">
              Insights on web development, digital strategy, and business growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-8 px-4 bg-white/50 border-b border-light-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-semibold"
              >
                All Posts
              </motion.button>
            </Link>
            {BLOG_CATEGORIES.map((category) => (
              <Link key={category.id} href={`/blog?category=${category.slug}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 border-2 border-indigo-300 text-indigo-600 rounded-full text-sm font-semibold hover:border-indigo-500 transition-all"
                >
                  {category.name}
                </motion.button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-light-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="group h-full bg-gradient-to-br from-white to-gray-50 border border-light-border rounded-xl overflow-hidden hover:border-indigo-400 transition-all hover:shadow-xl hover:shadow-indigo-200 cursor-pointer flex flex-col">
                    {/* Featured Image */}
                    <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="text-sm text-indigo-400 font-semibold mb-2 uppercase tracking-wider">
                        {post.category}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-light-text text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto pt-4 border-t border-light-border flex items-center justify-between text-xs text-light-text">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {post.readTime} min read
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-light-text text-xs mt-3">
                        <CalendarDays className="w-4 h-4" />
                        {formatDate(post.publishedAt)}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}