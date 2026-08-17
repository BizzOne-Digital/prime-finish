import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Prime Finish | Professional Drywall & Painting Services in Ottawa',
  description: 'Prime Finish provides professional drywall, painting, popcorn ceiling removal, and finishing services in Ottawa and surrounding areas. Request a free estimate today.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
