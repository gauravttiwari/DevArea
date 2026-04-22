'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container, Badge, SectionHeading, SectionSubheading } from '@/components/ui'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  badge?: string
  headline: string
  subheadline: string
  description?: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  background?: 'light' | 'dark' | 'gradient'
}

export const Hero = ({
  badge,
  headline,
  subheadline,
  description,
  ctaText = 'Get Started',
  ctaHref = '/contact',
  secondaryCtaText = 'Learn More',
  secondaryCtaHref = '#more',
  background = 'light',
}: HeroProps) => {
  const bgClasses = {
    light: 'bg-white',
    dark: 'bg-dark-900 text-white',
    gradient: 'bg-gradient-to-br from-brand-50 to-white',
  }

  return (
    <section className={`${bgClasses[background]} py-16 sm:py-20 lg:py-28 min-h-screen flex items-center`}>
      <Container className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-6"
            >
              <Badge className={background === 'dark' ? 'bg-brand-900 text-brand-300' : ''}>
                {badge}
              </Badge>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 ${
              background === 'dark' ? 'text-white' : 'text-dark-900'
            }`}
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`text-lg sm:text-xl lg:text-2xl font-medium mb-6 ${
              background === 'dark' ? 'text-brand-200' : 'text-brand-600'
            }`}
          >
            {subheadline}
          </motion.p>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`text-base sm:text-lg mb-8 max-w-2xl mx-auto ${
                background === 'dark' ? 'text-dark-300' : 'text-dark-600'
              }`}
            >
              {description}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href={ctaHref}>
              <Button size="lg" className="w-full sm:w-auto group">
                {ctaText}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            {secondaryCtaText && (
              <Link href={secondaryCtaHref}>
                <Button
                  size="lg"
                  variant="outline"
                  className={`w-full sm:w-auto ${background === 'dark' ? 'border-dark-600 text-dark-200 hover:text-brand-300' : ''}`}
                >
                  {secondaryCtaText}
                </Button>
              </Link>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
