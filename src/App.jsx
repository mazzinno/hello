import Navbar from './components/daynasor/Navbar'
import Dashboard from './components/daynasor/Dashboard'
import Second from './components/daynasor/Second'
import Section3 from './components/hamza/Section_3'
import Section5 from './components/hamza/Section_5'
import Section6 from './components/hamza/Section_6'
import Section7 from './components/hamza/Section_7'
import Contact from './components/hamza/Contact'
import Footer from './components/hamza/Footer'

function App() {
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

export default App
