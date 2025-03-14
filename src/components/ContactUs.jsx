import { useState, useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./daynasor/Navbar"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

const ContactUs = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 min-h-screen p-4">
      <Navbar />
      <div className="flex items-center justify-center pt-5">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 relative">
          {/* Decorative shape */}
          <div className="absolute left-0 top-1/4 w-32 h-32 rounded-full bg-orange-300 -z-10 hidden md:block"></div>

          {/* Contact form */}
          <Card data-aos="fade-right" className="w-full lg:w-1/2 p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-800 mb-4">Travaillons ensemble</h1>
                <p className="text-slate-600">
                Merci de partager les détails de votre projet ci-dessous. Notre équipe est prête à transformer votre vision digitale en réalité.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-slate-600">
                    Nom<span className="text-orange-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nom et Prénom"
                    required
                    className="w-full bg-slate-50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-slate-600">
                    Numéro de téléphone<span className="text-orange-500">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Votre numéro de téléphone"
                    required
                    className="w-full bg-slate-50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-slate-600">
                    Email<span className="text-orange-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre email"
                    required
                    className="w-full bg-slate-50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-slate-600">
                    Message<span className="text-orange-500">*</span>
                  </label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Parlez-nous de votre site, des exigences du projet et de la date de début souhaitée."
                      required
                      className="min-h-32 w-full bg-slate-50"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 border-transparent shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-indigo-500/50 px-6 py-4 text-lg"
                  >
                    Soumettre le formulaire
                  </Button>
                </div>
              </form>
            </div>
          </Card>

          {/* Benefits and FAQ section */}
          <div data-aos="fade-left" className="w-full lg:w-1/2 p-4 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800">En travaillant avec nous, vous obtiendrez :</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-1 flex-shrink-0 rounded-full bg-orange-100 p-1">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <p className="text-slate-700">Une expertise technique avec une expérience éprouvée dans l&apos;industrie</p>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-1 flex-shrink-0 rounded-full bg-orange-100 p-1">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <p className="text-slate-700">Une feuille de route de développement claire et un calendrier transparent</p>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-1 flex-shrink-0 rounded-full bg-orange-100 p-1">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <p className="text-slate-700">Des solutions personnalisées adaptées aux besoins spécifiques de votre entreprise</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 flex-shrink-0 rounded-full bg-orange-100 p-1">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <p className="text-slate-700">Un support continu et une optimisation après le lancement</p>
                </div>
                
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="availability">
                <AccordionTrigger className="text-lg font-semibold text-slate-800">
                  Quelle est votre disponibilité actuelle ?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                Nous acceptons actuellement de nouveaux projets avec un délai d&apos;intégration de 1 à 2 semaines
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="work-process">
                <AccordionTrigger className="text-lg font-semibold text-slate-800">
                  Comment travaillez-vous avec les clients ?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                Nous commençons par un appel de découverte, créons un plan de projet détaillé, puis travaillons en sprints agiles avec des mises à jour régulières                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="after-submit">
                <AccordionTrigger className="text-lg font-semibold text-slate-800">
                  Que se passe-t-il après la soumission ?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                → Vous recevrez une réponse dans les 24 heures pour planifier une consultation initiale
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;