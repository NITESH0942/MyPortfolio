import React from 'react'
import styles from './App.module.css';
import {Navbar} from './components/navbar/Navbar.jsx';
import {Hero} from './components/Hero/Hero.jsx';
import {About} from './components/About/About.jsx';
// import {Education} from './components/education/Education.jsx';
import {Skills} from './components/Skills/Skills.jsx';
import {Projects} from './components/Projects/Projects.jsx';
import {Contact} from './components/contacts/Contact.jsx';
export default function App() {
  return (
    <>
      <div className={styles.App}>                        
        <Navbar/>
        <Hero/>
        <About/>
        {/* <Education/> */}
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}


