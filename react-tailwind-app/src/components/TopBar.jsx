import { memo } from 'react'
import { Phone, Clock, MapPin } from 'lucide-react'

const TopBar = memo(function TopBar() {
  return (
    <div className="bg-white py-2 px-4 border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            24/7 Emergency Service
          </span>
          <span className="hidden sm:flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Serving Your Local Area
          </span>
        </div>
        <a href="tel:+1234567890" className="flex items-center gap-2 font-medium text-slate-900 hover:text-slate-700 transition-colors">
          <Phone className="w-4 h-4" />
          (123) 456-7890
        </a>
      </div>
    </div>
  )
})

export default TopBar
