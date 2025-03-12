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
                            Innovative Solutions for Modern Challenges
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            We specialize in creating cutting-edge digital solutions that drive business growth. 
                            Our team combines technical expertise with creative design to deliver exceptional results.
                        </p>
                    </div>

                    {/* Right Section - Image */}
                    <div data-aos="fade-up" className="w-full md:w-1/3">
                        <img 
                            src="https://placehold.co/400x300" 
                            alt="Section 5" 
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section3;
