import Link from 'next/link'

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)
const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const areas = [
  { name: 'Ottawa (Central)', desc: 'Serving all central Ottawa neighborhoods including the Glebe, Centretown, Sandy Hill, and more.' },
  { name: 'Kanata', desc: 'Full-service drywall and painting for homes and businesses in Kanata North and South.' },
  { name: 'Nepean', desc: 'Residential and commercial projects throughout Nepean and Bells Corners.' },
  { name: 'Orleans', desc: 'Serving Orleans homeowners, condos, and commercial properties in East Ottawa.' },
  { name: 'Barrhaven', desc: 'All finishing services available throughout Barrhaven and Riverside South.' },
  { name: 'Stittsville', desc: 'Drywall, painting, and ceiling services for the growing Stittsville community.' },
  { name: 'Gloucester', desc: 'Residential and commercial work across Gloucester and surrounding east-end areas.' },
  { name: 'Rockcliffe Park', desc: 'High-end residential finishing for premium homes in Rockcliffe and Manor Park.' },
  { name: 'Vanier', desc: 'Serving Vanier homeowners and property managers with quality finishing services.' },
  { name: 'Gatineau', desc: 'Cross-border service available for select Gatineau projects — contact us to confirm.' },
  { name: 'Manotick', desc: 'Serving rural Ottawa including Manotick and surrounding communities.' },
  { name: 'Richmond', desc: 'Extending our services to Richmond and the growing west Ottawa corridor.' },
]

export default function AreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{background:'#060e1a'}}>
        <img
          src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?w=1400&q=80"
          alt="Ottawa"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute left-0 top-0 w-1 h-full" style={{background:'#c8a96e'}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{background:'#c8a96e'}} />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>Service Coverage</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight">
            Areas We <span style={{color:'#c8a96e'}}>Serve</span>
          </h1>
          <p className="text-white/50 text-lg mt-6 max-w-xl">
            Proudly serving Ottawa and all surrounding communities with professional drywall, painting, and finishing services.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12" style={{background:'#c8a96e'}} />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>Ottawa Region</span>
              <div className="h-px w-12" style={{background:'#c8a96e'}} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{color:'#1e3a5f'}}>Serving Your Community</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Whether you're in the heart of Ottawa or the surrounding suburbs — we come to you. Fast, professional, and fully equipped.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map(area => (
              <div key={area.name} className="p-7 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group border-l-4 hover:-translate-y-1" style={{borderColor:'#c8a96e'}}>
                <div className="flex items-center gap-3 mb-3">
                  <span style={{color:'#c8a96e'}}><MapPinIcon /></span>
                  <h3 className="font-display font-bold text-xl" style={{color:'#1e3a5f'}}>{area.name}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-12 shadow-lg" style={{background:'#1e3a5f'}}>
            <h3 className="font-display text-3xl font-bold text-white mb-3">Don't See Your Area?</h3>
            <p className="text-white/60 mb-6">We may still be able to help. Contact us and we'll let you know if your location is within our service range.</p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 font-bold px-12 py-4 uppercase tracking-wider text-sm"
              style={{background:'#c8a96e', color:'#0f2035'}}>
              Contact Us <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Ottawa image section */}
      <section className="py-24" style={{background:'#f8f9fc'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-12" style={{background:'#c8a96e'}} />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>Ottawa's Trusted Team</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{color:'#1e3a5f'}}>
                Local Contractors<br/>Who Know Ottawa
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We're not a big national chain — we're local Ottawa contractors who take pride in our community. Every project we complete adds to our reputation here, and we work hard to keep it excellent.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                When you hire Prime Finish, you're hiring a team that lives and works in Ottawa. We understand local building codes, seasonal considerations, and what Ottawa homeowners and businesses need most.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 font-bold px-10 py-4 uppercase tracking-wider text-sm"
                  style={{background:'#1e3a5f', color:'white'}}>
                  Get Free Estimate <ArrowRight />
                </Link>
                <a href="tel:6137005736"
                  className="inline-flex items-center gap-2 font-bold px-10 py-4 uppercase tracking-wider text-sm border-2"
                  style={{borderColor:'#1e3a5f', color:'#1e3a5f'}}>
                  613-700-5736
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1613059488547-0fc691db5231?q=80"
                alt="Ottawa"
                className="w-full h-[480px] object-cover shadow-2xl"
              />
              <div className="absolute inset-0 flex items-end p-8" style={{background:'linear-gradient(to top, rgba(30,58,95,0.8), transparent)'}}>
                <div>
                  <div className="text-white font-display text-2xl font-bold">Ottawa & Surrounding Areas</div>
                  <div className="text-white/60 text-sm mt-1">Ontario, Canada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
