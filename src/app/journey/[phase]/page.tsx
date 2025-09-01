'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, Star, Lightbulb, Trophy, BookOpen } from 'lucide-react';
import { journeyData, journeyContent } from '@/data/journey';
import { notFound } from 'next/navigation';

export default function JourneyPhasePage() {
  const params = useParams();
  const phaseId = params.phase as string;
  
  const phase = journeyData.find(p => p.id === phaseId);
  const content = journeyContent[phaseId as keyof typeof journeyContent];
  
  if (!phase || !content) {
    notFound();
  }

  const currentIndex = journeyData.findIndex(p => p.id === phaseId);
  const nextPhase = journeyData[currentIndex + 1];
  const prevPhase = journeyData[currentIndex - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-20">
      {/* Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/journey">
            <motion.button
              whileHover={{ x: -4 }}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Journey</span>
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className={`w-20 h-20 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center mx-auto`}>
              <span className="text-white text-3xl font-bold">{currentIndex + 1}</span>
            </div>
            
            <div>
              <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">{phase.period}</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {phase.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {phase.subtitle}
              </p>
            </div>

            {/* XP Meter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-3 bg-white dark:bg-gray-800 rounded-full px-6 py-3 border border-gray-200 dark:border-gray-700"
            >
              <Star className="text-yellow-500" size={20} />
              <span className="font-semibold text-gray-900 dark:text-white">XP Gained:</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                +{phase.xpGained}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 mb-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="text-blue-500" size={24} />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Story</h2>
            </div>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              {content.story.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Skills & Lessons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Skills Developed */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Trophy className="text-green-500" size={24} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Skills Developed</h3>
              </div>
              
              <div className="space-y-3">
                {content.skillsDeveloped.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Lessons Learned */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Lightbulb className="text-yellow-500" size={24} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Lessons Learned</h3>
              </div>
              
              <div className="space-y-4">
                {content.lessonsLearned.map((lesson, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-2"
                  >
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{lesson}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Next Thought Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-800 transform rotate-1 shadow-lg"
          >
            <div className="transform -rotate-1">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-2xl">💭</span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Next Thought</h3>
              </div>
              <p className="text-gray-800 dark:text-gray-200 italic font-medium">
                "{content.nextThought}"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation to Next/Previous */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            {prevPhase ? (
              <Link href={`/journey/${prevPhase.id}`}>
                <motion.div
                  whileHover={{ x: -4 }}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  <ArrowLeft size={20} />
                  <div className="text-left">
                    <p className="text-sm">Previous</p>
                    <p className="font-semibold">{prevPhase.title}</p>
                  </div>
                </motion.div>
              </Link>
            ) : (
              <div />
            )}

            {nextPhase ? (
              <Link href={`/journey/${nextPhase.id}`}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  <div className="text-right">
                    <p className="text-sm">Next</p>
                    <p className="font-semibold">{nextPhase.title}</p>
                  </div>
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
            ) : (
              <Link href="/skills">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <div className="text-right">
                    <p className="text-sm">What's Next?</p>
                    <p className="font-semibold">Explore My Skills</p>
                  </div>
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
