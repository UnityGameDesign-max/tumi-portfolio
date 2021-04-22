import './App.css';
import Navigation from'./Navigation/Navigation'
import HeroSection from './HeroSection/HeroSection'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import About from './About/About'
import Contacts from './Contacts/Contacts'
import Resume from './Resume/Resume';
import {BrowserRouter as Router, Switch, Route}
from'react-router-dom'
import ResumeView from './ResumeView/ResumeView';

function App() {
  return (
    <Router>
      <div classNme="app">
        
        <Switch>
          <Route path="/resume">
            <ResumeView />
          </Route>

          <Route path="/">
            <Navigation />
            <HeroSection />
            <Skills />
            <Projects />
            <About />
            <Resume />
            <Contacts />  
          </Route>
        </Switch>
      </div>  
    </Router>
    
  );
}

export default App;
