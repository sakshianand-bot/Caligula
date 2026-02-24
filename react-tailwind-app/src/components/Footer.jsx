import { memo } from 'react'
import { Phone, Clock, MapPin, ArrowUpRight } from 'lucide-react'

const Footer = memo(function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-white tracking-tight mb-2">Caligula's</h3>
            <p className="text-xs text-slate-500 tracking-wide uppercase mb-6">Drain & Sewer</p>
            <p className="text-sm leading-relaxed">
              Professional drain and sewer cleaning services. Licensed, insured, and 100% satisfaction guaranteed.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 text-sm tracking-wide uppercase">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors inline-flex items-center gap-1">Basic Drain Cleaning <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#services" className="hover:text-white transition-colors inline-flex items-center gap-1">Complete Home Service <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#services" className="hover:text-white transition-colors inline-flex items-center gap-1">Main Sewer Line <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#services" className="hover:text-white transition-colors inline-flex items-center gap-1">Emergency Service <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 text-sm tracking-wide uppercase">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Service Areas</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 text-sm tracking-wide uppercase">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>24/7 Emergency Service</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Serving Local Area</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2024 Caligula's Drain Sewer Cleaning. All rights reserved.</p>
          <p className="text-sm text-slate-500">Licensed & Insured • 100% Satisfaction Guaranteed</p>
        </div>
      </div>
    </footer>
  )
})

export default Footer
