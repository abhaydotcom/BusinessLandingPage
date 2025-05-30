import React from 'react'
import {motion} from 'framer-motion'

import heroImage from "../assets/heroimage.png"
import { fadeIn, textVariant } from '../utlis/motion'

const Hero = () => {
  return (
    <section 
    id='home'
    className='flex flex-col md:flex-row justify-center items-center  container mx-auto pt-44 pb-6 px-4 sm:px-6 lg:px-8'
    >
    
    <div  className='w-full md:w-1/2 space-y-8'>

            <motion.div 
             variants={fadeIn('right',0.2)}
                initial="hidden"
                whileInView="show"
                
            className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
                <span  className="text-purple-600 group-hover:scale-110 transition-transform">★</span>
                <span className="text-sm font-medium">Start your growth</span>
            </motion.div>


            <motion.h1 
             variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
                   className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
                 Empowering growth for{' '}
          <span className="text-purple-600 relative inline-block">
            companies of all sizes
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-200/60"></span>
          </span>{' '}
          from startups to global enterprises
          <span className="inline-block ml-2 animate-pulse">⏰</span>
            </motion.h1>

            <motion.p 
             variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
            className='text-gray-600 text-lg md:text-xl max-w-xl'>
                Access accurate leads, sales training, conversion tools, and more all under a single billing plan.
            </motion.p>


            <motion.div 
             variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
             className="flex gap-3 max-w-md">

                    <input type="email"
                    placeholder='Email address'
                     className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all text-gray-600"
                    />

                    <button 
                    className="bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-purple-100 active:scale-95"
                    > →</button>

            </motion.div>

    </div>
    




    <motion.div  className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
     variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView="show"
    >


            <div
            className='relative '
            >
                <img src={heroImage} alt="Team hero" 
                 className="rounded-lg relative z-10 hover:scale-[1.02]      transition-transform duration-300"
                />
            </div>
 
    </motion.div>
    
    
    </section>

  )
}

export default Hero