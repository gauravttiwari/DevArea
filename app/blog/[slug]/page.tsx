'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarDays, User, Clock, ArrowRight } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/constants'
import { formatDate } from '@/lib/utils'
import { generateBlogPostSchema } from '@/lib/schema'

interface BlogPostProps {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post not found</h1>
          <Link href="/blog" className="text-amber-400 hover:text-amber-300">
            Back to blog
          </Link>
        </div>
      </div>
    )
  }

  const schema = generateBlogPostSchema({
    title: post.title,
    image: post.image,
    content: post.content,
    author: post.author,
    publishedAt: post.publishedAt.toISOString(),
  })

  const relatedPosts = BLOG_POSTS.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="flex flex-col w-full">
        {/* Article Header */}
        <article className="w-full">
          {/* Hero Image */}
          <div className="w-full h-96 sm:h-[500px] bg-gradient-to-br from-amber-100 to-orange-100 border-b border-amber-300 overflow-hidden relative pt-32">
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
          </div>

          {/* Content */}
          <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
            <div className="max-w-3xl mx-auto">
              {/* Meta */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 pb-8 border-b border-light-border"
              >
                  <div className="inline-block text-sm text-amber-600 font-semibold mb-4 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
                  {post.category}
                </div>

                <h1 className="text-5xl sm:text-6xl font-bold text-light-heading mb-6">{post.title}</h1>

                <div className="flex flex-wrap gap-6 text-light-text text-sm">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-amber-600" />
                    By {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-amber-600" />
                    {formatDate(post.publishedAt)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    {post.readTime} min read
                  </div>
                </div>
              </motion.div>

              {/* Article Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="prose prose-invert max-w-none"
              >
                <div className="text-light-text leading-relaxed whitespace-pre-wrap">
                  {post.content}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-12 p-8 bg-gradient-to-r from-amber-600/10 to-orange-600/10 border border-amber-500/30 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-white mb-3">Ready to transform your business?</h3>
                <p className="text-light-text mb-6">Let's discuss how DevArea can help you build a website that drives results.</p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/40 transition-all inline-flex items-center gap-2"
                  >
                    Get Started <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </section>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-dark-900/50 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-12">Related Articles</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <div className="group bg-gradient-to-br from-dark-800 to-dark-900 border border-white/10 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all hover:shadow-xl hover:shadow-amber-500/10 cursor-pointer">
                        <div className="aspect-video bg-gradient-to-br from-amber-600/20 to-orange-600/20 overflow-hidden relative">
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent" />
                        </div>

                        <div className="p-6">
                          <div className="text-sm text-amber-400 font-semibold mb-2 uppercase tracking-wider">
                            {relatedPost.category}
                          </div>

                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                            {relatedPost.title}
                          </h3>

                          <p className="text-light-text text-sm line-clamp-2 mb-4">
                            {relatedPost.excerpt}
                          </p>

                          <div className="flex items-center text-amber-400 font-semibold text-sm">
                            Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link href="/blog">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border-2 border-amber-500 text-amber-400 rounded-lg font-semibold hover:bg-amber-500/10 transition-all inline-flex items-center gap-2"
                  >
                    View All Articles <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  )
}