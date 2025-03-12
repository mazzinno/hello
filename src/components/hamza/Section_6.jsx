import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"

function Section6() {
    return (
        <section 
            className="w-full h-[600px] bg-cover bg-left" 
            style={{ backgroundImage: "url('https://placehold.co/1200x600')" }}
        >
            <div className="max-w-[1200px] mx-auto px-4 h-full flex flex-col justify-between">
                {/* Top Section */}
                <div className="pt-12 text-left">
                    <h2 className="text-5xl font-bold text-white mb-4">Our Work</h2>
                    <p className="text-gray-200 max-w-[50ch]">
                        Explore our portfolio of successful projects that showcase our expertise in digital transformation.
                    </p>
                </div>

                {/* Bottom Carousel */}
                <div className="pb-12">
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
