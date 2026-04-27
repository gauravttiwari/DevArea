'use client'

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react'

type Theme = 'light' | 'dark'

const normalizeTheme = (raw: string | null): Theme | null => {
  if (!raw) return null

  // Handle accidentally JSON-stringified values like '"dark"'.
  let parsed = raw
  if (raw.startsWith('"') || raw.startsWith("'")) {
    try {
      parsed = JSON.parse(raw)
    } catch {
      parsed = raw
    }
  }

  return parsed === 'dark' || parsed === 'light' ? parsed : null
}

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = normalizeTheme(localStorage.getItem('theme'))
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')

    // Apply to DOM immediately
    const root = document.documentElement
    if (initialTheme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    
    setTheme(initialTheme)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      const root = document.documentElement
      
      if (newTheme === 'dark') {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
      
      localStorage.setItem('theme', newTheme)
      return newTheme
    })
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  return context
}
