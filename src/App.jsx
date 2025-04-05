import React from 'react'
import Header from './Header'
import SectionAbout from './SectionAbout'
import SectionProjects from './SectionProjects'
import SectionContact from './SectionContact'

function App() {
  return (
    
    <div className="bg-black text-white">
      <Header />  {/* Bara de meniu */}
      <SectionAbout />  {/* Despre mine */}
      <SectionProjects />  {/* Proiectele mele */}
      <SectionContact />  {/* Contact */}
    </div>
  )
}

export default App
