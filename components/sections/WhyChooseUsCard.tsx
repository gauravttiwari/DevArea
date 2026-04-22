import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface WhyChooseUsCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function WhyChooseUsCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: WhyChooseUsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-8 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 border border-indigo-500/20 rounded-xl hover:border-indigo-500/50 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-bold text-light-heading mb-2">{title}</h3>
      <p className="text-light-text leading-relaxed">{description}</p>
    </motion.div>
  );
}
