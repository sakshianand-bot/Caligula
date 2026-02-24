import { memo } from 'react'
import { Award, CheckCircle } from 'lucide-react'

const Guarantee = memo(function Guarantee() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 mb-8">
          <Award className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
          Our 100%<br />
          <span className="font-semibold">Satisfaction Guarantee</span>
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
          With CALIGULAS, you get 100% satisfaction guaranteed, or we will come back and 
          redo the entire job at no extra charge. We stand behind our work completely.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <CheckCircle className="w-5 h-5 text-slate-500" />
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <CheckCircle className="w-5 h-5 text-slate-500" />
            <span>Upfront Pricing</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <CheckCircle className="w-5 h-5 text-slate-500" />
            <span>No Hidden Fees</span>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Guarantee
