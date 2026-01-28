import { useState } from 'react'
import Benefits from './components/Benefits'
import ContactModal from './components/ContactModal'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import MaestroStory from './components/MaestroStory'
import SEOSchema from './components/SEOSchema'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import WhatsAppCTA from './components/WhatsAppCTA'

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="app">
      <SEOSchema />
      <Header onContactClick={() => setShowModal(true)} />
      <Hero />
      <MaestroStory />
      
      <main className="container">
        <section className="modules">
          <Services />
          <Benefits />
        </section>
        
        <Gallery />
        <Testimonials />
      </main>

      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <WhatsAppCTA />
      <Footer />
    </div>
  )
}

export default App
