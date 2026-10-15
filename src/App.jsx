import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import Services from './components/sections/Services.jsx'
import About from './components/sections/About.jsx'
import Testimonials from './components/sections/Testimonials.jsx'
import FAQ from './components/sections/FAQ.jsx'
import Contact from './components/sections/Contact.jsx'

export default function App() {
  return (
    <div className="font-cairo text-neutral-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
