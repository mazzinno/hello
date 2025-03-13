import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function Contact() {
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true, 
        });
      }, []);

    const validateForm = (formData) => {
        const newErrors = {};
        
        // Name validation
        if (!formData.get('name')?.trim()) {
            newErrors.name = 'Le nom est requis';
        } else if (formData.get('name').length < 2) {
            newErrors.name = 'Le nom doit contenir au moins 2 caractères';
        }

        // Email validation
        if (!formData.get('email')?.trim()) {
            newErrors.email = 'L\'email est requis';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get('email'))) {
            newErrors.email = 'Veuillez entrer une adresse email valide';
        }

        // Message validation
        if (!formData.get('message')?.trim()) {
            newErrors.message = 'Le message est requis';
        } else if (formData.get('message').length < 10) {
            newErrors.message = 'Le message doit contenir au moins 10 caractères';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const formData = new FormData(e.target);
        
        if (!validateForm(formData)) {
            setIsSubmitting(false);
            return;
        }
        
        try {
            const response = await fetch('/api/send_email.php', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            
            if (result.status === 'success') {
                alert(result.message);
                e.target.reset();
                setErrors({});
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Une erreur s\'est produite lors de l\'envoi du message.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Section */}
                    <div data-aos="fade-up" className="text-left">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contactez-nous</h2>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div>
                                <input 
                                    type="text" 
                                    name="name"
                                    className={`w-full p-2 border ${
                                        errors.name ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                                    placeholder="Votre nom"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    name="email"
                                    className={`w-full p-2 border ${
                                        errors.email ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                                    placeholder="Votre email"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <textarea 
                                    name="message"
                                    className={`w-full p-2 border ${
                                        errors.message ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                                    rows="4"
                                    placeholder="Votre message"
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            </div>
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-6 py-2 ${
                                    isSubmitting ? 'bg-blue-300' : 'bg-blue-500'
                                } text-white rounded-lg hover:bg-blue-600 transition-colors self-start`}
                            >
                                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                            </button>
                        </form>
                    </div>

                    {/* Right Section */}
                    <div data-aos="fade-up" className="h-full">
                        <div className="h-full w-full rounded-lg overflow-hidden shadow-lg">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617539784201!2d-73.9877316845936!3d40.74844447932801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1691520000000!5m2!1sen!2sus" 
                                width="100%"
                                height="100%"
                                className="border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
