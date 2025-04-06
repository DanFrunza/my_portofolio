import React from 'react'
import Header from './Header'
import Home from './Home'
import SectionProjects from './SectionProjects'
import SectionContact from './SectionContact'
import SectionAboutMe from './SectionAboutMe'

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Home />
      <SectionAboutMe />
      <SectionProjects />
      <SectionContact />
    </div>
  )
}

export default App;
