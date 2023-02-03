import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';


function App () {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <Profile/>
      <Footer/>
    </div>
  )
}

export default App;
