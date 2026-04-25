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
      primary: 'bg-amber-400 text-black hover:bg-amber-500 dark:bg-amber-400 dark:text-black dark:hover:bg-amber-500 active:scale-95 shadow-lg hover:shadow-xl dark:hover:shadow-amber-500/30',
      secondary: 'border-2 border-amber-400 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-500/10 dark:border-amber-400',
      ghost: 'text-light-heading dark:text-white hover:text-amber-600 dark:hover:text-amber-400',
      outline: 'border-2 border-light-border dark:border-white/10 text-light-heading dark:text-white hover:border-amber-600 hover:text-amber-600 dark:hover:border-amber-400 dark:hover:text-amber-400',
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
