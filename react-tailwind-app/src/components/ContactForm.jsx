import { memo, useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const ContactForm = memo(function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Thank you for your message! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
    setIsSubmitting(false)
  }

  return (
    <section id="contact-form" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info - Dark */}
          <div className="text-white">
            <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 mb-8 leading-tight">
              Get in<br />
              <span className="font-semibold text-white">Touch Today</span>
            </h2>
            <p className="text-lg text-slate-300 mb-12 leading-relaxed">
              Have questions or need to schedule service? Reach out to our team and we'll respond promptly.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                {/* Changed rounded-lg to rounded-none */}
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-none flex items-center justify-center flex-shrink-0 border border-white/20">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <p className="text-slate-300">(123) 456-7890</p>
                  <p className="text-sm text-slate-400 mt-1">24/7 Emergency Service</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-none flex items-center justify-center flex-shrink-0 border border-white/20">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-slate-300">info@drainexperts.com</p>
                  <p className="text-sm text-slate-400 mt-1">Quick response guaranteed</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-none flex items-center justify-center flex-shrink-0 border border-white/20">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Service Area</h3>
                  <p className="text-slate-300">Greater Metro Area</p>
                  <p className="text-sm text-slate-400 mt-1">30-mile radius from downtown</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-none flex items-center justify-center flex-shrink-0 border border-white/20">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Business Hours</h3>
                  <p className="text-slate-300">Mon-Fri: 8AM-6PM</p>
                  <p className="text-slate-300">Sat: 9AM-4PM</p>
                  <p className="text-sm text-slate-400 mt-1">24/7 Emergency Available</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Contact Form - Light */}
          <div>
            {/* Changed rounded-2xl to rounded-none */}
            <div className="bg-white p-8 rounded-none shadow-2xl">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 uppercase tracking-tight">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-900 uppercase mb-2">
                      Name *
                    </label>
                    {/* Changed rounded-lg to rounded-none */}
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-none focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-900 uppercase mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-none focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-900 uppercase mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-none focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-slate-900 uppercase mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-none focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="basic-drain">Basic Drain Cleaning</option>
                    <option value="complete-home">Complete Home Service</option>
                    <option value="main-sewer">Main Sewer Line</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-900 uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-none focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all resize-none"
                    placeholder="Describe your issue or service needs..."
                  />
                </div>
                
                {/* Changed rounded-lg to rounded-none and removed gradient for a "solid" block look */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 text-white py-4 px-6 rounded-none font-bold uppercase tracking-widest hover:bg-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-none animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default ContactForm