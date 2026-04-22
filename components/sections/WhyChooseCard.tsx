import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface WhyChooseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function WhyChooseCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: WhyChooseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex gap-4 p-6 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 border border-indigo-500/20 rounded-lg hover:border-indigo-500/50 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-light-heading mb-2">{title}</h3>
        <p className="text-light-text text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
