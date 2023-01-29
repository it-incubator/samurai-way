import React from 'react';
import './App.css';
import Header from './components/Header';
import Technologies from './components/Technologies';


const App = () => {
  console.log("App render");
  return (
    <div className='app'>
      <Header value={true} />
      <Technologies />
    </div>
  )
}

export default App;
