import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Reveal from './Components/Reveal/Reaveal';
import Experience from './Components/Expirience/Expirience';

function App() {
  return (
    <>
      <Header />

      <Reveal delay={200}>
        <Hero />
      </Reveal>

      <Reveal delay={200}>
        <About />
      </Reveal>

      <Reveal delay={200}>
        <Skills />
      </Reveal>

      <Reveal delay={200}>
        <Experience />
      </Reveal>

      <Reveal delay={200}>
        <Contact />
      </Reveal>

      <Footer />
    </>
  )
}

export default App;