import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`flex justify-between items-center py-6 px-4 sm:px-6 md:px-8 fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="flex items-center">
          <span className="text-slate-800 font-semibold text-2xl"><span className="text-blue-500">Dev</span>Futur.</span>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-700 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18 L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          <div 
          onClick={() => navigate('/')}
          className="flex items-center font-semibold text-slate-700 cursor-pointer" >
            Home
          </div>
          <div className="font-semibold text-slate-700 cursor-pointer">Notre Fonctionnement</div>
          <div className="flex items-center font-semibold text-slate-700 cursor-pointer">
            Projets
          </div>
          <div onClick={() => navigate('/about')} className="flex items-center font-semibold text-slate-700 cursor-pointer">
            À propos
          </div>
        </div>

        <div className="hidden md:flex items-center">
          <Button 
            variant="outline" 
            onClick={() => navigate('/contact')}
            className="font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 border-transparent shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-indigo-500/50 px-6 py-5 text-lg"
          >
            Contactez-nous
          </Button>
        </div>
      </nav>

      {/* Add padding to the top of the page to prevent content from being hidden */}
      <div className="h-20" />

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute z-20 w-full">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center text-slate-700 cursor-pointer">
              Solutions <ChevronDown className="ml-1 h-4 w-4" />
            </div>
            <div className="text-slate-700 cursor-pointer">Notre Fonctionnement</div>
            <div className="text-slate-700 cursor-pointer">Projets</div>
            <div onClick={() => navigate('/about')} className="text-slate-700 cursor-pointer">À propos</div>
            <Button 
              variant="outline" 
              className="text-white bg-gradient-to-r from-indigo-500 to-purple-500 border-transparent shadow-lg w-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-indigo-500/50"
            >
              Contactez-nous
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar;