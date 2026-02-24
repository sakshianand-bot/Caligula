import { memo } from 'react'
import { Droplets, Home, Wrench, ArrowRight } from 'lucide-react'

const Services = memo(function Services() {
  const services = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Basic Drain Cleaning",
      price: "$97.77",
      description: "Single drain clearing with camera inspection available. Perfect for isolated clogs.",
      features: ["Single drain service", "Camera inspection", "Same-day scheduling"],
      image: "bg-slate-200"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Complete Home Service",
      price: "$177.77",
      description: "Up to 4 openings - sink, tub, toilet, and shower basic cleaning.",
      features: ["4 drain openings", "Whole house coverage", "Priority scheduling"],
      featured: true,
      image: "bg-slate-300"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Main Sewer Line",
      price: "$99.95",
      priceNote: "Maintenance",
      priceSecondary: "$377.77",
      description: "Severe blockages and main line hydro jetting with root removal.",
      features: ["Hydro jetting", "Root removal", "Permanent solutions"],
      image: "bg-slate-400"
    }
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <span className="text-sm font-medium text-slate-500 tracking-wide uppercase">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mt-4 leading-tight">
              Our Services<br />& Pricing
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg text-slate-600 max-w-md">
              Transparent pricing with no hidden fees. Choose the service that fits your needs.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group">
              {/* Image placeholder */}
              <div className={`${service.image} aspect-[4/3] relative overflow-hidden mb-6`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>
                {service.featured && (
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                    Popular
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <div className="text-right">
                    <p className="text-2xl font-semibold text-slate-900">{service.price}</p>
                    {service.priceNote && <p className="text-xs text-slate-500">{service.priceNote}</p>}
                  </div>
                </div>
                
                {service.priceSecondary && (
                  <div className="flex justify-between items-center text-sm py-2 border-t border-slate-100">
                    <span className="text-slate-500">Severe blockage</span>
                    <span className="font-semibold text-slate-900">{service.priceSecondary}</span>
                  </div>
                )}
                
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="tel:+1234567890" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors pt-4"
                >
                  Book Service
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Services
