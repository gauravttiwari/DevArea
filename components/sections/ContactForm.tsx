'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Input, { Textarea } from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false)
      e.currentTarget.reset()
    }, 3000)
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          disabled={isSubmitting}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          disabled={isSubmitting}
        />
      </div>

      <Input
        type="text"
        name="company"
        placeholder="Company Name"
        disabled={isSubmitting}
      />

      <Input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        disabled={isSubmitting}
      />

      <Textarea
        name="message"
        placeholder="Tell us about your project..."
        required
        disabled={isSubmitting}
      />

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </motion.div>

      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="p-4 bg-green-50 border border-green-300 rounded-lg text-green-700 text-center font-medium"
        >
          ✓ Message sent successfully! We'll get back to you soon.
        </motion.div>
      )}
    </motion.form>
  )
}
