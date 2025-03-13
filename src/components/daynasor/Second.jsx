import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Second = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="w-full py-3 md:py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
      <h1 data-aos="fade-up" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 text-center">
        Comment nous travaillons
      </h1>
        <p data-aos="fade-up" className="text-muted-foreground text-sm md:text-base max-w-3xl mx-auto mb-4"></p>
        <p data-aos="fade-up" className="text-muted-foreground text-sm md:text-base max-w-3xl mx-auto mb-12">
        Nous concevons des sites web performants et sur mesure,
        offrant aux entreprises une présence en ligne optimisée pour attirer, engager et convertir leurs clients
        </p>
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Speed Card */}
          <div className="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Rapidité</h3>
            <p className="text-gray-600 text-center">
              Un site web fonctionnel en un temps record.
            </p>
          </div>

          {/* Quality Card */}
          <div className="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <polyline points="17 11 19 13 23 9"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Qualité</h3>
            <p className="text-gray-600 text-center">
              Un design soigné et une performance optimale.
            </p>
          </div>

          {/* Fair Pricing Card */}
          <div className="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Prix</h3>
            <p className="text-gray-600 text-center">
              Des solutions adaptées à votre budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Second;