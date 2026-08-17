'use client'
import { useState } from 'react'

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

export default function EstimateForm({ dark = false }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1500)
  }

  const inputClass = `w-full px-4 py-3 text-sm border outline-none transition-all focus:border-accent ${
    dark
      ? 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/15'
      : 'bg-white border-gray-200 text-charcoal placeholder-gray-400 focus:border-navy-500'
  }`

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{background:'#c8a96e'}}>
          <span className="text-white"><CheckIcon /></span>
        </div>
        <h3 className={`font-display text-2xl font-bold mb-2 ${dark ? 'text-white' : 'text-navy-700'}`} style={dark ? {} : {color:'#1e3a5f'}}>
          Request Received!
        </h3>
        <p className={`text-sm ${dark ? 'text-white/70' : 'text-gray-500'}`}>
          We'll get back to you within 24 hours with your free estimate.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="name" value={form.name} onChange={handleChange} required placeholder="Full Name" className={inputClass} style={{'--accent':'#c8a96e'}} />
        <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone Number" type="tel" className={inputClass} />
      </div>
      <input name="email" value={form.email} onChange={handleChange} required placeholder="Email Address" type="email" className={inputClass} />
      <select name="service" value={form.service} onChange={handleChange} className={inputClass + ' cursor-pointer'}>
        <option value="">Service Needed</option>
        <option value="drywall">Drywall Installation & Repair</option>
        <option value="painting">Interior & Exterior Painting</option>
        <option value="popcorn">Popcorn Ceiling Removal</option>
        <option value="ceiling">Ceiling Repairs & Finishing</option>
        <option value="commercial">Commercial Services</option>
        <option value="other">Other / Not Sure</option>
      </select>
      <button type="submit" disabled={loading}
        className="w-full py-4 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all hover:brightness-110 disabled:opacity-70"
        style={{background:'#c8a96e', color:'#0f2035'}}>
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-navy-900 border-t-transparent rounded-full animate-spin" style={{borderColor:'#0f2035', borderTopColor:'transparent'}} />
            Sending...
          </span>
        ) : (
          <><SendIcon /> Submit Request</>
        )}
      </button>
    </form>
  )
}
