'use client'

import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        'w-full px-4 py-3 border border-light-border dark:border-white/10 rounded-lg font-medium transition-all duration-300 text-light-heading dark:text-white bg-white dark:bg-slate-900',
        'placeholder:text-light-text dark:placeholder:text-slate-400',
        'focus:outline-none focus:border-amber-600 dark:focus:border-amber-500 focus:ring-2 focus:ring-amber-200 dark:focus:ring-amber-500/30',
        className
      )}
      {...props}
    />
  )
)

Input.displayName = 'Input'

export default Input

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        'w-full px-4 py-3 border border-light-border dark:border-white/10 rounded-lg font-medium transition-all duration-300 resize-vertical min-h-32 text-light-heading dark:text-white bg-white dark:bg-slate-900',
        'placeholder:text-light-text dark:placeholder:text-slate-400',
        'focus:outline-none focus:border-amber-600 dark:focus:border-amber-500 focus:ring-2 focus:ring-amber-200 dark:focus:ring-amber-500/30',
        className
      )}
      {...props}
    />
  )
)

Textarea.displayName = 'Textarea'
