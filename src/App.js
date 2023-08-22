import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Design from './Components/Design';
import Build from './Components/Build';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< Signup />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/design" element={<Design />}/>
        <Route path="/build" element={<Build />}/>
        <Route /> 
      </Routes>
    </div>
  );
}

export default App;
