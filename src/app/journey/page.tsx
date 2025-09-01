'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Trophy, Lightbulb, Star, Code, Target, Heart, BookOpen, Brain, ArrowRight } from 'lucide-react';
import { journeyData, journeyContent } from '@/data/journey';

export default function JourneyPage() {
  const totalXP = journeyData.reduce((sum, phase) => sum + phase.xpGained, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium">
              <MapPin size={18} />
              <span>Professional Journey</span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light text-slate-900 tracking-tight">
              My{' '}
              <span className="font-medium bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h1>
            
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              From curious student to product leader — a story of continuous learning, bold experimentation, 
              and the relentless pursuit of building products that matter.
            </p>

            {/* Journey Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-3xl font-light text-blue-600 mb-2">{journeyData.length}</div>
                  <div className="text-slate-600 font-medium">Major Phases</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-3xl font-light text-indigo-600 mb-2">6+</div>
                  <div className="text-slate-600 font-medium">Years Growth</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-3xl font-light text-purple-600 mb-2">{totalXP}</div>
                  <div className="text-slate-600 font-medium">Experience Points</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-3xl font-light text-emerald-600 mb-2">∞</div>
                  <div className="text-slate-600 font-medium">Lessons Learned</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Optimized Vertical Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Left-side Timeline Line */}
            <div className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-300 to-purple-300 rounded-full" 
                 style={{ height: `${journeyData.length * 600}px` }}>
            </div>

            {/* Journey Phases - Single Column Layout */}
            <div className="space-y-16">
              {journeyData.map((phase, index) => {
                const content = journeyContent[phase.id as keyof typeof journeyContent];
                return (
                  <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative flex items-start space-x-8"
                  >
                    {/* Timeline Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                        className="w-16 h-16 bg-white rounded-full border-4 border-blue-600 shadow-xl flex items-center justify-center"
                      >
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center shadow-lg`}>
                          <span className="text-white text-sm font-medium">{index + 1}</span>
                        </div>
                      </motion.div>
                      
                      {/* Year Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="absolute -right-4 top-20 bg-slate-100 px-3 py-1 rounded-full text-xs font-medium text-slate-600 whitespace-nowrap"
                      >
                        {phase.period}
                      </motion.div>
                    </div>

                    {/* Content Card - Full Width */}
                    <div className="flex-1 min-w-0">
                      <motion.div
                        whileHover={{ scale: 1.01, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 overflow-hidden"
                      >
                        {/* Colored Header Strip */}
                        <div className={`h-3 bg-gradient-to-r ${phase.color}`}></div>
                        
                        <div className="p-8">
                          {/* Phase Header */}
                          <div className="mb-6">
                            <h2 className="text-3xl font-light text-slate-900 mb-2">{phase.title}</h2>
                            <h3 className="text-lg text-slate-600 font-medium mb-3">{phase.subtitle}</h3>
                            <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                          </div>

                          {/* Rich Content in Compact Layout */}
                          {content && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                              
                              {/* Left Column: Story + Lessons */}
                              <div className="space-y-6">
                                {/* The Story */}
                                <div>
                                  <h4 className="font-medium text-slate-900 flex items-center space-x-2 mb-4">
                                    <BookOpen className="w-5 h-5 text-blue-600" />
                                    <span>The Story</span>
                                  </h4>
                                  <div className="space-y-3">
                                    {content.story.slice(0, 2).map((paragraph, pIndex) => (
                                      <motion.p
                                        key={pIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 + 0.4 + pIndex * 0.1 }}
                                        viewport={{ once: true }}
                                        className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border-l-3 border-blue-200"
                                      >
                                        {paragraph}
                                      </motion.p>
                                    ))}
                                  </div>
                                </div>

                                {/* Key Lessons - Compact */}
                                <div>
                                  <h4 className="font-medium text-slate-900 flex items-center space-x-2 mb-4">
                                    <Brain className="w-5 h-5 text-purple-600" />
                                    <span>Key Insights</span>
                                  </h4>
                                  <div className="space-y-2">
                                    {content.lessonsLearned.slice(0, 2).map((lesson, lIndex) => (
                                      <motion.div
                                        key={lIndex}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.6 + lIndex * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start space-x-2 text-sm"
                                      >
                                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-slate-700 leading-relaxed">{lesson}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* Right Column: Skills + Impact */}
                              <div className="space-y-6">
                                {/* Skills Developed - Grid */}
                                <div>
                                  <h4 className="font-medium text-slate-900 flex items-center space-x-2 mb-4">
                                    <Lightbulb className="w-5 h-5 text-amber-600" />
                                    <span>Skills Gained</span>
                                  </h4>
                                  <div className="grid grid-cols-2 gap-2">
                                    {content.skillsDeveloped.slice(0, 6).map((skill, sIndex) => (
                                      <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 + 0.7 + sIndex * 0.05 }}
                                        viewport={{ once: true }}
                                        className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg px-3 py-2 text-center"
                                      >
                                        <span className="text-blue-800 font-medium text-xs">{skill}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>

                                {/* Next Thought - Highlight */}
                                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-200">
                                  <div className="flex items-start space-x-2">
                                    <Target className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <h5 className="font-medium text-indigo-900 text-sm mb-1">Looking Ahead</h5>
                                      <p className="text-indigo-800 text-sm italic leading-relaxed">{content.nextThought}</p>
                                    </div>
                                  </div>
                                </div>

                                {/* XP Display */}
                                <div className="flex items-center justify-center bg-amber-50 rounded-xl p-4 border border-amber-200">
                                  <div className="flex items-center space-x-2">
                                    <Star className="text-amber-600" size={20} />
                                    <span className="font-medium text-amber-900">+{phase.xpGained} XP</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Continue Reading Link */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.8 }}
                            viewport={{ once: true }}
                            className="mt-6 pt-6 border-t border-slate-200"
                          >
                            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm group">
                              <span>Read Full Story</span>
                              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Continues */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* End of Timeline Marker */}
            <div className="flex justify-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-2xl flex items-center justify-center">
                <Heart className="text-white" size={32} />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-12 text-white"
            >
              <h2 className="text-4xl font-light mb-6">The Journey Continues...</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Every ending is a new beginning. Ready to write the next chapter together and create something extraordinary?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-medium shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className="flex items-center space-x-2">
                    <Target size={20} />
                    <span>Explore My Work</span>
                  </div>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-medium hover:bg-white hover:text-blue-600 transition-all"
                >
                  <div className="flex items-center space-x-2">
                    <MapPin size={20} />
                    <span>Start Our Journey</span>
                  </div>
                </motion.button>
              </div>

              {/* Journey Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-light mb-2">{journeyData.length}+</div>
                  <div className="text-sm opacity-80">Milestones</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light mb-2">{totalXP}</div>
                  <div className="text-sm opacity-80">Total XP</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light mb-2">∞</div>
                  <div className="text-sm opacity-80">More to Come</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
