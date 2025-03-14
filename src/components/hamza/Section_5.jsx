import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Section5() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true, 
        });
      }, []);
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Mobile Text - Top */}
                    <div data-aos="fade-up" className="w-full md:hidden">
                        <h2 className="text-4xl font-bold mb-4 max-w-[20ch] leading-tight">
                            Rencontrez Notre Équipe d'Experts
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Notre équipe de professionnels chevronnés réunit une expertise diversifiée en développement web,
                            design UI/UX et stratégie numérique pour créer des solutions impactantes pour votre entreprise.
                        </p>
                    </div>

                    {/* Left Section - Image */}
                    <div data-aos="fade-up" className="w-full md:w-1/3">
                        <div 
                            className="w-full h-[250px] bg-cover bg-center rounded-lg shadow-md"
                            style={{ backgroundImage: "url('src/assets/teaaam.png')" }}
                        ></div>
                    </div>

                    {/* Desktop Text - Right */}
                    <div data-aos="fade-up" className="hidden md:block w-full md:w-2/3">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-[20ch] leading-tight">
                            Rencontrez Notre Équipe d'Experts
                        </h2>
                        <p className="text-gray-600 text-base leading-relaxed">
                            Notre équipe de professionnels expérimentés combine une expertise diversifiée en développement web,
                            design UI/UX et stratégie numérique pour créer des solutions percutantes pour votre entreprise.
                            Avec des années d'expérience dans divers secteurs, nous nous engageons à fournir des solutions
                            innovantes et sur mesure qui génèrent des résultats concrets.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section5;
