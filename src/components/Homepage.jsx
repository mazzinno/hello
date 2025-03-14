import Navbar from './daynasor/Navbar'
import Dashboard from './daynasor/Dashboard'
import Second from './daynasor/Second'
import Section3 from './hamza/Section_3'
import Section5 from './hamza/Section_5'
import Section6 from './hamza/Section_6'
import Section7 from './hamza/Section_7'  
import Contact from './hamza/Contact'
import Footer from './hamza/Footer'
import Section8 from './hamza/Section_8'
import { useEffect } from 'react'
const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
      <Navbar />
      <Dashboard />
      <Second />
      <Section3 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Contact />
      <Footer />
    </div>
  )
}

export default Homepage;    