import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Features from './components/Features'

const App = () => {
  return (
    <main className='overflow-hidden'>
     <Header/>
     <Hero/>
     <Features/>
    </main>
  )
}

export default App