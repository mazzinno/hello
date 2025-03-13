import { useState } from "react"
import Navbar from "./daynasor/Navbar"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
          <Card className="w-full lg:w-1/2 p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-800 mb-4">Travaillons ensemble</h1>
                <p className="text-slate-600">
                  Merci de ne pas me contacter si vous vendez des liens, je ne suis pas intéressé et vous ne recevrez pas de réponse.
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
                    placeholder="Jean Dupont"
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
                    placeholder="jean@dupont.com"
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
                      placeholder="Parlez-moi de votre site, des exigences du projet et de la date de début souhaitée."
                      required
                      className="min-h-32 w-full bg-slate-50"
                    />
                    <div className="text-xs text-slate-500 mt-1">
                      Votre situation actuelle, où vous voulez être et ce dont vous avez besoin pour y arriver
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" className="bg-orange-400 hover:bg-orange-500 text-white rounded-full px-6">
                    Soumettre le formulaire
                  </Button>
                </div>
              </form>
            </div>
          </Card>

          {/* Benefits and FAQ section */}
          <div className="w-full lg:w-1/2 p-4 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800">En travaillant avec moi, vous obtiendrez :</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-1 flex-shrink-0 rounded-full bg-orange-100 p-1">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <p className="text-slate-700">Un expert SEO avec une expérience de niveau entreprise</p>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-1 flex-shrink-0 rounded-full bg-orange-100 p-1">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <p className="text-slate-700">Des instructions claires et concises pour augmenter votre trafic organique</p>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-1 flex-shrink-0 rounded-full bg-orange-100 p-1">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <p className="text-slate-700">Un expert SEO polyvalent avec de l'expérience en UX, CRO, design et développement</p>
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="availability">
                <AccordionTrigger className="text-lg font-semibold text-slate-800">
                  Quelle est votre disponibilité actuelle ?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Je suis actuellement disponible pour de nouveaux projets à partir du mois prochain. Je travaille généralement avec 3-4 clients à la fois pour assurer un service de qualité.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="work-process">
                <AccordionTrigger className="text-lg font-semibold text-slate-800">
                  Comment travaillez-vous avec les clients ?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Je commence par une analyse approfondie de vos performances SEO actuelles, puis je développe une stratégie personnalisée. Nous aurons des points de contrôle réguliers pour examiner les progrès et ajuster si nécessaire.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="after-submit">
                <AccordionTrigger className="text-lg font-semibold text-slate-800">
                  Que se passe-t-il après la soumission ?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Je vais examiner vos informations et vous répondrai dans les 24 à 48 heures pour planifier un premier appel de consultation où nous pourrons discuter de vos besoins plus en détail.
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