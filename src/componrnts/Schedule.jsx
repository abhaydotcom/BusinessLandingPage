import React from 'react'
import stats from '../assets/stats.webp'
import {motion} from "framer-motion"
import { fadeIn, textVariant } from '../utlis/motion'

const Schedule = () => {
  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
    className="max-w-7xl mx-auto px-4 py-16 md:py-24">

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
                <motion.div 
                variants={fadeIn('right', 0.3)}
                className="w-full md:w-1/2">
                
                        <motion.img 
                        variants={fadeIn('up', 0.4)}
                        src={stats} alt="stats image" className='w-full h-auto' />
                    
                </motion.div>


                <motion.div   variants={fadeIn('left', 0.3)}   className="w-full md:w-1/2">

                <motion.span  variants={fadeIn('up', 0.4)} className='text-red-600 font-medium'>SCHEDULE</motion.span>
                <motion.h2 variants={textVariant(0.5)} className='text-3xl md:text-4xl mt-4 mb-6 font-bold'>Streamline Your Business
                    <br />
                    With Smart Scheduling Solutions
                </motion.h2>

                <motion.p 
                 variants={fadeIn('up', 0.6)}
                className='text-gray-600'>Take control of your time and boost productivity with our intelligent scheduling <br />
                system. Automate appointments, manage team availability, and deliver <br />
                exceptional customer experiences through seamless calendar management.
                </motion.p>

               <motion.a   variants={fadeIn('up', 0.6)} href='#' className='text-purple-500 font-semibold  mt-4'> Explore scheduling features </motion.a> <button className='text-blue-600 size-10'>→</button>


                </motion.div>

        </div>

    </motion.section>
  )
}

export default Schedule