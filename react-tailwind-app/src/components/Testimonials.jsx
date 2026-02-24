import { memo } from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = memo(function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Local Homeowner",
      rating: 5,
      text: "Caligula's saved us from a major backup! Professional, fast, and the price was exactly what they quoted. Highly recommend!"
    },
    {
      name: "Mike R.",
      location: "Property Manager",
      rating: 5,
      text: "We use them for all our properties. Reliable, always on time, and they get the job done right the first time. Great value!"
    },
    {
      name: "Jennifer K.",
      location: "Local Homeowner",
      rating: 5,
      text: "The $177 complete home service is a steal! They cleaned every drain in our house and even gave us maintenance tips."
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <span className="text-sm font-medium text-slate-500 tracking-wide uppercase">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mt-4 leading-tight">
              What Our<br />
              <span className="font-semibold">Customers Say</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg text-slate-600">
              Don&apos;t just take our word for it. Here&apos;s what homeowners in your area are saying about us.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-slate-50 p-8 relative">
              <Quote className="w-8 h-8 text-slate-200 absolute top-6 right-6" />
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-slate-900 fill-slate-900" />
                ))}
              </div>
              <p className="text-slate-700 mb-8 leading-relaxed">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <div className="w-12 h-12 bg-slate-900 flex items-center justify-center text-white font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Testimonials
