import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Section7() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true, 
        });
      }, []);
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold max-w-[16ch] leading-tight mb-6">
                        Transformer les Idées en Numérique
                    </h2>
                    <p data-aos="fade-up" className="text-gray-600 text-sm md:text-base leading-relaxed">
                        Notre équipe d'experts se spécialise dans la création de solutions innovantes qui stimulent la croissance des entreprises.
                        Nous combinons une technologie de pointe avec un design créatif pour offrir des résultats exceptionnels.
                        Laissez-nous vous aider à transformer votre vision en un produit numérique réussi.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Section7;
