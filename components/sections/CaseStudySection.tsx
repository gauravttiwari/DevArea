'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Result {
  label: string;
  value: string;
}

interface CaseStudySectionProps {
  title: string;
  category: string;
  challenge: string;
  solution: string;
  results: Result[];
  image: string;
  imagePosition?: 'left' | 'right';
  slug: string;
  index?: number;
}

export default function CaseStudySection({
  title,
  category,
  challenge,
  solution,
  results,
  image,
  imagePosition = 'right',
  slug,
  index = 0,
}: CaseStudySectionProps) {
  const isImageLeft = imagePosition === 'left';

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image - Left or Right */}
          {isImageLeft && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-100 to-purple-100"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          )}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isImageLeft ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Category Badge */}
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full">
              <span className="text-sm font-semibold text-indigo-600">{category}</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-bold text-light-heading font-serif">
              {title}
            </h2>

            {/* Challenge */}
            <div>
              <h3 className="text-lg font-bold text-light-heading mb-3">The Challenge</h3>
              <p className="text-light-text leading-relaxed">
                {challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-lg font-bold text-light-heading mb-3">Our Solution</h3>
              <p className="text-light-text leading-relaxed">
                {solution}
              </p>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-lg font-bold text-light-heading mb-4">Key Results</h3>
              <div className="grid grid-cols-2 gap-4">
                {results.map((result, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 bg-indigo-600/5 rounded-lg border border-indigo-600/20"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      {result.value}
                    </div>
                    <div className="text-sm text-light-text mt-1">{result.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div whileHover={{ x: 4 }}>
              <Link
                href={`/portfolio/${slug}`}
                className="inline-flex items-center gap-2 text-indigo-600 font-bold text-lg hover:text-purple-600 transition-colors group"
              >
                Read Full Case Study
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image - Right or Hidden Left */}
          {!isImageLeft && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-100 to-purple-100"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
