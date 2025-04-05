import React from 'react'
import Header from './Header'
import Home from './Home'
import SectionProjects from './SectionProjects'
import SectionContact from './SectionContact'

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Home />
      <SectionProjects />
      <SectionContact />
    </div>
  )
}

export default App;
