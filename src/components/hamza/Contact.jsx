function Contact() {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Section */}
                    <div className="text-left">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
                        <form className="flex flex-col gap-4">
                            <div>
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    placeholder="Your email"
                                />
                            </div>
                            <div>
                                <textarea 
                                    id="message" 
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    rows="4"
                                    placeholder="Your message"
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors self-start"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Right Section */}
                    <div className="h-full">
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
