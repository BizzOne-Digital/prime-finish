import Link from 'next/link'

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const values = [
  { title: 'Quality Workmanship', desc: 'Every project receives the same level of attention and care — whether it\'s a single room or a full commercial build-out.' },
  { title: 'Honest Pricing', desc: 'No surprises. We provide clear, detailed estimates upfront so you always know exactly what you\'re paying for.' },
  { title: 'Clean Job Sites', desc: 'We protect your property during every project and leave your space cleaner than we found it.' },
  { title: 'On-Time Delivery', desc: 'We respect your schedule. Projects are planned and completed within the agreed timeline.' },
  { title: 'Licensed & Insured', desc: 'Fully licensed contractors backed by liability insurance for your complete peace of mind.' },
  { title: 'Free Estimates', desc: 'Get a no-obligation quote on any project — residential or commercial.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{background:'#060e1a'}}>
        <img
          src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1400&q=80"
          alt="About Prime Finish"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute left-0 top-0 w-1 h-full" style={{background:'#c8a96e'}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{background:'#c8a96e'}} />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>Our Story</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight max-w-2xl">
            About<br/><span style={{color:'#c8a96e'}}>Prime Finish</span>
          </h1>
          <p className="text-white/50 text-lg mt-6 max-w-xl">
            Ottawa's trusted professionals for drywall, painting, and finishing services.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/about.png"
                alt="Our team at work"
                className="w-full h-[540px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 p-8 shadow-2xl" style={{background:'#1e3a5f'}}>
                <div className="font-display text-5xl font-bold" style={{color:'#c8a96e'}}>10+</div>
                <div className="text-white/70 text-sm uppercase tracking-widest mt-1">Years Serving Ottawa</div>
              </div>
              <div className="absolute -top-6 -left-6 w-20 h-20" style={{background:'#c8a96e', opacity:0.25}} />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-12" style={{background:'#c8a96e'}} />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>Who We Are</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{color:'#1e3a5f'}}>
                Built on Craft,<br/>Driven by Pride
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Prime Finish was founded with a simple belief: every home and business deserves a finish that looks professional, lasts long, and is done right the first time. We started as a small drywall and painting crew in Ottawa and have grown into one of the region's most trusted finishing contractors.
                </p>
                <p>
                  We serve residential homeowners, landlords, property managers, general contractors, and commercial businesses across Ottawa and surrounding communities including Kanata, Nepean, Orleans, Barrhaven, and beyond.
                </p>
                <p>
                  Our team takes every project personally. From the first call to the final walkthrough, we communicate clearly, work cleanly, and deliver results that exceed expectations. That's the Prime Finish promise.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {['500+ Projects Done', '10+ Years Experience', '100% Insured', 'Free Estimates'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium" style={{color:'#1e3a5f'}}>
                    <span style={{color:'#c8a96e'}}><CheckIcon /></span> {item}
                  </div>
                ))}
              </div>

              <Link href="/contact"
                className="mt-10 inline-flex items-center gap-2 font-bold px-10 py-4 uppercase tracking-wider text-sm"
                style={{background:'#1e3a5f', color:'white'}}>
                Get a Free Estimate <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{background:'#f8f9fc'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12" style={{background:'#c8a96e'}} />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>Our Values</span>
              <div className="h-px w-12" style={{background:'#c8a96e'}} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{color:'#1e3a5f'}}>What We Stand For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={v.title} className="p-8 bg-white shadow-sm hover:shadow-lg transition-shadow border-t-4" style={{borderColor:'#c8a96e'}}>
                <div className="w-10 h-10 flex items-center justify-center mb-4 font-bold text-white" style={{background:'#1e3a5f'}}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display font-bold text-xl mb-3" style={{color:'#1e3a5f'}}>{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{background:'#1e3a5f'}}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-white/60 mb-8">Contact us today for a free, no-obligation estimate on your project.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 font-bold px-12 py-5 uppercase tracking-wider text-sm"
            style={{background:'#c8a96e', color:'#0f2035'}}>
            Request Free Estimate <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}
