import React from 'react';
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import PageHeader from './components/PageHeader';
import SolutionForm from './components/SolutionForm'; // Naye form ko import karein

function App() {
  return (
    <div className="min-h-screen bg-[#1C1C1C]">
      <Navbar />
      <SubNavbar />
      <PageHeader />
      <SolutionForm /> 
    </div>
  );
}

export default App;