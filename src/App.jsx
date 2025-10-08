import React from 'react'
import Header from './Header'
import Home from './Home'
import SectionProjects from './SectionProjects'
import SectionContact from './SectionContact'
import SectionAboutMe from './SectionAboutMe'
import SectionCertification from './SectionCertification'

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Home />
      <SectionAboutMe />
      <SectionCertification />
      <SectionProjects />
      <SectionContact />
    </div>
  )
}

export default App;
