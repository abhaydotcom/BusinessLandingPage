import React from 'react'
import {motion} from "framer-motion"
import { fadeIn, textVariant } from '../utlis/motion';

const Features = () => {


      const features = [
    {
      icon: "🔍", 
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like"
    },
    {
      icon: "⚙️",
      title: "Work out the details", 
      description: "Communication protocols apart from engagement models"
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing"
    }
  ]


  return (
    <motion.section  
     variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
    className="max-w-7xl mx-auto px-4 py-16">
      <motion.div 
       variants={fadeIn('up', 0.3)}
      className="text-center mb-12">
        <motion.h2 
         variants={textVariant(0.2)}
        className="text-3xl font-bold mb-4">
          How can we help your business?
        </motion.h2>

        <motion.p 
         variants={fadeIn("up",0.4)}
        className="text-gray-600">
          {" "}
          When you resell besnik, you build trust and increase
        </ motion.p>
      </motion.div>

      < motion.div 
      variants={fadeIn('up', 0.5)}
      className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <motion.div 
          variants={fadeIn('up', 0.3 * (idx + 1))}
          key={idx} className="flex flex-col items-center p-6">
            <motion.div
            variants={fadeIn('down', 0.4 * (idx + 1))}
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
              style={{
                backgroundColor:
                  idx === 0 ? "#F1EFFD" : idx === 1 ? "#FFE7E7" : "#FFF3E4",
              }}
            >
              <motion.div
              variants={fadeIn('up', 0.5 * (idx + 1))}
              className="text-3xl">{feature.icon}</motion.div>
            </motion.div>  

                    <motion.h3 
                    variants={textVariant(0.3)}
                    className="text-2xl font-medium mb-3">
                      {feature.title  }
                    </motion.h3>
                    <motion.p 
                     variants={fadeIn('up', 0.6 * (idx + 1))}
                    className="text-gray-500 text-center">
                      {feature.description}
                    </motion.p>
          </motion.div>
        ))}
      </motion.div>


          <motion.div 
           variants={fadeIn('up', 0.7)}
          className='text-center mt-12'
          >

              <motion.button
               variants={fadeIn('up', 0.8)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
                 className="bg-purple-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors relative"
       
              >
                Become a Partner
              </motion.button>

          </motion.div>

    </motion.section>
  );
}

export default Features