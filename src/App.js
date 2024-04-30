import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/pages/home';   
import Details from './components/pages/details';   
import NotFound from './components/pages/NotFound';  // Assuming you created this component
import CreateToken from './components/pages/createToken';  // Assuming you created this component

function App() {
  return (
    <Router>
      <div id='main-body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/createtoken" element={<CreateToken />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
