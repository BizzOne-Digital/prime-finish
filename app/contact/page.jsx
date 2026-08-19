import EstimateForm from '../../components/EstimateForm'

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.05 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)
const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)
const MapPinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)
const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const contactInfo = [
  {
    icon: <PhoneIcon />,
    title: 'Phone',
    value: '613-700-5736',
    sub: 'Call or text anytime',
    href: 'tel:6137005736',
  },
  {
    icon: <MailIcon />,
    title: 'Email',
    value: 'can613ada@gmail.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:can613ada@gmail.com',
  },
  {
    icon: <MapPinIcon />,
    title: 'Service Area',
    value: 'Ottawa & Surrounding Areas',
    sub: 'Ontario, Canada',
    href: '/areas',
  },
  {
    icon: <ClockIcon />,
    title: 'Hours',
    value: 'Mon – Sat: 7AM – 7PM',
    sub: 'Emergency quotes available',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{background:'#060e1a'}}>
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80"
          alt="Contact us"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="absolute left-0 top-0 w-1 h-full" style={{background:'#c8a96e'}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{background:'#c8a96e'}} />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>Get In Touch</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight">
            Request a<br/><span style={{color:'#c8a96e'}}>Free Estimate</span>
          </h1>
          <p className="text-white/50 text-lg mt-6 max-w-xl">
            Fill out the form below and we'll get back to you within 24 hours with a free, no-obligation estimate.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-12" style={{background:'#c8a96e'}} />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>Contact Info</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6" style={{color:'#1e3a5f'}}>
                Let's Talk About<br/>Your Project
              </h2>
              <p className="text-gray-500 leading-relaxed mb-10">
                Whether you need a quick repair or a full renovation, we're ready to help. Contact us today for a free, honest estimate with no pressure and no obligation.
              </p>

              <div className="space-y-6">
                {contactInfo.map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{background:'#1e3a5f', color:'#c8a96e'}}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">{item.title}</div>
                      {item.href ? (
                        <a href={item.href} className="font-semibold hover:text-accent transition-colors block" style={{color:'#1e3a5f', '--accent':'#c8a96e'}}>
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-semibold" style={{color:'#1e3a5f'}}>{item.value}</div>
                      )}
                      <div className="text-sm text-gray-400 mt-0.5">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">Follow Our Work</div>
                <a
                  href="https://www.instagram.com/primefinsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
                  style={{background:'linear-gradient(135deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)'}}>
                  <InstagramIcon /> @primefinsh
                </a>
              </div>

              {/* Why us quick bullets */}
              <div className="mt-10 p-6" style={{background:'#f8f9fc'}}>
                <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{color:'#1e3a5f'}}>Why Choose Prime Finish Ottawa?</h4>
                <ul className="space-y-2">
                  {[
                    'Free estimates — no obligation',
                    'Response within 24 hours',
                    'Fully insured',
                    'Clean, professional job sites',
                    'Serving all of Ottawa & area',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background:'#c8a96e'}} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-3">
              <div className="p-10 shadow-2xl" style={{border:'1px solid #e8edf4'}}>
                <h3 className="font-display text-2xl font-bold mb-2" style={{color:'#1e3a5f'}}>Request Your Free Estimate</h3>
                <p className="text-gray-400 text-sm mb-8">Fill in your details and we'll prepare a custom quote for your project.</p>
                <EstimateForm dark={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder / service area visual */}
      <section className="py-16" style={{background:'#1e3a5f'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12" style={{background:'#c8a96e'}} />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{color:'#c8a96e'}}>Service Area</span>
            <div className="h-px w-12" style={{background:'#c8a96e'}} />
          </div>
          <h2 className="font-display text-3xl font-bold text-white mb-4">We Come to You</h2>
          <p className="text-white/60 mb-8">Serving Ottawa, Kanata, Nepean, Orleans, Barrhaven, Stittsville, Gloucester, and more.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Ottawa', 'Kanata', 'Nepean', 'Orleans', 'Barrhaven', 'Stittsville', 'Gloucester', 'Rockcliffe', 'Vanier', 'Gatineau', 'Manotick', 'Richmond'].map(a => (
              <span key={a} className="px-4 py-2 text-sm text-white/70 font-medium" style={{border:'1px solid rgba(200,169,110,0.3)'}}>
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
