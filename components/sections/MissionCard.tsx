import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface MissionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function MissionCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: MissionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="p-8 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 border border-indigo-500/20 rounded-xl hover:border-indigo-500/50 transition-all duration-300 text-center"
    >
      <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-light-heading mb-4">{title}</h3>
      <p className="text-light-text leading-relaxed">{description}</p>
    </motion.div>
  );
}
