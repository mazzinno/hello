import { Button } from "@/components/ui/button"
import { Image } from "lucide-react"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Second = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true, 
      });
    }, []);
    return (
        <section className="w-full py-12 md:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
          <div className="container px-4 md:px-6 mx-auto max-w-5xl text-center">
            <h1 data-aos="fade-up" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Comment nous travaillons
            </h1>
    
            <p data-aos="fade-up" className="text-muted-foreground text-sm md:text-base max-w-3xl mx-auto mb-4">
              
            </p>
    
            <p data-aos="fade-up" className="text-muted-foreground text-sm md:text-base max-w-3xl mx-auto mb-12">
              Clearbits Activation Platform gives marketing and revenue teams a rich, always-fresh data foundation and
              solutions for converting demand, and accelerating revenue growth.
            </p>
    
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Metric 1 */}
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-3xl font-bold">Contactez-nous</span>
                <span className="text-sm text-muted-foreground mt-2">
                  increase in new pipeline
                  <br />
                  generated
                </span>
                <div className="mt-4">
                  <Image
                    src="/placeholder.svg?height=30&width=120"
                    alt="Chargebee logo"
                    width={120}
                    height={30}
                    className="opacity-80"
                  />
                  <span className="italic font-medium">Chargebee</span>
                </div>
              </div>
    
              {/* Metric 2 */}
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-3xl font-bold">Ndiro réunion</span>
                <span className="text-sm text-muted-foreground mt-2">
                  increase in form
                  <br />
                  conversions
                </span>
                <div className="mt-4">
                  <Image
                    src="/placeholder.svg?height=30&width=120"
                    alt="GONG logo"
                    width={120}
                    height={30}
                    className="opacity-80"
                  />
                  <span className="italic font-medium">GONG</span>
                </div>
              </div>
    
              {/* Metric 3 */}
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-3xl font-bold">Ara l3a9a abro</span>
                <span className="text-sm text-muted-foreground mt-2">
                  decrease in cost
                  <br />
                  per lead
                </span>
                <div className="mt-4">
                  <Image
                    src="/placeholder.svg?height=30&width=120"
                    alt="Lattice logo"
                    width={120}
                    height={30}
                    className="opacity-80"
                  />
                  <span className="italic font-medium">Lattice</span>
                </div>
              </div>
            </div>
    
            <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-2 rounded-md">
              Explore the platform
            </Button>
          </div>
        </section>
      )
    }

export default Second;