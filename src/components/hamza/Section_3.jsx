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
                            Our Mission: Empowering Digital Transformation
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            At our core, we're driven by a mission to revolutionize the digital landscape. We empower businesses to thrive in the digital age by crafting innovative web solutions that combine cutting-edge technology with user-centric design. Our vision is to be the catalyst for digital transformation, helping businesses unlock their full potential through bespoke web development services.
                        </p>
                    </div>

                    {/* Right Section - Image */}
                    <div data-aos="fade-up" className="w-full md:w-1/3">
                        <img 
                            src="https://placehold.co/400x300" 
                            alt="Digital Transformation Illustration" 
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section3;
