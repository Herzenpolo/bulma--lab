import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar.js'
import FormField from './components/FormField/FormField'
import CoolButton from './components/CoolButton/CoolButton'


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      
      <CoolButton name = 'Herzen'/>
    </div>
  );
}

export default App;
