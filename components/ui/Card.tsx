'use client'

import { cn } from '@/lib/utils/cn'
import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export const Card = ({ className, hover = false, ...props }: CardProps) => (
  <div
    className={cn(
      'bg-white rounded-lg border border-light-border overflow-hidden',
      hover && 'transition-all duration-300 hover:shadow-lg hover:border-indigo-300',
      className
    )}
    {...props}
  />
)

export const CardContent = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6', className)} {...props} />
)

export const CardHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6 border-b border-light-border', className)} {...props} />
)

export const CardTitle = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn('text-xl font-bold text-light-heading', className)} {...props} />
)

export const CardDescription = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn('text-light-text mt-2', className)} {...props} />
)
