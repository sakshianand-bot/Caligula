import { memo } from 'react'
import { Phone } from 'lucide-react'

const FloatingCTA = memo(function FloatingCTA() {
  return (
    <a 
      href="tel:+1234567890" 
      className="fixed bottom-6 right-6 md:hidden bg-slate-900 text-white p-4 shadow-2xl z-50"
    >
      <Phone className="w-6 h-6" />
    </a>
  )
})

export default FloatingCTA
