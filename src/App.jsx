import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Featured from './components/Featured.jsx'
import Menu from './components/Menu.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Featured />
        <Menu />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

export default App
