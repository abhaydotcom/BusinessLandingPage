import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import {motion } from "framer-motion"
import { fadeIn, textVariant } from '../utlis/motion';
 

const Testimonial = () => {

    const testimonials = [
    {
      id: 1,
      name: "Robin Ayala Doe", 
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
    {
      id: 2,
      name: "John De marli",
      image: "https://randomuser.me/api/portraits/women/90.jpg", 
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
      id: 3,
      name: "Rowhan Smith",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    },
    {
      id: 5,
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    },
    {
      id: 6,
      name: "Emma Wilson",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    },
  
  ];


  return (
   <section className="py-16 px-4 max-w-7xl mx-auto" id='testimonials'>
        <motion.div  variants={fadeIn('up', 0.3)} className='text-center mb-12'>
            <motion.h2  variants={textVariant(0.2)}    className="text-3xl md:text-4xl font-bold mb-4">What our happy client say</motion.h2>
            < motion.p  variants={fadeIn('up', 0.4)} className='text-gray-600'>Things that make it the best place to start trading</motion.p>
        </motion.div>

        
        <motion.div
          variants={fadeIn('up', 0.5)}
        className='relative'>

            <Swiper
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },  
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        modules={[Navigation]}
        className="testimonials-swiper md:mb-12"
      >
       

        {
            testimonials.map((testimonial,idx)=>(
                 <SwiperSlide className='h-full md:py-12 py-4' key={idx}> 

                        <motion.div variants={fadeIn('up', 0.3 * (idx + 1))}   className="text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col">
                            <motion.div variants={fadeIn('down', 0.3 * (idx + 1))}        className="w-24 h-24 mx-auto mb-4">
                                <motion.img 
                                variants={fadeIn('up', 0.5 * (idx + 1))}
                                src={testimonial.image} alt={testimonial.name}      className="w-full h-full object-cover rounded-full" />
                            </motion.div>

                            <motion.div
                            variants={fadeIn('up', 0.4 * (idx + 1))}
                            className="flex justify-center mb-2"> 
                                {[...Array(5)].map((_,index)=>(
                                    <span key={index} className='text-purple-600'>★</span>
                                ))}
                            </motion.div>

                            <motion.h3 variants={textVariant(0.3)}  className="font-semibold text-xl mb-3">{testimonial.name}</motion.h3>
                            <motion.p variants={fadeIn('up', 0.6 * (idx + 1))} className='text-gray-600'>{testimonial.text}</motion.p>

                        </motion.div>

                 </SwiperSlide>
            ))
        }

      </Swiper>



            <motion.div variants={fadeIn('up', 0.7)} className="flex justify-center gap-4 mt-8">
                <motion.button   variants={fadeIn('left', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-purple-500 hover:text-white cursor-pointer transition-colors">
                    <BsChevronLeft className="w-6 h-6" />

                </motion.button>

                <motion.button   variants={fadeIn('left', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}  className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-purple-500 hover:text-white cursor-pointer transition-colors" >
                    <BsChevronRight className="w-6 h-6" />

                </motion.button>
            </motion.div>



        </motion.div>

   </section>
  )
}

export default Testimonial