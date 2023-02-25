import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  )
}

const Technologies = () => {
  return (
    <ul>
      <li>css</li>
      <li>html</li>
      <li>js</li>
      <li>React</li>
    </ul>
  )
  
}

const Header = () => {
  return (
    <div>
      <a href='#'>Home</a>
      <a href='#'>News</a>
      <a href='#'>Feed</a>
      <a href='#'>Messages</a>
    </div>
  )
}

export default App;
