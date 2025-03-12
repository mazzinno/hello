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
                            Meet Our Expert Team
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our team of seasoned professionals brings together diverse expertise in web development, 
                            UI/UX design, and digital strategy to create impactful solutions for your business.
                        </p>
                    </div>

                    {/* Left Section - Image */}
                    <div data-aos="fade-up" className="w-full md:w-1/3">
                        <img 
                            src="https://placehold.co/400x300" 
                            alt="Our Team" 
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>

                    {/* Desktop Text - Right */}
                    <div data-aos="fade-up" className="hidden md:block w-full md:w-2/3">
                        <h2 className="text-4xl font-bold mb-4 max-w-[20ch] leading-tight">
                            Meet Our Expert Team
                        </h2>
                        <p className="text-gray-600 text-base leading-relaxed">
                            Our team of seasoned professionals brings together diverse expertise in web development, 
                            UI/UX design, and digital strategy to create impactful solutions for your business. 
                            With years of experience across various industries, we're committed to delivering 
                            innovative and tailored solutions that drive real results.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section5;
