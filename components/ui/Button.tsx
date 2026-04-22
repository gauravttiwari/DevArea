'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2'

    const variants = {
      primary: 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 shadow-lg hover:shadow-xl',
      secondary: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50',
      ghost: 'text-light-heading hover:text-indigo-600',
      outline: 'border-2 border-light-border text-light-heading hover:border-indigo-600 hover:text-indigo-600',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-md',
      md: 'px-6 py-3 text-base rounded-lg',
      lg: 'px-8 py-4 text-lg rounded-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          disabled || isLoading ? 'opacity-50 cursor-not-allowed' : '',
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <span className="animate-spin">⏳</span>}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
