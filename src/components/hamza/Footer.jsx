import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate()
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true, 
        });
      }, []);
    return (
        <footer className="pt-12 bg-gradient-to-br from-purple-100/20 to-indigo-200/30">
            <div data-aos="fade-up" className="h-auto md:h-80 w-full p-6 flex flex-col md:flex-row justify-between max-w-[1200px] mx-auto gap-8 md:gap-0">
                <div className="flex flex-col items-start">
                    <h2 className="text-3xl md:text-5xl font-bold"><span className="text-blue-500">Dev</span>Futur.</h2>
                    <h4 className="text-sm md:text-base mt-2">
                        Nous transformons les idées en solutions numériques innovantes pour propulser votre entreprise vers l'avenir.
                    </h4>
                </div>
                <div className="flex flex-col justify-end">
                    <div className="flex flex-col md:flex-row gap-4 text-sm md:text-base">
                        <p className="hover:text-gray-600 cursor-pointer" onClick={() => navigate('/')}>Accueil</p>
                        <p className="hover:text-gray-600 cursor-pointer" onClick={() => navigate('/about')}>À propos</p>
                        <p className="hover:text-gray-600 cursor-pointer" onClick={() => navigate('/contact')}>Contact</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
