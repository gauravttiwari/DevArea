import { motion } from 'framer-motion';

interface StatCardProps {
  number: string;
  label: string;
  index?: number;
}

export default function StatsCard({ number, label, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center p-8 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 border border-indigo-500/20 rounded-xl"
    >
      <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
        {number}
      </div>
      <p className="text-light-text font-semibold text-lg">{label}</p>
    </motion.div>
  );
}
