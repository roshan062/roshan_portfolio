import css from './styles/app.module.scss'
import Header from '../src/components/Header/Header.jsx'
import Hero from './components/hero/Hero.jsx'
import Experties from './components/Experties/Experties.jsx'
import Skills from './components/Skills/Skill.jsx'
import Projects from './components/Projects/Projects.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Skills />
      <Projects />
      <Testimonials />
      <Footer />
  </div>
}

export default App;
