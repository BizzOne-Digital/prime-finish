import Link from 'next/link'

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

const projects = [
  {
    category: 'Popcorn Ceiling',
    before: '/clinet10.jpg',
    after: '/clinet11.jpg',
    label: 'Popcorn Ceiling Removal',
    location: 'Ottawa',
  },
  {
    category: 'Painting',
    before: '/newbath1.jpg',
    after: '/newbath2.jpg',
    label: 'Bathroom Painting',
    location: 'Ottawa',
  },
  {
    category: 'Ceiling & Paint',
    before: '/clinet5.jpg',
    after: '/clinet6.jpg',
    label: 'Popcorn Ceiling Removal & Painting',
    location: 'Ottawa',
  },
]

const galleryImages = [
  '/clinet2.jpg',
  '/clinet4.jpg',
  '/clinet11.jpg',
  '/newbath2.jpg',
  '/clinet8.jpg',
  '/clinet6.jpg',
]

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{background:'#060e1a'}}>
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80"
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute left-0 top-0 w-1 h-full" style={{background:'#c8a96e'}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{background:'#c8a96e'}} />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>Our Portfolio</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white">
            Project <span style={{color:'#c8a96e'}}>Gallery</span>
          </h1>
          <p className="text-white/50 text-lg mt-6 max-w-xl">
            Real before and after results from real Ottawa projects. See the Prime Finish Ottawa difference.
          </p>
        </div>
      </section>

      {/* Before/After Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12" style={{background:'#c8a96e'}} />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>Before & After</span>
              <div className="h-px w-12" style={{background:'#c8a96e'}} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{color:'#1e3a5f'}}>Transformations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="group overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Before/After Images */}
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={p.before} alt={`Before - ${p.label}`} className="w-full h-48 object-cover opacity-80 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute top-3 left-3 px-2 py-1 text-xs font-bold uppercase" style={{background:'#2d2d2d', color:'white'}}>Before</div>
                  </div>
                  <div className="relative">
                    <img src={p.after} alt={`After - ${p.label}`} className="w-full h-48 object-cover" />
                    <div className="absolute top-3 right-3 px-2 py-1 text-xs font-bold uppercase" style={{background:'#c8a96e', color:'#0f2035'}}>After</div>
                  </div>
                </div>
                {/* Info */}
                <div className="p-5 border-t-2" style={{borderColor:'#c8a96e'}}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{color:'#c8a96e'}}>{p.category}</span>
                    <span className="text-xs text-gray-400">{p.location}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg" style={{color:'#1e3a5f'}}>{p.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-24" style={{background:'#f8f9fc'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12" style={{background:'#c8a96e'}} />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>Finished Work</span>
              <div className="h-px w-12" style={{background:'#c8a96e'}} />
            </div>
            <h2 className="font-display text-4xl font-bold" style={{color:'#1e3a5f'}}>Project Photos</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative overflow-hidden group aspect-square">
                <img
                  src={img}
                  alt={`Project ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  style={{background:'rgba(30,58,95,0.7)'}}>
                  <span className="text-white font-medium text-sm uppercase tracking-wider">View</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-10 border-2 border-dashed" style={{borderColor:'#c8a96e'}}>
            <p className="text-gray-600 mb-4 font-medium">More project photos coming soon!</p>
            <p className="text-gray-400 text-sm mb-6">We're constantly updating our gallery with fresh Ottawa project results. Follow us on Instagram for the latest.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.instagram.com/primefinsh" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold px-8 py-4 uppercase tracking-wider text-sm text-white"
                style={{background:'#1e3a5f'}}>
                Follow on Instagram
              </a>
              <Link href="/contact"
                className="inline-flex items-center gap-2 font-bold px-8 py-4 uppercase tracking-wider text-sm"
                style={{background:'#c8a96e', color:'#0f2035'}}>
                Get Free Estimate <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
