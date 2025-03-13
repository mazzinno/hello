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
            className="w-full h-[600px] bg-cover bg-left" 
            style={{ backgroundImage: "url('https://placehold.co/1200x600')" }}
        >
            <div className="max-w-[1200px] mx-auto px-4 h-full flex flex-col justify-between">
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
                            {[...Array(7)].map((_, i) => (
                                <CarouselItem key={i} className="basis-[80%] sm:basis-[60%] md:basis-[30%]">
                                    <div 
                                        className="h-36 w-full bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
                                        style={{ backgroundImage: "url('https://placehold.co/344x144')" }}
                                    />
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
