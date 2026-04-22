import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  index?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <Link href={href}>
        <div className="p-8 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 border border-indigo-500/20 rounded-xl hover:border-indigo-500/50 transition-all duration-300 cursor-pointer group">
          <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-bold text-light-heading mb-2">{title}</h3>
          <p className="text-light-text leading-relaxed">{description}</p>
          <div className="flex items-center mt-4 text-indigo-600 group-hover:translate-x-2 transition-transform">
            <span className="text-sm font-semibold">Learn More</span>
            <span className="ml-2">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
