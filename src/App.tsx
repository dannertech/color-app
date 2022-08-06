import React from 'react';
import {BrowserRouter, Route, Router, Routes, Link} from 'react-router-dom';
import ColorBoxScreen from '../src/app/screens/ColorBox';



const App = () => {
  return (
    <div>
      <h1>My React Application</h1>
      <Routes>
        <Route path="/colorbox" element={<ColorBoxScreen />}/>
      </Routes>
      </div>
  
  )
}

export default App;
