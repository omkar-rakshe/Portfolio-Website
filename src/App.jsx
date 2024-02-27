// import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <AboutMe/>
      <Skills/>
      <Footer/>
    </>
  )
}

export default App;
