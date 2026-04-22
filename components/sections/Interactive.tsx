'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export const FAQAccordion = ({ items }: FAQAccordionProps) => {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <Card hover className="overflow-hidden">
            <button
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-brand-50 transition-colors"
            >
              <h3 className="font-semibold text-dark-900 text-lg">{item.question}</h3>
              <motion.div
                animate={{ rotate: openId === item.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown
                  size={24}
                  className={openId === item.id ? 'text-brand-600' : 'text-dark-400'}
                />
              </motion.div>
            </button>

            <AnimatePresence>
              {openId === item.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0 border-t border-dark-100">
                    <p className="text-dark-700 leading-relaxed">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

interface ProcessTimelineProps {
  steps: Array<{
    step: number
    title: string
    description: string
    details: string[]
  }>
}

export const ProcessTimeline = ({ steps }: ProcessTimelineProps) => (
  <div className="space-y-8">
    {steps.map((step, index) => (
      <motion.div
        key={step.step}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-12 gap-8 items-start"
      >
        {/* Step Number */}
        <div className="md:col-span-2">
          <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-700 font-bold text-2xl flex items-center justify-center sticky top-24">
            {step.step}
          </div>
        </div>

        {/* Content */}
        <Card hover className="md:col-span-10">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold text-dark-900 mb-3">{step.title}</h3>
            <p className="text-dark-600 mb-4">{step.description}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {step.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-brand-600 font-bold mt-1">✓</span>
                  <span className="text-dark-700">{detail}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
)
