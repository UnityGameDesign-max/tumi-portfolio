import './App.css';
import Navigation from'./Navigation/Navigation'
import HeroSection from './HeroSection/HeroSection'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import About from './About/About'
import Contacts from './Contacts/Contacts'

function App() {
  return (
    <div classNme="app">
      <Navigation />
      <HeroSection />
      <Skills />
      <Projects />
      <About />
      <Contacts />
      
      
    </div>
  );
}

export default App;
