import { memo } from 'react'
import { Target, Eye, Award, Users } from 'lucide-react'

const About = memo(function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-slate-500 tracking-wide uppercase">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mt-4 mb-8 leading-tight">
              Your Trusted Local<br />
              <span className="font-semibold">Drain & Sewer</span> Experts
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Caligula&apos;s, we believe every family deserves clean, healthy drains without breaking the bank. 
              Our mission is to protect your home from the nasty odors, germs, and costly damage that come 
              from neglected drain systems.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We help homeowners maintain their drain and sewer lines through affordable regular service, 
              preventing small issues from becoming expensive emergencies.
            </p>
            
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-900 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-slate-900">24/7</p>
                  <p className="text-sm text-slate-500">Emergency Service</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-200 flex items-center justify-center">
                  <Users className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-slate-900">100%</p>
                  <p className="text-sm text-slate-500">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Our Vision</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To ensure you and your loved ones a full, safe, and healthy enjoyment of your home, 
                    without the unwanted, nasty odor that comes from every dirty drain.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Our Goal</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Help every family maintain clean drains and sewer lines by providing regular service 
                    at an affordable investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default About
