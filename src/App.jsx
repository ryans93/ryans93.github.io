import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar/>
      <main className="bg-[url(background.jpg)] overflow-auto flex flex-1 flex-col flex-nowrap items-center">
        <Header/>
        <About/>
        <Portfolio/>
      </main>
      <Footer/>
    </>
  )
}

export default App
