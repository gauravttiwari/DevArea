import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface DetailedServiceSectionProps {
  number: string;
  title: string;
  description: string;
  benefits: string[];
  ctaText?: string;
  ctaHref?: string;
  imageLeft?: boolean;
  children?: ReactNode;
}

export default function DetailedServiceSection({
  number,
  title,
  description,
  benefits,
  ctaText = 'Start Project',
  ctaHref = '/contact',
  imageLeft = false,
  children,
}: DetailedServiceSectionProps) {
  const contentVariants = {
    hidden: { opacity: 0, x: imageLeft ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: imageLeft ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  return (
    <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={imageLeft ? 'lg:order-2' : 'lg:order-1'}
          >
            <span className="inline-block text-sm font-semibold text-indigo-600 mb-3 bg-indigo-600/10 px-4 py-1 rounded-full">
              {number}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-light-heading mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-light-text mb-8 leading-relaxed">
              {description}
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-light-text leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.a
              href={ctaHref}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              {ctaText}
            </motion.a>
          </motion.div>

          {/* Image / Visual */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={imageLeft ? 'lg:order-1' : 'lg:order-2'}
          >
            {children || (
              <div className="w-full h-96 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-xl border border-indigo-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-light-text">Visual placeholder</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
