import { memo } from 'react'
import { AlertTriangle } from 'lucide-react'

const UrgencySection = memo(function UrgencySection() {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 tracking-wide uppercase mb-6">
            <AlertTriangle className="w-4 h-4" />
            Don&apos;t Wait Until It&apos;s Too Late
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 leading-tight">
            If You Wait, You<br />
            <span className="font-semibold">Pay. Big Time.</span>
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            A clogged drain today becomes a $5,000+ sewer repair tomorrow. 
            Act now and get up to four drains cleaned: sink, tub, toilet, and shower of your choice for only $177.77.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 text-center border border-slate-200">
              <div className="text-3xl font-semibold text-slate-900 mb-1">$97.77</div>
              <div className="text-sm text-slate-500">Basic Service</div>
            </div>
            <div className="bg-slate-900 p-6 text-center text-white relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-slate-900 px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                Best Value
              </div>
              <div className="text-3xl font-semibold mb-1">$177.77</div>
              <div className="text-sm text-slate-400">4 Drains: Sink, Tub, Toilet & Shower</div>
            </div>
            <div className="bg-white p-6 text-center border border-slate-200">
              <div className="text-3xl font-semibold text-slate-900 mb-1">$377.77</div>
              <div className="text-sm text-slate-500">Severe Blockage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default UrgencySection
