import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { useEffect } from "react";
function Section6() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true, 
        });
      }, []);
    return (
        <section 
            className="w-full h-[600px] bg-cover bg-left relative bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100" 
            style={{ backgroundImage: "url('src/assets/developers.jpg')" }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
            <div className="max-w-[1200px] mx-auto px-4 h-full flex flex-col justify-between relative">
                {/* Top Section */}
                <div data-aos="fade-up" className="pt-12 text-left">
                    <h2 className="text-5xl font-bold text-white mb-4">Nos Réalisations</h2>
                    <p className="text-gray-200 max-w-[50ch]">
                        Découvrez notre portfolio de projets réussis qui mettent en valeur notre expertise en transformation numérique.
                    </p>
                </div>

                {/* Bottom Carousel */}
                <div data-aos="fade-up" className="pb-12">
                    <Carousel
                        opts={{
                            align: "start",
                            dragFree: true,
                        }}
                    >
                        <CarouselContent>
                            {[
                                { img: "src/assets/projects/groupetoy.png", link: "https://groupetoy.com/" },
                                { img: "src/assets/projects/agriobentions.png", link: "https://www.agriobtentions.fr/" },
                                { img: "src/assets/projects/agrisanterre.png", link: "https://www.agrisanterre.com/" },
                                { img: "src/assets/projects/bertinaminel.png", link: "https://www.bertinaminel-architecture.com/" },
                                { img: "src/assets/projects/createursdintereur.png", link: "https://www.createursdinterieur.com/" },
                                { img: "src/assets/projects/hddesign.png", link: "https://www.hddesign.fr/" },
                                { img: "src/assets/projects/hydralians.png", link: "https://www.hydralians.fr/" }
                            ].map((project, i) => (
                                <CarouselItem key={i} className="basis-[80%] sm:basis-[60%] md:basis-[30%]">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <div 
                                            className="w-full bg-black rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden"
                                            style={{ aspectRatio: '16/9' }}
                                        >
                                            <img
                                                src={project.img}
                                                alt="Project"
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
                                    </a>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default Section6;
