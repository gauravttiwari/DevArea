'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'
import { BRAND } from '@/lib/constants'

export const Footer = () => {
  const logoSrc = '/images/logo1.png'
  const currentYear = new Date().getFullYear()

  return (
    <>
      <style>{`
        footer {
          background: linear-gradient(to right, #fffdf2, #fff7cc, #fef3c7);
          transition: background 300ms ease;
        }
        
        html.dark footer {
          background: 
            radial-gradient(circle at 80% 20%, rgba(255,140,0,0.25), transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(255,80,0,0.22), transparent 40%),
            linear-gradient(to right, #000000, #1a0b00, #000000);
        }
      `}</style>
      
      <footer 
        className="relative px-6 md:px-20 py-16 mt-20 transition-colors duration-300 
        text-[#0f172a] dark:text-white"
      >
        {/* Main Footer Grid */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            
            {/* LEFT - Brand & Social */}
            <div>
              <Link href="/" className="inline-flex mb-4">
                <Image
                  src={logoSrc}
                  alt="DevArea"
                  width={180}
                  height={52}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed mb-6 transition-colors">
                Transforming businesses through innovative digital solutions. We craft exceptional experiences that drive growth and inspire success.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                <a 
                  href={BRAND.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 dark:bg-[#111827] text-white dark:text-slate-300 hover:bg-[#fbbf24] hover:text-black dark:hover:bg-[#fbbf24] dark:hover:text-black transition-all duration-200" 
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a 
                  href={BRAND.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 dark:bg-[#111827] text-white dark:text-slate-300 hover:bg-[#fbbf24] hover:text-black dark:hover:bg-[#fbbf24] dark:hover:text-black transition-all duration-200" 
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z" /></svg>
                </a>
                <a 
                  href={`mailto:${BRAND.email}`} 
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 dark:bg-[#111827] text-white dark:text-slate-300 hover:bg-[#fbbf24] hover:text-black dark:hover:bg-[#fbbf24] dark:hover:text-black transition-all duration-200" 
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="text-[#b91c1c] dark:text-[#fbbf24] font-semibold mb-4 border-l-2 border-[#b91c1c] dark:border-[#fbbf24] pl-3 transition-colors">
                Services
              </h3>
              <ul className="space-y-3 text-[#0f172a] dark:text-slate-300 text-sm transition-colors">
                <li><Link href="/services#web-development" className="hover:text-[#b91c1c] dark:hover:text-[#fbbf24] transition-colors">Web Development</Link></li>
                <li><Link href="/services#uiux-design" className="hover:text-[#b91c1c] dark:hover:text-[#fbbf24] transition-colors">UI/UX Design</Link></li>
                <li><Link href="/services#landing-pages" className="hover:text-[#b91c1c] dark:hover:text-[#fbbf24] transition-colors">Landing Pages</Link></li>
                <li><Link href="/services#ai-chatbot" className="hover:text-[#b91c1c] dark:hover:text-[#fbbf24] transition-colors">AI Chatbot</Link></li>
                <li><Link href="/services" className="hover:text-[#b91c1c] dark:hover:text-[#fbbf24] transition-colors">View All Services</Link></li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-[#b91c1c] dark:text-[#fbbf24] font-semibold mb-4 border-l-2 border-[#b91c1c] dark:border-[#fbbf24] pl-3 transition-colors">
                Company
              </h3>
              <ul className="space-y-3 text-[#0f172a] dark:text-slate-300 text-sm transition-colors">
                <li><Link href="/about" className="hover:text-[#b91c1c] dark:hover:text-[#fbbf24] transition-colors">About Us</Link></li>
                <li><Link href="/portfolio" className="hover:text-[#b91c1c] dark:hover:text-[#fbbf24] transition-colors">Portfolio</Link></li>
                <li><Link href="/blog" className="hover:text-[#b91c1c] dark:hover:text-[#fbbf24] transition-colors">Blog</Link></li>
                <li><Link href="/faq" className="hover:text-[#b91c1c] dark:hover:text-[#fbbf24] transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-[#b91c1c] dark:hover:text-[#fbbf24] transition-colors">Get In Touch</Link></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-[#b91c1c] dark:text-[#fbbf24] font-semibold mb-4 border-l-2 border-[#b91c1c] dark:border-[#fbbf24] pl-3 transition-colors">
                Contact
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-slate-300 text-sm transition-colors">
                <p><a href={`mailto:${BRAND.email}`} className="hover:text-[#b91c1c] dark:hover:text-[#fbbf24] transition-colors">📧 {BRAND.email}</a></p>
                <p><a href={`tel:${BRAND.phone.replace(/\s/g, '')}`} className="hover:text-[#b91c1c] dark:hover:text-[#fbbf24] transition-colors">📞 {BRAND.phone}</a></p>
                <p>📍 {BRAND.address}</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-400/40 dark:border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-700 dark:text-slate-300 transition-colors">
            <p>© {currentYear} {BRAND.name}. All rights reserved.</p>

            <div className="flex gap-6 mt-3 md:mt-0">
              <Link href="/legal/cookies" className="hover:text-[#b91c1c] dark:hover:text-[#fbbf24] cursor-pointer transition-colors">Cookie Policy</Link>
              <Link href="/legal/privacy" className="hover:text-[#b91c1c] dark:hover:text-[#fbbf24] cursor-pointer transition-colors">Privacy Policy</Link>
              <Link href="/legal/disclaimer" className="hover:text-[#b91c1c] dark:hover:text-[#fbbf24] cursor-pointer transition-colors">Data Deletion</Link>
              <Link href="/legal/terms" className="hover:text-[#b91c1c] dark:hover:text-[#fbbf24] cursor-pointer transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
