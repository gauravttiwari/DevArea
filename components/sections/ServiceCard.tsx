import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  index?: number;
  colorClass?: string; // e.g., "from-orange-500 to-red-600"
  accentColor?: string; // e.g., "#ea580c"
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  index = 0,
  colorClass = "from-blue-500 to-blue-600",
  accentColor = "#2563eb",
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="h-full"
    >
      <Link href={href}>
        <div className="h-full p-8 bg-white dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-black/30 transition-all duration-300 cursor-pointer group overflow-hidden relative">
          {/* Background accent */}
          <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${colorClass} opacity-5 rounded-full group-hover:opacity-10 transition-opacity duration-300`} />
          
          {/* Icon container with gradient background */}
          <div className={`w-16 h-16 bg-gradient-to-br ${colorClass} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-xl font-bold text-light-text dark:text-white mb-3">{title}</h3>
          <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed mb-4">{description}</p>
          
          <div className="flex items-center mt-6 transition-transform duration-300 group-hover:translate-x-2" style={{ color: accentColor }}>
            <span className="text-sm font-semibold">Learn More</span>
            <span className="ml-2">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
