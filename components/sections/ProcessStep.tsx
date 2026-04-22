import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
  index?: number;
}

export default function ProcessStep({
  number,
  icon: Icon,
  title,
  description,
  isLast = false,
  index = 0,
}: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Connector line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-24 -right-1/2 w-1/2 h-1 bg-gradient-to-r from-indigo-600/30 to-transparent" />
      )}

      <div className="text-center">
        {/* Step Number */}
        <div className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full blur-lg opacity-30" />
          <div className="relative w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{number}</span>
          </div>
        </div>

        {/* Icon */}
        <div className="mb-4 flex justify-center">
          <Icon className="w-8 h-8 text-indigo-600" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-light-heading mb-2">{title}</h3>
        <p className="text-light-text leading-relaxed max-w-xs mx-auto">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
