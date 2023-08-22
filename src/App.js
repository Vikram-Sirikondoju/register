import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Design from './Components/Design';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< Signup />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/design" element={<Design />}/>
        <Route /> 
      </Routes>
    </div>
  );
}

export default App;
