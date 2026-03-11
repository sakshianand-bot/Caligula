import { memo } from 'react'
import { Phone, Clock, MapPin } from 'lucide-react'

const TopBar = memo(function TopBar() {
  return (
    <div className="bg-slate-900 py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-slate-300">
            <Clock className="w-4 h-4" />
            24/7 Emergency Service
          </span>
          <span className="hidden sm:flex items-center gap-2 text-slate-300">
            <MapPin className="w-4 h-4" />
            Serving Your Local Area
          </span>
        </div>
        <a href="tel:8888168002" className="flex items-center gap-2 font-medium text-white hover:text-slate-300 transition-colors">
          <Phone className="w-4 h-4" />
          888-816-8002
        </a>
      </div>
    </div>
  )
})

export default TopBar
