import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import ColorBoxScreen from '../src/app/screens/ColorBox';
import FavoriteColorScreen from '../src/app/screens/FavoriteColor';



const App = () => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>My React Application</h1>
      <Routes>
        <Route path="/colorbox" element={<ColorBoxScreen />}/>
        <Route path="/favoritecolor" element={<FavoriteColorScreen />} />
      </Routes>
      
      <nav>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <Link to="/colorbox">ColorBox</Link>
        <Link to="/favoritecolor">FavoriteColor</Link>
        </div>
      </nav>
      
      </div>
  
  )
}

export default App;
