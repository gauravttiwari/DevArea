'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import * as Icons from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href?: string
  features?: string[]
  index?: number
}

export const ServiceCard = ({ title, description, icon, href, features, index = 0 }: ServiceCardProps) => {
  const Icon = (Icons as any)[icon] || Icons.Zap

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card hover className="h-full">
        <CardHeader>
          <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-200 transition-colors">
            <Icon className="text-brand-600" size={24} />
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {features && (
          <CardContent>
            <ul className="space-y-2">
              {features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-dark-600">
                  <span className="text-brand-600 font-bold">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        )}
      </Card>
    </motion.div>
  )

  if (href) {
    return <Link href={href} className="group">{content}</Link>
  }

  return content
}

interface TestimonialProps {
  name: string
  role: string
  content: string
  rating?: number
  image?: string
  index?: number
}

export const TestimonialCard = ({ name, role, content, rating = 5, image, index = 0 }: TestimonialProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Card hover>
      <CardContent className="pt-6">
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="text-brand-500">
                ★
              </span>
            ))}
        </div>

        {/* Quote */}
        <p className="text-dark-700 mb-6 leading-relaxed italic">"{content}"</p>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-dark-100">
          {image && (
            <img
              src={image}
              alt={name}
              className="w-10 h-10 rounded-full object-cover"
            />
          )}
          <div>
            <p className="font-semibold text-dark-900">{name}</p>
            <p className="text-sm text-dark-600">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
)
