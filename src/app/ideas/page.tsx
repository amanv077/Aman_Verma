'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ideas, funSections } from '@/data/content';
import { Lightbulb, Coffee, Star, Zap, Heart, MousePointer, Code } from 'lucide-react';

export default function IdeasPage() {
  const [selectedQuote, setSelectedQuote] = useState(0);
  const [coffeeClicks, setCoffeeClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedQuote((prev) => (prev + 1) % funSections.pmLifeQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleCoffeeClick = () => {
    setCoffeeClicks(prev => prev + 1);
    if (coffeeClicks === 4) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 3000);
    }
  };

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
              Ideas &{' '}
              <span className="font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Fun
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Creative product ideas, PM humor, and a few easter eggs. 
              Because the best product managers know how to balance innovation with fun!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Future Product Ideas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-4">
              Future Product Ideas
            </h2>
            <p className="text-slate-600 text-lg">
              Brainstorming the next big thing (or small useful thing)
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ideas.map((idea, index) => (
              <motion.div
                key={idea.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 hover:shadow-2xl transition-all"
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Lightbulb className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-slate-900">
                          {idea.title}
                        </h3>
                        <p className="text-sm text-slate-500">
                          {idea.category} • {idea.stage}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-1">
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                        idea.potential === 'High' ? 'bg-green-100 text-green-800' :
                        idea.potential === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-slate-100 text-slate-800'
                      }`}>
                        {idea.potential} Potential
                      </span>
                      <span className="text-xs">{idea.funFactor}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 leading-relaxed">
                    {idea.description}
                  </p>

                  {/* Details */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {idea.details}
                  </p>

                  {/* Fun interaction */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="mt-4 p-3 bg-slate-50 rounded-2xl cursor-pointer"
                  >
                    <div className="flex items-center space-x-2 text-slate-600">
                      <Zap size={16} />
                      <span className="text-sm">Click to show interest (feature coming soon! 😉)</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* If I Were a Product */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 border border-purple-200 shadow-xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light text-slate-900 mb-2">
                {funSections.ifIWereAProduct.title}
              </h2>
              <p className="text-lg text-slate-600">
                {funSections.ifIWereAProduct.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {funSections.ifIWereAProduct.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-2"
                >
                  <Star className="text-yellow-500 mt-1 flex-shrink-0" size={16} />
                  <span className="text-slate-700 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Tech Specs */}
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg border border-slate-200">
              <h3 className="text-lg font-medium text-slate-900 mb-4 flex items-center space-x-2">
                <Code size={20} />
                <span>Technical Specifications</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(funSections.ifIWereAProduct.techSpecs).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-slate-600 text-sm">{key}:</span>
                    <span className="text-slate-900 text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* User Reviews */}
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-4">User Reviews</h3>
              <div className="space-y-3">
                {funSections.ifIWereAProduct.userReviews.map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-yellow-400" size={12} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 italic">"{review}"</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PM Life Quotes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              PM Life Wisdom
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Because every PM needs a good laugh (and some truth)
            </p>
          </motion.div>

          <motion.div
            key={selectedQuote}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white"
          >
            <blockquote className="text-2xl lg:text-3xl font-light italic mb-4">
              {funSections.pmLifeQuotes[selectedQuote]}
            </blockquote>
            <div className="flex justify-center space-x-2">
              {funSections.pmLifeQuotes.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === selectedQuote ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Easter Eggs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Hidden Features
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Every good product has easter eggs. Try clicking around! 🥚
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Coffee Easter Egg */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCoffeeClick}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 cursor-pointer text-center"
            >
              <div className="text-4xl mb-2">
                <Coffee className="mx-auto text-yellow-600" size={40} />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Coffee Counter</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Clicks: {coffeeClicks} ☕
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                (Try clicking 5 times)
              </p>
            </motion.div>

            {/* Double Click Detection */}
            <motion.div
              onDoubleClick={() => {
                alert('🖱️ Double-click detected! Fun fact: Good PMs double-click on assumptions too.');
              }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 cursor-pointer text-center"
            >
              <div className="text-4xl mb-2">
                <MousePointer className="mx-auto text-blue-600" size={40} />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Double Click Me</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Hidden message inside
              </p>
            </motion.div>

            {/* Heart Animation */}
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 cursor-pointer text-center"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="text-4xl mb-2"
              >
                <Heart className="mx-auto text-red-500" size={40} fill="currentColor" />
              </motion.div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Made with Love</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                And lots of coffee ☕
              </p>
            </motion.div>
          </div>

          {/* Easter Egg Popup */}
          {showEasterEgg && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-yellow-900 p-6 rounded-xl shadow-2xl z-50"
            >
              <div className="text-center">
                <div className="text-4xl mb-2">🎮</div>
                <h3 className="font-bold mb-2">Cheat Code Activated!</h3>
                <p className="text-sm">Your curiosity skill +10!</p>
                <p className="text-xs mt-2">Coffee.exe is now running at maximum efficiency!</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
