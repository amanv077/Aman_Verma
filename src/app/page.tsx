'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Download, MessageCircle, ArrowRight, Sparkles, Coffee, Code, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-100/50"
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-blue-800 font-medium text-sm tracking-wide">Available for opportunities</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-slate-900"
                >
                  <span className="font-light">Hi, I'm </span>
                  <span className="font-semibold bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 bg-clip-text text-transparent">
                    Aman Verma
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-2xl"
                >
                  A <span className="text-slate-800 font-medium">Product Manager</span> with entrepreneurial experience and a technical foundation, 
                  driving impact across e-commerce, SaaS, and telecom products. I bridge the gap between business strategy and technical execution, 
                  building products that users love and businesses need.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-3"
                >
                  {['Product Strategy', 'Agile Leadership', 'User Research', 'Data-Driven Decisions'].map((skill, index) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-slate-50 to-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200/50 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="/journey"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)" }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 min-w-[220px]"
                >
                  <span>View My Journey</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02, borderColor: "rgb(99, 102, 241)" }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center space-x-3 bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-medium hover:border-indigo-300 hover:text-indigo-700 hover:bg-indigo-50/30 transition-all duration-300 min-w-[220px] shadow-sm"
                >
                  <MessageCircle size={20} />
                  <span>Let's Connect</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200"
              >
                <div className="text-center group cursor-default">
                  <div className="text-3xl font-semibold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">4+</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center group cursor-default">
                  <div className="text-3xl font-semibold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">25%</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Process Improvement</div>
                </div>
                <div className="text-center group cursor-default">
                  <div className="text-3xl font-semibold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">1</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Startup Founded</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Professional Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full h-[600px] bg-gradient-to-br from-slate-100 to-blue-100 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
                {/* Professional photo placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-slate-600 text-8xl font-light">AV</span>
                  </div>
                </div>
                
                {/* Elegant floating elements */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-16 right-16 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/50"
                >
                  <Code className="text-blue-600" size={28} />
                </motion.div>
                
                <motion.div
                  animate={{ y: [8, -8, 8] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                  className="absolute bottom-24 left-16 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/50"
                >
                  <Users className="text-indigo-600" size={28} />
                </motion.div>
                
                <motion.div
                  animate={{ y: [-6, 12, -6] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 3 }}
                  className="absolute top-1/2 left-8 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/50"
                >
                  <Coffee className="text-amber-600" size={28} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Card */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 rounded-3xl shadow-xl p-12 lg:p-16 border border-slate-200/50 backdrop-blur-sm"
          >
            {/* Elegant background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-violet-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
            
            <div className="relative text-center space-y-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-20 h-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/25"
              >
                <Sparkles className="text-white" size={32} />
              </motion.div>
              
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl lg:text-4xl font-light text-slate-800 italic leading-relaxed"
              >
                "I build products at the <span className="font-medium text-blue-700">intersection</span> of business strategy, 
                technology, and user experience."
              </motion.blockquote>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed"
              >
                My unique journey from entrepreneur to frontend lead to product manager gives me a unique perspective 
                on building products that balance business goals with technical excellence and user needs.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link href="/journey">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center space-x-3 text-blue-700 font-medium hover:text-blue-800 transition-all duration-300 bg-white/50 px-6 py-3 rounded-xl border border-blue-200/50 hover:border-blue-300/50 hover:bg-blue-50/50 shadow-sm hover:shadow-md"
                  >
                    <span className="text-lg">Explore My Journey</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 leading-tight">
              What Would You Like to{' '}
              <span className="font-semibold bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 bg-clip-text text-transparent">
                Explore?
              </span>
            </h2>
            <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
              Dive deeper into my experience, skills, and thinking
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'My Journey',
                description: 'From curious student to startup founder to PM',
                href: '/journey',
                icon: '🚀',
                color: 'from-blue-600 to-blue-700',
                accent: 'blue'
              },
              {
                title: 'Skills & Expertise',
                description: 'Technical depth meets business acumen',
                href: '/skills',
                icon: '⚡',
                color: 'from-indigo-600 to-indigo-700',
                accent: 'indigo'
              },
              {
                title: 'Case Studies',
                description: 'Real products, real challenges, real results',
                href: '/case-studies',
                icon: '📊',
                color: 'from-violet-600 to-violet-700',
                accent: 'violet'
              },
              {
                title: 'Ideas & Fun',
                description: 'Creative product ideas and PM insights',
                href: '/ideas',
                icon: '💡',
                color: 'from-amber-600 to-amber-700',
                accent: 'amber'
              },
              {
                title: 'Blog & Thoughts',
                description: 'Lessons learned and industry insights',
                href: '/blog',
                icon: '✍️',
                color: 'from-emerald-600 to-emerald-700',
                accent: 'emerald'
              },
              {
                title: 'Get in Touch',
                description: 'Let\'s talk about products and opportunities',
                href: '/contact',
                icon: '📫',
                color: 'from-rose-600 to-rose-700',
                accent: 'rose'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -8 }}
                    className="group h-full bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50 p-8 cursor-pointer transition-all hover:shadow-xl hover:border-slate-300/50 duration-300 relative overflow-hidden"
                  >
                    {/* Subtle background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                    
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-3xl">{item.icon}</span>
                      </div>
                      
                      <h3 className={`text-2xl font-semibold text-slate-900 mb-3 group-hover:text-${item.accent}-700 transition-colors`}>
                        {item.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed mb-6 font-light">
                        {item.description}
                      </p>
                      
                      <div className={`flex items-center text-${item.accent}-700 font-medium group-hover:text-${item.accent}-800 transition-colors`}>
                        <span>Learn More</span>
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
