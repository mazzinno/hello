import Navbar from './daynasor/Navbar'
import Dashboard from './daynasor/Dashboard'
import Second from './daynasor/Second'
import Section3 from './hamza/Section_3'
import Section5 from './hamza/Section_5'
import Section6 from './hamza/Section_6'
import Section7 from './hamza/Section_7'  
import Contact from './hamza/Contact'
import Footer from './hamza/Footer'

const Homepage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
      <Navbar />
      <Dashboard />
      <Second />
      <Section3 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Contact />
      <Footer />
    </div>
  )
}

export default Homepage;    