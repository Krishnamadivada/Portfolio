import React from 'react'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Header/>
      <Intro/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App