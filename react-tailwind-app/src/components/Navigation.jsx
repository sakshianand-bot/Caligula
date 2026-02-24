import { memo, useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = memo(function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-semibold text-slate-900 tracking-tight">Caligula's</h1>
              <p className="text-xs text-slate-500 tracking-wide uppercase">Drain & Sewer</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">About</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Reviews</a>
            <a href="#contact" className="bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-800 transition-colors">
              Get Quote
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-6 space-y-4">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-600 hover:text-slate-900 font-medium">Services</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-600 hover:text-slate-900 font-medium">About</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-600 hover:text-slate-900 font-medium">Reviews</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-slate-900 text-white px-6 py-3 font-medium">Get Quote</a>
          </div>
        </div>
      )}
    </nav>
  )
})

export default Navigation
