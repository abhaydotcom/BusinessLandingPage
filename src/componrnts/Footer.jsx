import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { fadeIn } from '../utlis/motion'
import {motion} from "framer-motion"

const Footer = () => {


      const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }
  return (
     <motion.footer 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
     
      className="bg-gray-50"
    >
      <div className="section-container">
        <motion.div 
        
    
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Brand Column */}
          <motion.div
          variants={fadeIn("right",0.5)} 
    
            className="lg:col-span-4"
          >
            <div 
              
              className="flex items-center gap-1 mb-6"
            >
              <div className="w-4 h-4 bg-purple-600 rounded-full opacity-75"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full -ml-2"></div>
              <span className="text-xl font-medium ml-1">The Next Design</span>
            </div>
            <p
 
         
              className="text-gray-600 mb-6"
            >
              The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
            </p>
            <div 
            
              className="flex gap-4"
            >
              <a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-600 hover:text-white transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-400 hover:text-white transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-700 hover:text-white transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Links Columns */}
          <div 
           
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div
                variants={fadeIn("left",0.5)} 
                  key={category}
                 
                >
                  <h3 
                    
                    className="text-lg font-medium mb-4"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h3>
                  <ul 
                   
                    className="space-y-3"
                  >
                    {links.map((link, index) => (
                      <li 
                        key={index}
                      
                      >
                        <a 
                          whileHover={{ x: 5 }}
                          href={link.href} 
                          className="text-gray-600 hover:text-gray-900"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div 

          className="border-t border-gray-200 mt-12 pt-8"
        >
          <div 
            
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <motion.p
    variants={fadeIn("right",0.7)}
        
              className="text-gray-600 text-sm"
            >
              Copyright © {new Date().getFullYear()} @abhaydotcom
            </motion.p>
            <motion.p
              variants={fadeIn("left",0.8)}
             
              className="text-gray-600 text-sm"
            >
              Created by Abhay Kumar Singh
            </motion.p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer