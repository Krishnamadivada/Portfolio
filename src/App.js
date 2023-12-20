import React from 'react'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Project'

const App = () => {
  return (
    <div>
      <Header/>
      <Intro/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App