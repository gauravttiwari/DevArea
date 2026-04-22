'use client';

import { motion } from 'framer-motion';

interface FilterTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function FilterTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: FilterTabsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-wrap gap-3 justify-center items-center mb-16"
    >
      {categories.map((category, index) => (
        <motion.button
          key={category}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeCategory === category
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
              : 'bg-light-border text-light-text hover:bg-indigo-600/10 hover:text-indigo-600'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
}
