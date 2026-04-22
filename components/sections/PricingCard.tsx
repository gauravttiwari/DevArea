import { motion } from 'framer-motion';

interface PricingCardProps {
  name: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  ctaHref?: string;
  index?: number;
}

export default function PricingCard({
  name,
  subtitle,
  price,
  originalPrice,
  description,
  features,
  isPopular = false,
  ctaText = 'Get Started',
  ctaHref = '/contact',
  index = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={isPopular ? { y: -8, scale: 1.02 } : { y: -4 }}
      className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
        isPopular
          ? 'bg-gradient-to-br from-indigo-600 to-purple-600 border-0 shadow-2xl'
          : 'bg-white/50 border border-light-border hover:border-indigo-500/50'
      }`}
    >
      {/* Most Popular Badge */}
      {isPopular && (
        <div className="absolute top-0 right-0 bg-white text-indigo-600 px-4 py-1 rounded-bl-lg font-semibold text-sm">
          Most Popular
        </div>
      )}

      <div className={`p-8 ${isPopular ? 'text-white' : ''}`}>
        {/* Header */}
        <h3 className={`text-2xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-light-heading'}`}>
          {name}
        </h3>
        <p className={`text-sm mb-6 ${isPopular ? 'text-white/80' : 'text-light-text'}`}>
          {subtitle}
        </p>

        {/* Price */}
        <div className="mb-6">
          {originalPrice && (
            <span className={`text-sm line-through mr-2 ${isPopular ? 'text-white/60' : 'text-light-text'}`}>
              {originalPrice}
            </span>
          )}
          <span className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-light-heading'}`}>
            {price}
          </span>
          <span className={`text-sm ${isPopular ? 'text-white/80' : 'text-light-text'}`}>
            /month
          </span>
        </div>

        {/* Description */}
        <p className={`text-sm mb-6 pb-6 border-b ${isPopular ? 'border-white/20 text-white/80' : 'border-light-border text-light-text'}`}>
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <svg
                className={`w-5 h-5 flex-shrink-0 ${isPopular ? 'text-white' : 'text-indigo-600'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className={`text-sm ${isPopular ? 'text-white/90' : 'text-light-text'}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href={ctaHref}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full block text-center py-3 px-4 font-bold rounded-lg transition-all duration-300 ${
            isPopular
              ? 'bg-white text-indigo-600 hover:bg-white/90'
              : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg'
          }`}
        >
          {ctaText}
        </motion.a>
      </div>
    </motion.div>
  );
}
