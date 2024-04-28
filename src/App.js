import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/pages/home';  // Adjust path if necessary
import Details from './components/pages/details';  // Adjust path if necessary
import NotFound from './components/pages/NotFound';  // Assuming you created this component

function App() {
  return (
    <Router>
      <div id='main-body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
