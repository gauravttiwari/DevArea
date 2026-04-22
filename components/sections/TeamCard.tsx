'use client';

import { motion } from 'framer-motion';
import { Share2, Briefcase, Globe } from 'lucide-react';
import Image from 'next/image';

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
    website?: string;
  };
  index?: number;
}

export default function TeamCard({
  image,
  name,
  role,
  bio,
  socials,
  index = 0,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl mb-4 aspect-square bg-gradient-to-br from-indigo-200 to-purple-200">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          {socials && (
            <div className="flex gap-3">
              {socials.instagram && (
                <motion.a
                  href={socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all"
                >
                  <Share2 className="w-5 h-5" />
                </motion.a>
              )}
              {socials.linkedin && (
                <motion.a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all"
                >
                  <Briefcase className="w-5 h-5" />
                </motion.a>
              )}
              {socials.website && (
                <motion.a
                  href={socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all"
                >
                  <Globe className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-bold text-light-heading mb-1">{name}</h3>
        <p className="text-sm font-semibold text-indigo-600 mb-2">{role}</p>
        <p className="text-sm text-light-text leading-relaxed">{bio}</p>
      </div>
    </motion.div>
  );
}
