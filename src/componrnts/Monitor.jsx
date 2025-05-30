import monitorCard from "../assets/monitor-card.webp"
import { fadeIn, textVariant } from "../utlis/motion"
import {motion} from "framer-motion"

const Monitor = () => {
  return (
    <motion.section  
     variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      
    className="max-w-7xl mx-auto px-4 py-16 md:py-24">

        <div className="flex flex-col md:flex-row items-center gap-12">

                <motion.div 
                variants={fadeIn('right',0.2)}
                className="w-full md:w-1/2">

                        
                <motion.span variants={fadeIn('up', 0.4)} className='text-green-500 font-medium'>MONITOR</motion.span>
                <motion.h2 
                variants={textVariant(0.5)}
                className='text-3xl md:text-4xl mt-4 mb-6 font-bold'>Introducing best mobile
                    <br />
                 carousels
                </motion.h2>

                <motion.p 
                variants={fadeIn('up', 0.6)}
                className='text-gray-600'>Before the ship is really back. Round, round, all around the world.<br />
                Round, all around the world. Round, all around the world. Round, all <br />
               around the world.
                </motion.p>

               <a  href='#' className='text-purple-500 font-semibold  mt-4'> Learn more about monitoring </a> <button className='text-blue-600 size-10'>→</button>


                </motion.div>

                 <motion.div
                 variants={fadeIn('up', 0.6)}
                 className="w-full md:w-1/2">
                                
                                        <motion.img 
                                        variants={fadeIn('up', 0.5)}
                                        src={monitorCard} alt="stats image" className='w-full h-auto' />
                                    
                                </motion.div>


        </div>

    </motion.section>
  )
}

export default Monitor