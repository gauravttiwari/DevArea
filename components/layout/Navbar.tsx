'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Send, Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { BRAND, NAVIGATION } from '@/lib/constants'
import { useTheme } from '@/components/providers/ThemeProvider'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Navbar Wrapper - Floating Effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
        style={{ y: 0 }}
      >
        {/* Background Filler (transparent at top, visible on scroll) */}
        <motion.div
          className={`h-20 transition-all duration-300 ${
            isScrolled ? 'lg:h-24' : 'lg:h-20'
          }`}
          animate={{
            backgroundColor: isScrolled
              ? 'rgba(255, 255, 255, 0)'
              : 'rgba(255, 255, 255, 0)',
          }}
        />
      </motion.div>

      {/* Desktop Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Container for Floating Effect */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'px-4 sm:px-6 lg:px-8 py-3 sm:py-4'
              : 'px-4 sm:px-6 lg:px-8 py-4 sm:py-6'
          }`}
        >
          {/* Navbar Inner */}
          <div
            className={`transition-all duration-300 ${
              isScrolled
                ? 'max-w-5xl mx-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full shadow-lg shadow-black/10 dark:shadow-black/40 border border-light-border dark:border-white/10'
                : 'max-w-7xl mx-auto rounded-none shadow-none border-none'
            }`}
          >
            <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 h-20">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0 group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent dark:from-yellow-400 dark:to-yellow-300 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all"
                >
                  {BRAND.name}
                </motion.div>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                {NAVIGATION.main.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-light-text dark:text-dark-text hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200 font-medium relative group text-sm lg:text-base"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-600 to-yellow-500 dark:from-yellow-400 dark:to-yellow-300 group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </div>

              {/* CTA Button & Icons */}
              <div className="hidden md:flex gap-4 items-center">
                {/* Show "Get Started" button only when not scrolled */}
                {!isScrolled && (
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-400/40 transition-all duration-200 text-sm lg:text-base"
                    >
                      Get Started
                    </motion.button>
                  </Link>
                )}

                {/* Show icon buttons only when scrolled */}
                {isScrolled && (
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Contact Icon Button */}
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2.5 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black hover:shadow-lg hover:shadow-yellow-400/40 transition-all duration-200"
                        title="Get in touch"
                      >
                        <Send size={20} />
                      </motion.button>
                    </Link>

                    {/* Theme Toggle Button */}
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={toggleTheme}
                      className="p-2.5 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-yellow-400 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-yellow-400/20 transition-all duration-200 border border-transparent dark:border-white/10"
                      title="Toggle theme"
                    >
                      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </motion.button>
                  </motion.div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-light-heading dark:text-white p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-20 left-0 right-0 z-40 md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-light-border dark:border-white/10 overflow-hidden shadow-lg shadow-black/10 dark:shadow-black/30"
      >
        <div className="px-4 py-6 space-y-4 max-w-5xl mx-auto">
          {NAVIGATION.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-light-text dark:text-dark-text hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors font-medium py-2"
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile - Get Started Button (always show in mobile menu) */}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-400/40 transition-all mt-4"
            >
              Get Started
            </motion.button>
          </Link>

          {/* Mobile - Icons (if scrolled) */}
          {isScrolled && (
            <motion.div
              className="flex items-center justify-center gap-3 pt-4 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black hover:shadow-lg transition-all duration-200"
                  title="Get in touch"
                >
                  <Send size={20} />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2.5 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-yellow-400 hover:shadow-lg dark:hover:shadow-yellow-400/20 transition-all duration-200"
                title="Toggle theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  )
}


