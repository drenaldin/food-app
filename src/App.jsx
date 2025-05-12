import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';

function App() {
  return (
    <div>
      <div style={{ width: '95%' }}>
        <h1 style={{ color: '#4f4ff1', borderBottom: '1px solid #4f4ff1' }}>Food App</h1>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;