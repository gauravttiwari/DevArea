'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { BRAND, NAVIGATION } from '@/lib/constants'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-light-bg border-t border-light-border text-light-text mt-20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-bold text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600 transition-all block mb-4">
              {BRAND.name}
            </Link>
            <p className="text-light-text text-sm mb-6 leading-relaxed">
              {BRAND.description}
            </p>
            <div className="flex gap-4">
              <a href={BRAND.social.twitter} target="_blank" rel="noopener noreferrer" className="text-light-text hover:text-indigo-600 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              <a href={BRAND.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-light-text hover:text-indigo-600 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z" /></svg>
              </a>
              <a href={`mailto:${BRAND.email}`} className="text-light-text hover:text-indigo-600 transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-light-heading mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {NAVIGATION.services.slice(0, 6).map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-light-text hover:text-light-heading transition-colors text-sm">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-light-heading mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-light-text hover:text-light-heading transition-colors text-sm">About</Link></li>
              <li><Link href="/portfolio" className="text-light-text hover:text-light-heading transition-colors text-sm">Portfolio</Link></li>
              <li><Link href="/blog" className="text-light-text hover:text-light-heading transition-colors text-sm">Blog</Link></li>
              <li><Link href="/contact" className="text-light-text hover:text-light-heading transition-colors text-sm">Contact</Link></li>
              <li><Link href="/faq" className="text-light-text hover:text-light-heading transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="font-semibold text-light-heading mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 mb-6">
              {NAVIGATION.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-light-text hover:text-light-heading transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-light-heading mb-3 text-sm uppercase tracking-wider">Contact</h3>
            <div className="space-y-2 text-sm">
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 text-light-text hover:text-light-heading transition-colors">
                <Mail className="w-4 h-4" /> {BRAND.email}
              </a>
              <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-light-text hover:text-light-heading transition-colors">
                <Phone className="w-4 h-4" /> {BRAND.phone}
              </a>
              <p className="flex items-center gap-2 text-light-text">
                <MapPin className="w-4 h-4" /> {BRAND.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-light-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-light-text text-sm">
              © {currentYear} {BRAND.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/legal/privacy" className="text-light-text hover:text-light-heading transition-colors">Privacy</Link>
              <Link href="/legal/terms" className="text-light-text hover:text-light-heading transition-colors">Terms</Link>
              <Link href="/legal/cookies" className="text-light-text hover:text-light-heading transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
