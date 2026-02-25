import { memo } from 'react'
import { Phone, ArrowRight } from 'lucide-react'

const ContactCTA = memo(function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-slate-50 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm font-medium text-slate-500 tracking-wide uppercase">Get Started</span>
        <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6 leading-tight">
          Ready to Clear<br />
          <span className="font-semibold">Your Drains?</span>
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
          Call now and get same-day service. Don&apos;t let a small clog become a big problem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="tel:+1234567890" 
            className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 font-medium hover:bg-slate-800 transition-colors"
          >
            <Phone className="w-5 h-5" />
            (123) 456-7890
          </a>
          <a 
            href="#services" 
            className="inline-flex items-center gap-3 border border-slate-300 text-slate-900 px-8 py-4 font-medium hover:border-slate-900 hover:bg-slate-100 transition-colors"
          >
            View Services
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        <p className="mt-8 text-sm text-slate-500">
          24/7 Emergency Service Available • Free Estimates
        </p>
      </div>
    </section>
  )
})

export default ContactCTA
