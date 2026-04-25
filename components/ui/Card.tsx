'use client'

import { cn } from '@/lib/utils/cn'
import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export const Card = ({ className, hover = false, ...props }: CardProps) => (
  <div
    className={cn(
      'bg-light-card dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border overflow-hidden',
      hover && 'transition-all duration-300 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-yellow-500/10 hover:border-yellow-300 dark:hover:border-yellow-500/50',
      className
    )}
    {...props}
  />
)

export const CardContent = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6', className)} {...props} />
)

export const CardHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6 border-b border-light-border dark:border-white/10', className)} {...props} />
)

export const CardTitle = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn('text-xl font-bold text-light-heading dark:text-white', className)} {...props} />
)

export const CardDescription = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn('text-light-text mt-2', className)} {...props} />
)
