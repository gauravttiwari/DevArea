import { motion } from 'framer-motion';

interface HighlightCardProps {
  title: string;
  description: string;
  index?: number;
}

export default function HighlightCard({
  title,
  description,
  index = 0,
}: HighlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-4 text-center"
    >
      <h3 className="text-lg font-bold text-light-heading mb-2">{title}</h3>
      <p className="text-sm text-light-text leading-relaxed">{description}</p>
    </motion.div>
  );
}
