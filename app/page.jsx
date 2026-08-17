import Link from 'next/link'

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)
const CheckCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)
const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)
const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
  </svg>
)
const DollarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
  </svg>
)
const StarOutlineIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)
const RollerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="13" height="6" rx="1"/><path d="M8 12v4"/><rect x="6" y="16" width="4" height="5" rx="1"/><path d="M15 9h4a2 2 0 012 2v2"/>
  </svg>
)

const trustItems = [
  { icon: ShieldIcon, label: 'Licensed & Insured' },
  { icon: DollarIcon, label: 'Free Estimates' },
  { icon: StarOutlineIcon, label: 'Satisfaction Guaranteed' },
  { icon: RollerIcon, label: 'Clean & Reliable' },
]
const QuoteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none" opacity="0.15">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
  </svg>
)

const services = [
  {
    title: 'Drywall Installation & Repair',
    desc: 'Professional installation, repairs, taping, mudding, and sanding for flawless results.',
    img: '/ser1.png',
    href: '/services#drywall',
  },
  {
    title: 'Interior & Exterior Painting',
    desc: 'High-quality coatings with clean, smooth, and long-lasting finishes every time.',
    img: '/ser2.png',
    href: '/services#painting',
  },
  {
    title: 'Popcorn Ceiling Removal',
    desc: 'Safe, mess-free removal and smooth finishes to modernize and brighten any room.',
    img: '/ser3.png',
    href: '/services#popcorn',
  },
  {
    title: 'Ceiling Repairs & Finishing',
    desc: 'Fixing cracks, water damage, and delivering impeccable, flawless finishing.',
    img: '/ser4.png',
    href: '/services#ceiling',
  },
  {
    title: 'Commercial & Residential',
    desc: 'Serving homeowners, businesses, contractors, and property managers across Ottawa.',
    img: '/ser5.png',
    href: '/services#commercial',
  },
]

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Homeowner',
    text: 'Prime Finish did an amazing job on our drywall and painting. The attention to detail and clean work exceeded our expectations. Highly recommended!',
  },
  {
    name: 'James T.',
    role: 'Property Manager',
    text: 'We hired Prime Finish for a commercial renovation and they were professional, reliable, and delivered on time. Great experience working with the team.',
  },
  {
    name: 'Lisa R.',
    role: 'Homeowner',
    text: 'The popcorn ceiling removal and painting transformed our home completely. The team was friendly, efficient, and the results are absolutely stunning.',
  },
]

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '10+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '5★', label: 'Average Rating' },
]

const areas = ['Ottawa', 'Kanata', 'Nepean', 'Orleans', 'Barrhaven', 'Stittsville', 'Gloucester', 'Rockcliffe Park', 'Vanier', 'Gatineau']

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{background:'#060e1a'}}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero.png"
            alt="Professional painting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{background:'linear-gradient(90deg, rgba(6,14,26,0.95) 0%, rgba(6,14,26,0.85) 35%, rgba(6,14,26,0.35) 65%, rgba(6,14,26,0.15) 100%)'}} />
        </div>

        {/* Decorative accent line */}
        <div className="absolute top-0 left-0 w-1 h-full" style={{background:'#c8a96e'}} />
        <div className="absolute top-1/4 right-0 w-px h-1/2 opacity-20" style={{background:'#c8a96e'}} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span style={{color:'#c8a96e'}}><ShieldIcon /></span>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>Ottawa's Trusted Contractors</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              Professional
              <span className="block" style={{color:'#c8a96e'}}>Drywall &</span>
              Painting
              <span className="block text-white/80 text-4xl md:text-5xl">Services in Ottawa</span>
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
              Quality workmanship, clean finishes, and reliable service for your home or business. Free estimates available — serving Ottawa and all surrounding areas.
            </p>

            {/* Trust signals */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-10 max-w-md">
              {trustItems.map(item => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0" style={{borderColor:'#c8a96e', color:'#c8a96e'}}>
                    <item.icon />
                  </div>
                  <span className="text-white text-sm leading-tight">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary" style={{background:'#c8a96e', color:'#0f2035', fontWeight:'700', padding:'16px 32px', display:'inline-flex', alignItems:'center', justifyContent:'center', gap:'8px', textTransform:'uppercase', letterSpacing:'0.1em', fontSize:'14px'}}>
                Request Free Estimate <ArrowRight />
              </Link>
              <Link href="/gallery" className="btn-outline" style={{border:'2px solid rgba(255,255,255,0.3)', color:'white', fontWeight:'600', padding:'16px 32px', display:'inline-flex', alignItems:'center', justifyContent:'center', gap:'8px', textTransform:'uppercase', letterSpacing:'0.1em', fontSize:'14px'}}>
                View Our Work
              </Link>
            </div>

            {/* Phone */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 max-w-16 opacity-20" style={{background:'white'}} />
              <a href="tel:6137005736" className="text-white/50 hover:text-white transition-colors text-sm">
                Or call us: <span className="text-white font-semibold">613-700-5736</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 animate-pulse" style={{background:'#c8a96e', opacity:'0.5'}} />
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{background:'#1e3a5f'}} className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold mb-1" style={{color:'#c8a96e'}}>{s.value}</div>
                <div className="text-white/60 text-sm uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12" style={{background:'#c8a96e'}} />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>What We Do</span>
              <div className="h-px w-12" style={{background:'#c8a96e'}} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{color:'#1e3a5f'}}>Services We Provide</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From new construction to renovation finishing — we handle every aspect of drywall, painting, and ceiling work with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={s.title} className={`group overflow-hidden bg-white shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="relative h-52 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(6,14,26,0.6), transparent)'}} />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl mb-2" style={{color:'#1e3a5f'}}>{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <Link href={s.href} className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" style={{color:'#c8a96e'}}>
                    Learn More <ArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services"
              className="inline-flex items-center gap-2 border-2 font-bold px-10 py-4 uppercase tracking-wider text-sm hover:text-white transition-all duration-300"
              style={{borderColor:'#1e3a5f', color:'#1e3a5f', ':hover':{background:'#1e3a5f'}}}>
              View All Services <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24" style={{background:'#f8f9fc'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-12" style={{background:'#c8a96e'}} />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>Why Choose Us</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{color:'#1e3a5f'}}>
                Quality You Can<br/>Count On
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                We're not just contractors — we're craftsmen who take pride in every project. From first call to final inspection, we deliver results that last.
              </p>

              <div className="space-y-5">
                {[
                  { title: 'Experienced Professionals', desc: 'Skilled tradespeople with years of hands-on experience in drywall and painting.' },
                  { title: 'High Quality Materials', desc: 'We use premium products to ensure your finish looks great and lasts longer.' },
                  { title: 'Clean & On-Time Service', desc: 'We respect your space and timeline — no mess left behind, no missed deadlines.' },
                  { title: 'Guaranteed Satisfaction', desc: "We stand behind our work. If something isn't right, we fix it — period." },
                ].map(item => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center" style={{background:'#c8a96e'}}>
                      <span className="text-white font-bold"><CheckCircle /></span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{color:'#1e3a5f'}}>{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contact"
                className="mt-10 inline-flex items-center gap-2 font-bold px-10 py-4 uppercase tracking-wider text-sm"
                style={{background:'#1e3a5f', color:'white'}}>
                Get a Free Estimate <ArrowRight />
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80"
                alt="Quality workmanship"
                className="w-full h-[560px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 p-6 shadow-xl" style={{background:'#1e3a5f'}}>
                <div className="font-display text-4xl font-bold mb-1" style={{color:'#c8a96e'}}>10+</div>
                <div className="text-white text-sm uppercase tracking-widest">Years of Excellence</div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24" style={{background:'#c8a96e', opacity:'0.3'}} />
            </div>
          </div>
        </div>
      </section>

      {/* ── BEFORE & AFTER ── */}
      <section className="py-24" style={{background:'#060e1a'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12" style={{background:'#c8a96e'}} />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>Our Work</span>
              <div className="h-px w-12" style={{background:'#c8a96e'}} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Before & After Transformations</h2>
            <p className="text-white/50 max-w-xl mx-auto">See the difference our team makes. Real results from real Ottawa projects.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                before: '/drybef.png',
                after: '/dryaft.png',
                label: 'Drywall & Paint',
              },
              {
                before: '/celbef.png',
                after: '/celaft.png',
                label: 'Ceiling Removal',
              },
              {
                before: '/fullbef.png',
                after: '/fullaft.png',
                label: 'Full Room Refresh',
              },
            ].map((item, i) => (
              <div key={i} className="overflow-hidden" style={{border:'1px solid rgba(200,169,110,0.2)'}}>
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={item.before} alt="Before" className="w-full h-52 object-cover opacity-70" />
                    <div className="absolute top-3 left-3 px-2 py-1 text-xs font-bold uppercase tracking-wider" style={{background:'#2d2d2d', color:'white'}}>Before</div>
                  </div>
                  <div className="relative">
                    <img src={item.after} alt="After" className="w-full h-52 object-cover" />
                    <div className="absolute top-3 right-3 px-2 py-1 text-xs font-bold uppercase tracking-wider" style={{background:'#c8a96e', color:'#0f2035'}}>After</div>
                  </div>
                </div>
                <div className="px-4 py-3 border-t" style={{borderColor:'rgba(200,169,110,0.2)'}}>
                  <span className="text-white/70 text-sm">{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery"
              className="inline-flex items-center gap-2 font-bold px-10 py-4 uppercase tracking-wider text-sm border-2 hover:bg-white hover:text-navy-900 transition-all"
              style={{borderColor:'#c8a96e', color:'#c8a96e'}}>
              View Full Gallery <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12" style={{background:'#c8a96e'}} />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>Client Reviews</span>
              <div className="h-px w-12" style={{background:'#c8a96e'}} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{color:'#1e3a5f'}}>Trusted by Homeowners & Businesses</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.name} className="p-8 relative" style={{background:'#f8f9fc', border:'1px solid #e8edf4'}}>
                <div className="absolute top-6 right-6" style={{color:'#1e3a5f'}}><QuoteIcon /></div>
                <div className="flex gap-1 mb-4" style={{color:'#c8a96e'}}>
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style={{background:'#1e3a5f'}}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{color:'#1e3a5f'}}>{t.name}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS ── */}
      <section className="py-16" style={{background:'#1e3a5f'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8" style={{background:'#c8a96e'}} />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>Coverage</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-white">Proudly Serving<br/>Ottawa & Surrounding Areas</h2>
            </div>
            <div className="flex flex-wrap gap-3 flex-1">
              {areas.map(a => (
                <Link key={a} href="/areas"
                  className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                  style={{border:'1px solid rgba(200,169,110,0.3)'}}>
                  {a}
                </Link>
              ))}
              <Link href="/areas" className="px-4 py-2 text-sm font-medium" style={{background:'#c8a96e', color:'#0f2035'}}>
                + More Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{background:'#060e1a'}}>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
          alt="Contact us"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{background:'#c8a96e'}} />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>Get Started</span>
            <div className="h-px w-12" style={{background:'#c8a96e'}} />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Start<br/>Your Project?
          </h2>
          <p className="text-white/50 text-lg mb-10">
            Get a free, no-obligation estimate today. We serve Ottawa and all surrounding areas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact"
              className="font-bold px-12 py-5 uppercase tracking-wider text-sm flex items-center gap-2"
              style={{background:'#c8a96e', color:'#0f2035'}}>
              Request Free Estimate <ArrowRight />
            </Link>
            <a href="tel:6137005736"
              className="border-2 text-white font-bold px-12 py-5 uppercase tracking-wider text-sm flex items-center gap-2 hover:bg-white hover:text-navy-900 transition-all"
              style={{borderColor:'rgba(255,255,255,0.3)'}}>
              613-700-5736
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
