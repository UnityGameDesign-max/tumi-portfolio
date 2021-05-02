import {useEffect} from 'react'
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
import InProgress from './InProgress/InProgress';

function App() {


  useEffect(() => {
    document.title = "TumiDev";
  
  }, []);

  return (
    <Router>
      <div classNme="app">
        
        <Switch>
          <Route path="/resume">
            <ResumeView />
          </Route>

          <Route path="/progress">
            <InProgress />
          </Route>

          <Route path="/skills">
            <Skills />
          </Route>

          <Route path="/">
            <Navigation id="navigation" />
            <HeroSection id="heroSection" />
            <Skills id="skills" />
            <Projects id="projects" />
            <About id="projects" />
            <Resume id="resume" />
            <Contacts id="contacts" />  
          </Route>
        </Switch>
      </div>  
    </Router>
    
  );
}

export default App;
