'use client';

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Coffee } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'mailto:amanverma4816@gmail.com', icon: Mail, label: 'Email' },
    { href: 'tel:+916264613866', icon: Coffee, label: 'Phone' },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-medium text-lg">AV</span>
              </div>
              <span className="font-medium text-xl text-slate-900">Aman Verma</span>
            </Link>
            <p className="text-slate-500 leading-relaxed">
              Building products at the intersection of business, technology, and human behavior.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-medium text-xl text-slate-900">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/journey" className="text-slate-500 hover:text-slate-700 transition-colors">
                Journey
              </Link>
              <Link href="/skills" className="text-slate-500 hover:text-slate-700 transition-colors">
                Skills
              </Link>
              <Link href="/case-studies" className="text-slate-500 hover:text-slate-700 transition-colors">
                Case Studies
              </Link>
              <Link href="/ideas" className="text-slate-500 hover:text-slate-700 transition-colors">
                Ideas & Fun
              </Link>
              <Link href="/blog" className="text-slate-500 hover:text-slate-700 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-slate-500 hover:text-slate-700 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h3 className="font-medium text-xl text-slate-900">Let's Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors shadow-lg border border-slate-200 hover:border-blue-200"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
            <div className="flex items-center space-x-3 text-slate-500">
              <Coffee size={18} />
              <span>Always excited to chat about products!</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-500">
            © {currentYear} Aman Verma. Built with Next.js & Tailwind CSS.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span className="text-slate-500">Made with</span>
            <span className="text-red-500">❤️</span>
            <span className="text-slate-500">and lots of</span>
            <Coffee size={16} className="text-amber-600" />
          </div>
        </div>
      </div>
    </footer>
  );
}
