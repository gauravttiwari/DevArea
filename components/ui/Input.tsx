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
        'w-full px-4 py-3 border border-light-border rounded-lg font-medium transition-all duration-300 text-light-heading',
        'placeholder:text-light-text',
        'focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200',
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
        'w-full px-4 py-3 border border-light-border rounded-lg font-medium transition-all duration-300 resize-vertical min-h-32 text-light-heading',
        'placeholder:text-light-text',
        'focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200',
        className
      )}
      {...props}
    />
  )
)

Textarea.displayName = 'Textarea'
