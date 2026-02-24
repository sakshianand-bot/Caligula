import { memo } from 'react'
import { Phone, ArrowRight, Star, Shield, Clock } from 'lucide-react'

const Hero = memo(function Hero() {
  return (
    <section className="relative bg-white min-h-[90vh] flex items-center">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 tracking-wide uppercase mb-6">
              <Shield className="w-4 h-4" />
              Licensed & Insured
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 leading-[1.1] mb-8">
              Expert Drain<br />
              <span className="font-semibold">& Sewer</span><br />
              Services
            </h1>
            
            <p className="text-lg text-slate-600 max-w-md mb-10 leading-relaxed">
              Professional solutions for residential and commercial properties. 
              Fast, reliable, and guaranteed workmanship.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+1234567890" 
                className="inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 font-medium hover:bg-slate-800 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center gap-3 border border-slate-300 text-slate-900 px-8 py-4 font-medium hover:border-slate-900 hover:bg-slate-50 transition-colors"
              >
                View Services
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-12 mt-12 pt-12 border-t border-slate-200">
              <div>
                <p className="text-3xl font-semibold text-slate-900">15+</p>
                <p className="text-sm text-slate-500 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-slate-900">500+</p>
                <p className="text-sm text-slate-500 mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-slate-900">24/7</p>
                <p className="text-sm text-slate-500 mt-1">Emergency Service</p>
              </div>
            </div>
          </div>
          
          {/* Right - Property Card Style */}
          <div className="relative">
            <div className="absolute -inset-4 bg-slate-100 -z-10" />
            
            <div className="bg-white shadow-2xl">
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <p className="text-white font-medium">Complete Home Service</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                  Special Offer
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">Full Drain Cleaning</h3>
                    <p className="text-slate-500 mt-1">Up to 4 drain openings</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-semibold text-slate-900">$177<span className="text-lg">.77</span></p>
                    <p className="text-sm text-slate-400">Starting price</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-slate-500 mb-6 py-4 border-y border-slate-100">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Same-day service
                  </span>
                  <span className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    5.0 rated
                  </span>
                </div>
                
                <a 
                  href="tel:+1234567890" 
                  className="block w-full text-center bg-slate-900 text-white py-4 font-medium hover:bg-slate-800 transition-colors"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Hero
