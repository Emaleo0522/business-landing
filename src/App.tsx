import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Hero } from '@/sections/Hero'
import { SocialProof } from '@/sections/SocialProof'
import { Services } from '@/sections/Services'
import { About } from '@/sections/About'
import { Testimonials } from '@/sections/Testimonials'
import { Pricing } from '@/sections/Pricing'
import { FAQ } from '@/sections/FAQ'
import { Contact } from '@/sections/Contact'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-nav">
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <SocialProof />
        <Services />
        <About />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
