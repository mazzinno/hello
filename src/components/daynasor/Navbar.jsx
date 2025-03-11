import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'


const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Partners data matching the screenshot
  const partners = [
    { name: "Orange" },
    { name: "tisalat" },
    { name: "webdev.ma hhh" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100 relative overflow-hidden font-sans">
      {/* Background gradient overlay */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-indigo-200/30 -z-10"></div>
      
      {/* Navigation */}
      <header>
        <nav className="flex justify-between items-center py-6 px-6 md:px-16 lg:px-24 relative z-10">
          <div className="flex items-center">
            <div className="bg-blue-500 w-8 h-8 rounded mr-2"></div>
            <span className="text-slate-800 font-semibold text-xl">Clearbit</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 lg:space-x-10">
            <div className="flex items-center text-slate-700 cursor-pointer font-medium">
              Solutions <ChevronDown className="ml-1 h-4 w-4" />
            </div>
            <div className="text-slate-700 cursor-pointer font-medium">Notre Fonctionnement</div>
            <div className="flex items-center text-slate-700 cursor-pointer font-medium">
              Projects
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-slate-800 hover:bg-slate-900 text-white rounded-md font-medium">
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
              <div className="pt-4 flex flex-col space-y-3">
                <Button className="bg-slate-800 hover:bg-slate-900 text-white w-full">
                  Contactez-nous
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-24 relative z-10">
        <section className="hero-section max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-16">
            {/* Hero Text */}
            <div className="lg:w-1/2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 leading-tight mb-6">
                Predictable
                <br />
                growth starts
                <br />
                here.
              </h1>
              <p className="text-lg text-slate-600 max-w-xl mb-10">
                Clearbit gives you full context on every person and company in your target market so you can reach and convert more customers, more predictably.
              </p>
              <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-4 text-lg font-medium rounded-md">
                Get Started
              </Button>
            </div>

            {/* Dashboard Card */}
            <div className="lg:w-1/2 w-full mt-12 lg:mt-0">
                <DotLottieReact
                src="src\assets\animation.json"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="partners-section mt-24 text-center">
          <p className="text-slate-600 mb-10 text-sm">
            Clearbit is behind the worlds fastest-growing companies
          </p>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-16 items-center opacity-70">
            {partners.map((partner, index) => (
              <div key={index} className="text-slate-600 font-medium text-lg">
                {partner.name}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default LandingPage;