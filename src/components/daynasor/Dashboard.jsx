import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from "react"

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mock data for partners
  const partners = [{ name: "Orange digital center" }, { name: "Webde.ma" }, { name: "Google" }, { name: "Green" }]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-br from-purple-100/20 to-indigo-200/30 -z-10"></div>
      {/* Navigation */}
      <nav className="flex justify-between items-center py-4 px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex items-center">
          <div className="bg-blue-500 w-8 h-8 rounded mr-2"></div>
          <span className="text-slate-800 font-semibold text-xl">Clearbit</span>
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
          <div className="flex items-center font-semibold text-slate-700 cursor-pointer">
            Home
          </div>
          <div className="font-semibold text-slate-700 cursor-pointer">Notre Fonctionnement</div>
          <div className="flex items-center font-semibold text-slate-700 cursor-pointer">
            Projets
          </div>
        </div>

        <div className="hidden md:flex items-center">
          <Button variant="outline" className="font-semibold text-slate-700 border-slate-700">
            Contactez-nous
          </Button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute z-20 w-full">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center text-slate-700 cursor-pointer">
              Solutions <ChevronDown className="ml-1 h-4 w-4" />
            </div>
            <div className="text-slate-700 cursor-pointer">Notre Fonctionnement</div>
            <div className="text-slate-700 cursor-pointer">Projets</div>
            <Button variant="outline" className="text-slate-700 border-slate-700 w-full">
              Contactez-nous
            </Button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 relative z-10">
        <div className="flex px-6 flex-col lg:flex-row justify-between items-center">
          {/* Hero Text */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 leading-tight mb-6 sm:mb-8">
              Recrutez-nous rapidement
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mb-8 sm:mb-10">
              et lancez votre projet en un rien de temps.
            </p>
            <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto">Contactez-nous</Button>
          </div>

          {/* Dashboard Card */}
          <DotLottieReact
            src="src\assets\animation.json"
            loop
            autoplay
            className="lg:w-1/2"
          />
        </div>

        {/* Partners Section */}
        <div className="mt-16 sm:mt-20 md:mt-24 text-center">
          <p className="text-slate-600 mb-6 sm:mb-8">Nous avons déjà travaillé avec</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="text-slate-500 font-semibold text-lg opacity-70">
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Navbar;