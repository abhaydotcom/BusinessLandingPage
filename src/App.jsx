import "./App.css"
import Navbar from './componrnts/Navbar'
import Hero from './componrnts/Hero'
import CompanyLogo from './componrnts/CompanyLogo'
import Purpose from './componrnts/Purpose'
import Features from './componrnts/Features'
import Schedule from './componrnts/Schedule'
import Monitor from './componrnts/Monitor'
import Pricing from './componrnts/Pricing'
import Service from './componrnts/Service'
import Testimonial from './componrnts/Testimonial'
import Newsletter from './componrnts/Newsletter'
import Footer from './componrnts/Footer'



const App = () => {
  return (
    <main 
    className='relative min-h-screen overflow-x-hidden'
    >
       <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full blur-[80px] -z-10"></div>

    <div className='overflow-hidden'>
    <Navbar/>
    <Hero/>
    <CompanyLogo/>
    <Purpose/>
    <Features/>
    <Schedule/>
    <Monitor/>
    <Pricing/>
    <Service/>
    <Testimonial/>
    <Newsletter/>
    <Footer/>

    </div>
    
    </main>
  )
}

export default App