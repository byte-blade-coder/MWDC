import React from 'react';
import MapView from '../components/MapView';


function Assets() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] p-6 text-white">
            <h1 className='fonts-bold text-white text-3xl'>Leaflet With Some Dummy Points</h1>
            <MapView />
    </div>
  );
}

export default Assets;
