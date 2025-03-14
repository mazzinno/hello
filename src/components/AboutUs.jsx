import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./daynasor/Navbar";
import Footer from "./hamza/Footer";

const AboutUs = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4">
          <div data-aos="fade-up" className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 md:mb-6">
              À propos de nous
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Nous sommes une équipe passionnée de développeurs et de designers dédiés à la création de solutions numériques innovantes qui transforment les entreprises.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 md:mb-6">
                Notre histoire
              </h2>
              <p className="text-slate-600 mb-3 md:mb-4">
                Fondée en 2020, notre agence a rapidement évolué pour devenir un acteur clé dans le domaine du développement web. Nous avons commencé comme une petite équipe de passionnés et avons grandi grâce à notre engagement envers l'excellence et l'innovation.
              </p>
              <p className="text-slate-600">
                Aujourd'hui, nous collaborons avec des entreprises de toutes tailles, des startups aux grandes entreprises, pour créer des solutions numériques qui font la différence.
              </p>
            </div>
            <div data-aos="fade-left">
              <img 
                src="src/assets/team.jpg" 
                alt="Notre équipe" 
                className="rounded-lg shadow-md w-[600px] h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 md:mb-6">
              Nos valeurs
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Ce qui nous guide dans chaque projet que nous entreprenons
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div data-aos="fade-up" className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-3 md:mb-4">Innovation</h3>
              <p className="text-slate-600">
                Nous repoussons constamment les limites de la technologie pour offrir des solutions avant-gardistes.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-3 md:mb-4">Qualité</h3>
              <p className="text-slate-600">
                Nous nous engageons à fournir un travail de la plus haute qualité dans chaque projet.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-3 md:mb-4">Collaboration</h3>
              <p className="text-slate-600">
                Nous croyons en la puissance du travail d'équipe et de la communication ouverte.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
