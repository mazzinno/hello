import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Section3() {

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
                    {/* Left Section - Text Content */}
                    <div data-aos="fade-up" className="w-full md:w-2/3">
                        <h2 className="text-4xl md:text-4xl font-bold mb-4 max-w-[20ch] leading-tight">
                            Notre Mission : Accélérer la Transformation Numérique
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Au cœur de notre action, nous sommes animés par une mission : révolutionner le paysage numérique. Nous permettons aux entreprises de prospérer à l'ère digitale en créant des solutions web innovantes qui allient technologie de pointe et design centré sur l'utilisateur. Notre vision est d'être le catalyseur de la transformation numérique, aidant les entreprises à libérer leur plein potentiel grâce à des services de développement web sur mesure.
                        </p>
                    </div>

                    {/* Right Section - Image */}
                    <div data-aos="fade-up" className="w-full md:w-1/3">
                        <img 
                            src="https://placehold.co/400x300" 
                            alt="Illustration de la Transformation Numérique" 
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section3;
