import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Button } from "@/components/ui/button"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Dashboard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);
  // Mock data for partners
  const partners = [
    { name: "Orange digital center", image: "src/assets/orange.png" },
    { name: "fiver", image: "src/assets/fiver.png" },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-br from-purple-100/20 to-indigo-200/30 -z-10"></div>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 relative z-10">
        <div className="flex px-6 flex-col lg:flex-row justify-between items-center">
          {/* Hero Text */}
          <div data-aos="fade-up" className="lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 leading-tight mb-4 sm:mb-8">
              Solutions Techniques Sur Mesure
            </h1>
            <p className="text-3xl sm:text-3xl md:text-3xl text-slate-600 max-w-xl mb-4 sm:mb-10">
            Notre équipe d&apos;experts transforme vos idées en solutions digitales performantes
            </p>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mb-8 sm:mb-10">
            De l&apos;idée au produit, rapidement
            </p>
            <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto">Contactez-nous</Button>
          </div>

          {/* Dashboard Card */}
          <DotLottieReact
            data-aos="fade-up"
            src="src\assets\animation.json"
            loop
            autoplay
            className="lg:w-1/2"
          />
        </div>

        {/* Partners Section */}
        <div data-aos="fade-up" className="mt-16 sm:mt-20 md:mt-24 text-center">
          <p className="text-slate-600 text-xl font-bold mb-8 sm:mb-8">Nous avons collaboré avec</p>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-14 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="text-slate-500 font-semibold text-lg opacity-70">
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="h-12 w-auto object-contain mx-4" 
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard;