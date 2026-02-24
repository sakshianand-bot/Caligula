import { memo } from 'react'
import { Shield, Clock, Award, CheckCircle } from 'lucide-react'

const TrustBadges = memo(function TrustBadges() {
  const trustBadges = [
    { icon: <Shield className="w-6 h-6" />, title: "Licensed & Insured", subtitle: "Full protection" },
    { icon: <Clock className="w-6 h-6" />, title: "24/7 Emergency", subtitle: "Always available" },
    { icon: <Award className="w-6 h-6" />, title: "100% Satisfaction", subtitle: "Or we redo it" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Upfront Pricing", subtitle: "No hidden fees" }
  ]

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="text-slate-900">{badge.icon}</div>
              <div>
                <h4 className="font-medium text-slate-900 text-sm">{badge.title}</h4>
                <p className="text-xs text-slate-500">{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default TrustBadges
