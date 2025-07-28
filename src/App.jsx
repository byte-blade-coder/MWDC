import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mission from './pages/Mission';
import Assets from './pages/Assets';
import Environment from './pages/Environment';
import DataExplorer from './pages/DataExplorer';
import Intelligence from './pages/Intelligence';

function App() {
  return (
    <>
      <Navbar />
      <div >
        <Routes>
          <Route path="/" element={<Navigate to="/mission" replace />} />
          <Route path="/mission/*" element={<Mission />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/environment" element={<Environment />} />
          <Route path="/data-explorer" element={<DataExplorer />} />
          <Route path="/intelligence" element={<Intelligence />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
