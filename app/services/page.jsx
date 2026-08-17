import Link from 'next/link'

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const services = [
  {
    id: 'drywall',
    title: 'Drywall Installation & Repair',
    subtitle: 'Precision installation from framing to a flawless smooth finish.',
    img: '/ser1.png',
    desc: 'Whether you\'re building new or repairing existing walls and ceilings, our drywall team delivers precise, clean, professional results. We handle everything from framing and hanging to taping, mudding, and sanding — leaving surfaces ready for paint.',
    includes: [
      'New drywall installation (walls & ceilings)',
      'Drywall repair & patching',
      'Taping, mudding & feathering',
      'Sanding & priming',
      'Moisture-resistant board installation',
      'Soundproofing drywall',
    ],
  },
  {
    id: 'painting',
    title: 'Interior & Exterior Painting',
    subtitle: 'Premium coatings applied with care for a lasting, beautiful result.',
    img: '/ser2.png',
    desc: 'Our painters use only premium paints and proper application techniques to ensure a smooth, uniform, long-lasting finish. We handle full rooms, trim, doors, and exterior surfaces — with thorough prep and clean execution every time.',
    includes: [
      'Interior room painting',
      'Exterior house & building painting',
      'Trim, doors & window casing',
      'Ceiling painting',
      'Colour consultation available',
      'Residential & commercial',
    ],
  },
  {
    id: 'popcorn',
    title: 'Popcorn Ceiling Removal',
    subtitle: 'Safe, clean removal with a smooth modern finish left behind.',
    img: '/ser3.png',
    desc: 'Popcorn ceilings look dated and can harbor dust and allergens. We remove them safely and leave behind a smooth, clean, modern ceiling — ready for paint. Our process is clean, contained, and completed efficiently with minimal disruption.',
    includes: [
      'Full popcorn/stipple ceiling removal',
      'Asbestos-safe process (testing available)',
      'Surface repair after removal',
      'Smooth skim coat finishing',
      'Paint-ready surface',
      'Full room containment setup',
    ],
  },
  {
    id: 'ceiling',
    title: 'Ceiling Repairs & Finishing',
    subtitle: 'From cracks to water damage — we restore ceilings to like-new condition.',
    img: '/ser4.png',
    desc: 'Cracks, sagging, water stains, or damaged drywall — we repair and refinish ceilings to a seamless standard. Our finishing team ensures texture is matched and the repaired area blends invisibly with the surrounding surface.',
    includes: [
      'Crack & hole repair',
      'Water damage restoration',
      'Sagging ceiling reinforcement',
      'Texture matching & blending',
      'Skim coat & smooth finish',
      'Full ceiling replacement if needed',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial & Residential Services',
    subtitle: 'Serving homeowners, businesses, landlords, and contractors across Ottawa.',
    img: '/ser5.png',
    desc: 'Prime Finish works with a wide range of clients — from homeowners freshening up a room to property managers turning over rental units to commercial contractors completing full build-outs. We scale our team to match project size and always deliver on schedule.',
    includes: [
      'Residential homes & condos',
      'Rental & investment properties',
      'Commercial offices & retail',
      'Renovation & new construction',
      'Multi-unit property management',
      'Contractor partnerships available',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{background:'#060e1a'}}>
        <img
          src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1400&q=80"
          alt="Services"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute left-0 top-0 w-1 h-full" style={{background:'#c8a96e'}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{background:'#c8a96e'}} />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>What We Offer</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight">
            Our <span style={{color:'#c8a96e'}}>Services</span>
          </h1>
          <p className="text-white/50 text-lg mt-6 max-w-xl">
            Professional drywall, painting, and ceiling services for homes and businesses across Ottawa.
          </p>

          {/* Jump links */}
          <div className="flex flex-wrap gap-3 mt-10">
            {services.map(s => (
              <a key={s.id} href={`#${s.id}`}
                className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
                style={{border:'1px solid rgba(200,169,110,0.3)'}}>
                {s.title.split(' ').slice(0, 2).join(' ')}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-24 ${i % 2 === 0 ? 'bg-white' : ''}`}
          style={i % 2 !== 0 ? {background:'#f8f9fc'} : {}}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
              {/* Image */}
              <div className={`relative ${i % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-[480px] object-cover shadow-2xl"
                />
                <div className="absolute -bottom-5 flex items-center gap-2 px-6 py-4 shadow-xl"
                  style={{background:'#1e3a5f', left: i % 2 !== 0 ? 'auto' : '-20px', right: i % 2 !== 0 ? '-20px' : 'auto'}}>
                  <span className="font-display text-2xl font-bold" style={{color:'#c8a96e'}}>0{i + 1}</span>
                  <div className="h-8 w-px opacity-30 bg-white mx-2" />
                  <span className="text-white text-sm font-medium">{s.title.split(' ')[0]} {s.title.split(' ')[1]}</span>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-12" style={{background:'#c8a96e'}} />
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>Service</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-3" style={{color:'#1e3a5f'}}>{s.title}</h2>
                <p className="font-medium mb-5" style={{color:'#c8a96e'}}>{s.subtitle}</p>
                <p className="text-gray-600 leading-relaxed mb-8">{s.desc}</p>

                <div className="mb-8">
                  <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{color:'#1e3a5f'}}>What's Included:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {s.includes.map(item => (
                      <div key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-0.5 flex-shrink-0" style={{color:'#c8a96e'}}><CheckIcon /></span> {item}
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/contact"
                  className="inline-flex items-center gap-2 font-bold px-10 py-4 uppercase tracking-wider text-sm"
                  style={{background:'#1e3a5f', color:'white'}}>
                  Get a Free Estimate <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20" style={{background:'#060e1a'}}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Not Sure What You Need?</h2>
          <p className="text-white/60 mb-8">Contact us and we'll assess your project and recommend the right solution — no pressure, no obligation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact"
              className="font-bold px-12 py-5 uppercase tracking-wider text-sm flex items-center gap-2"
              style={{background:'#c8a96e', color:'#0f2035'}}>
              Request Free Estimate <ArrowRight />
            </Link>
            <a href="tel:6137005736"
              className="border-2 text-white font-bold px-12 py-5 uppercase tracking-wider text-sm"
              style={{borderColor:'rgba(255,255,255,0.2)'}}>
              613-700-5736
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
