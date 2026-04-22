'use client'

import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'

export const Container = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)} {...props} />
)

export const Section = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <section className={cn('py-12 sm:py-16 lg:py-20', className)} {...props} />
)

export const Badge = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(
      'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-100 text-brand-700',
      className
    )}
    {...props}
  />
)

export const SectionHeading = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className={cn('text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900', className)} {...props} />
)

export const SectionSubheading = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn('text-lg sm:text-xl text-dark-600 mt-4 max-w-2xl', className)} {...props} />
)
