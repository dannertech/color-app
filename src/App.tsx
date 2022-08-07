import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import ColorBoxScreen from '../src/app/screens/ColorBox';
import FavoriteColorScreen from '../src/app/screens/FavoriteColor';



const App = () => {
  return (
    <div>
      <h1>My React Application</h1>
      <Routes>
        <Route path="/colorbox" element={<ColorBoxScreen />}/>
        <Route path="/favoritecolor" element={<FavoriteColorScreen />} />
      </Routes>
      <nav>
        <Link to="/colorbox" />
        <Link to="/favoritecolor" />
      </nav>
      </div>
  
  )
}

export default App;
