"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { Play } from 'lucide-react';
import logo from '../assets/logo.svg';

const page = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className='w-full h-full hero'>
      <div className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="relative z-10 max-w-4xl mx-auto flex justify-center flex-col">
          <h1 className="text-5xl md:text-5xl font-bold mb-8 flex items-center justify-center">
            Welcome to <span className="text-purple-600">
              <Image src={logo} height={50} alt='DataRoc' className='mx-2 mt-1' />
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Get Real Insights into Your Data!
          </h2>
          
          <p className="text-base md:text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            At the heart of our Data Science Solution lies a powerful desire to provide precise data insights which 
            create business values and steer business decisions.
          </p>
          
          <div className="flex items-center justify-center">
            <div 
              className="flex items-center space-x-2 text-purple-600 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link href={`dashboard`}><span className="text-lg font-medium mr-3">Get Started</span></Link>
              
              <Link href={`dashboard`} className="relative">
                <motion.div 
                  className="flex items-center justify-center w-14 h-14 bg-purple-600 rounded-full z-10 relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="h-6 w-6 text-white ml-1" />
                </motion.div>
                
                {/* Ripple effect */}
                <AnimatePresence>
                  {isHovered && (
                    <>
                      <motion.div
                        className="absolute top-0 left-0 right-0 bottom-0 rounded-full bg-purple-600 opacity-30"
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.4, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                      />
                      <motion.div
                        className="absolute top-0 left-0 right-0 bottom-0 rounded-full bg-purple-600 opacity-30"
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.7, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "loop" }}
                      />
                    </>
                  )}
                </AnimatePresence>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;