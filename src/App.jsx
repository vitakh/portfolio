import styles from './App.module.css';
import { About } from './components/About/About';
import { Profile } from './components/Profile/Profile';
import { Navbar } from './components/Navbar/Navbar';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact'
import { Skills } from './components/Skills/Skills';

function App() {

  return <div className={styles.App}>
    <Navbar />
    <Profile />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
  </div>
  
}

export default App
