'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils/cn'

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  readTime: number
  category: string
  image?: string
  href: string
  index?: number
}

export const BlogCard = ({
  title,
  excerpt,
  date,
  readTime,
  category,
  image,
  href,
  index = 0,
}: BlogCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Link href={href}>
      <Card hover className="h-full overflow-hidden group cursor-pointer">
        {image && (
          <div className="h-48 overflow-hidden bg-dark-100 relative">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-brand-600 bg-brand-100 px-2 py-1 rounded">
              {category}
            </span>
            <span className="text-xs text-dark-500 flex items-center gap-1">
              <Clock size={14} /> {readTime} min
            </span>
          </div>

          <h3 className="font-bold text-lg text-dark-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
            {title}
          </h3>

          <p className="text-dark-600 text-sm mb-4 line-clamp-2">{excerpt}</p>

          <div className="flex items-center justify-between pt-4 border-t border-dark-100">
            <span className="text-xs text-dark-500 flex items-center gap-1">
              <Calendar size={14} /> {formatDate(date)}
            </span>
            <ArrowRight size={18} className="text-brand-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  </motion.div>
)

interface CTABannerProps {
  headline: string
  description?: string
  ctaText?: string
  ctaHref?: string
  background?: 'dark' | 'gradient'
}

export const CTABanner = ({
  headline,
  description,
  ctaText = 'Get Started',
  ctaHref = '/contact',
  background = 'gradient',
}: CTABannerProps) => {
  const bgClass = background === 'dark' ? 'bg-dark-900' : 'bg-gradient-to-r from-brand-600 to-brand-700'

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${bgClass} text-white py-12 sm:py-16 lg:py-20 rounded-2xl`}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{headline}</h2>
        {description && <p className="text-lg text-brand-100 mb-8">{description}</p>}
        <Link href={ctaHref}>
          <button className="bg-white text-brand-600 font-bold px-8 py-4 rounded-lg hover:bg-brand-50 transition-colors inline-flex items-center gap-2">
            {ctaText}
            <ArrowRight size={20} />
          </button>
        </Link>
      </div>
    </motion.section>
  )
}
