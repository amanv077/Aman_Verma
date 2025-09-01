'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies, testimonials } from '@/data/caseStudies';
import { ExternalLink, Clock, User, Target, Lightbulb, TrendingUp, X } from 'lucide-react';

export default function CaseStudiesPage() {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  
  const selectedCaseData = selectedCase ? caseStudies.find(cs => cs.id === selectedCase) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900">
              Case{' '}
              <span className="font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Studies
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Real products, real challenges, real results. See how I approach 
              product problems with a strategic mindset and execution focus.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden cursor-pointer group"
                onClick={() => setSelectedCase(caseStudy.id)}
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-medium text-slate-600">
                      {caseStudy.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                      {caseStudy.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                        {caseStudy.title}
                      </h3>
                      <ExternalLink className="text-slate-400 group-hover:text-blue-600 transition-colors" size={16} />
                    </div>
                    
                    <p className="text-slate-600 font-medium">
                      {caseStudy.subtitle}
                    </p>
                    
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {caseStudy.problem}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center space-x-4 pt-3 text-xs text-slate-500">
                      <div className="flex items-center space-x-1">
                        <Clock size={12} />
                        <span>{caseStudy.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User size={12} />
                        <span>{caseStudy.role}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-3">
                      {caseStudy.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {caseStudy.technologies.length > 3 && (
                        <span className="text-xs text-slate-500">
                          +{caseStudy.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-4">
              What People Say
            </h2>
            <p className="text-slate-600 text-lg">
              Feedback from colleagues and collaborators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg"
              >
                <div className="space-y-4">
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Case Study Details */}
      <AnimatePresence>
        {selectedCase && selectedCaseData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedCaseData.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedCaseData.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-8">
                {/* Problem */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Target className="text-red-500" size={20} />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Problem</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedCaseData.problem}
                  </p>
                </div>

                {/* Approach */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Lightbulb className="text-yellow-500" size={20} />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Approach</h3>
                  </div>
                  <ul className="space-y-2">
                    {selectedCaseData.approach.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Target className="text-blue-500" size={20} />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Solution</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedCaseData.solution}
                  </p>
                </div>

                {/* Impact */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <TrendingUp className="text-green-500" size={20} />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Impact</h3>
                  </div>
                  <ul className="space-y-2">
                    {selectedCaseData.impact.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lessons Learned */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Lightbulb className="text-purple-500" size={20} />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Key Lessons</h3>
                  </div>
                  <ul className="space-y-2">
                    {selectedCaseData.lessons.map((lesson, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseData.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
