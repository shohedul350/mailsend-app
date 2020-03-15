import React from 'react';
import './App.css';
import Home from './component/Home'
import ContactState from './context/ContactState'

function App() {
  return (
    <ContactState>
    <div className="container card">
    <Home/>
    </div>
    </ContactState>
  );
}

export default App;