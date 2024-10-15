import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import WorkExperience from './components/WorkExperience/WorkExperience'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <section id="hero">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="work-experience">
          <WorkExperience />
        </section>
        <section id="contact-me">
          <ContactMe />
        </section>
        <Footer />
      </div>
    </>
  )
}

export default App