import React, { useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  FeatureGroup,
  Polygon,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import L from "leaflet";

// Import required CSS for Leaflet and Leaflet-Draw
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

// Import Leaflet's default icon assets
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// WORKAROUND: Fix for a common issue with bundlers where Leaflet's default icon paths are not resolved correctly.
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});

const MapView = () => {
  // --- STATE MANAGEMENT ---
  const [polygon, setPolygon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedCoords, setEditedCoords] = useState([]);
  const featureGroupRef = useRef();

  // --- HELPER FUNCTIONS & EVENT HANDLERS ---
  const updateCoordinatesState = (layer) => {
    const latlngs = layer.getLatLngs()[0];
    const plainCoords = latlngs.map(p => ({ lat: p.lat, lng: p.lng }));
    setPolygon(plainCoords);
    setEditedCoords(plainCoords);
  };

  const handleCreated = (e) => {
    const { layerType, layer } = e;
    // Ab yeh sirf polygon ko handle karega
    if (layerType === "polygon") {
      updateCoordinatesState(layer);
    }
  };

  const handleEdited = (e) => {
    e.layers.eachLayer((layer) => {
      if (layer instanceof L.Polygon) {
        updateCoordinatesState(layer);
      }
    });
  };

  const handleDeleted = () => {
    setPolygon(null);
    setEditedCoords([]);
    setIsModalOpen(false);
  };

  const closeModal = () => setIsModalOpen(false);

  const toggleModal = () => {
    if (isModalOpen) {
      closeModal();
    } else {
      if (polygon) {
        setEditedCoords(polygon.map(p => ({ ...p })));
        setIsModalOpen(true);
      }
    }
  };

  const handleCoordinateChange = (index, value) => {
    const newCoords = [...editedCoords];
    const [lat, lng] = value.split(',').map(str => str.trim());
    newCoords[index] = { lat: lat || '', lng: lng === undefined ? '' : lng };
    setEditedCoords(newCoords);
  };
  
  const handleAddPoint = () => {
    setEditedCoords([...editedCoords, { lat: '', lng: '' }]);
  };

  const handleDeletePoint = (index) => {
    const newCoords = editedCoords.filter((_, i) => i !== index);
    setEditedCoords(newCoords);
  };

  const saveInputs = () => {
    const validCoords = editedCoords
      .map(coord => ({ lat: parseFloat(coord.lat), lng: parseFloat(coord.lng) }))
      .filter(coord => !isNaN(coord.lat) && !isNaN(coord.lng));

    if (validCoords.length < 3) {
      alert("A polygon needs at least 3 valid points.");
      return;
    }

    setPolygon(validCoords);

    const layerLatLngs = validCoords.map(p => [p.lat, p.lng]);
    const featureGroup = featureGroupRef.current;
    if (featureGroup) {
      const layers = featureGroup.getLayers();
      if (layers.length > 0 && layers[0] instanceof L.Polygon) {
        layers[0].setLatLngs(layerLatLngs);
      } 
      else {
        featureGroup.clearLayers();
        const newLayer = L.polygon(layerLatLngs);
        featureGroup.addLayer(newLayer);
      }
    }
    closeModal();
  };

  // --- RENDER ---
  return (
    <div className="relative">
      <MapContainer
        center={[30.3753, 69.3451]}
        zoom={5}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <FeatureGroup ref={featureGroupRef}>
          <EditControl
            position="topright"
            onCreated={handleCreated}
            onEdited={handleEdited}
            onDeleted={handleDeleted}
            draw={{
              // --- YAHAN CHANGE KIYA GAYA HAI ---
              rectangle: false, // Rectangle draw karne ka option band kar diya
              polygon: true,
              circle: false,
              marker: false,
              polyline: false,
              circlemarker: false,
            }}
          />
        </FeatureGroup>
      </MapContainer>

      <button
        onClick={toggleModal}
        disabled={!polygon}
        className={`mt-5 px-5 py-2.5 text-base font-bold rounded-md cursor-pointer transition-colors
                    ${!polygon 
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                        : 'bg-white text-[#1C1C1C] border border-white hover:bg-gray-200'}`}
      >
        {isModalOpen ? 'Close Editor' : 'Edit Coordinates'}
      </button>

      {isModalOpen && (
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] max-h-[80vh] z-[1050] bg-gray-100 p-5 rounded-lg border border-gray-300 text-gray-800 flex flex-col shadow-lg">
            
            <div className="flex justify-between items-center mb-5">
              <h3 className="m-0 text-lg font-semibold">Polygon Points:</h3>
              <button
                onClick={handleAddPoint}
                className="py-2 px-3 cursor-pointer bg-[#0A7CAD] text-white rounded-md hover:bg-[#08678e] transition-colors"
              >
                Add Point
              </button>
            </div>

            <div className="flex-1 overflow-y-auto mb-5 bg-white border-2 border-black rounded-md p-4">
              {editedCoords.map((coord, index) => (
                <div key={index} className="flex items-center mb-2.5">
                  <span className="mr-2.5 w-[70px]">Point {index + 1}</span>
                  <input
                    type="text"
                    placeholder="latitude, longitude"
                    value={[coord.lat, coord.lng].filter(v => v !== '' && v !== undefined).join(', ')}
                    onChange={(e) => handleCoordinateChange(index, e.target.value)}
                    className="flex-1 p-2 border border-gray-300 rounded bg-white"
                  />
                  <button
                    onClick={() => handleDeletePoint(index)}
                    className="ml-2.5 px-2 py-1 border-none text-white bg-[#0A7CAD] cursor-pointer rounded hover:bg-[#08678e] transition-colors"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={saveInputs}
              className="w-full p-3 text-base cursor-pointer bg-[#0A7CAD] text-white border-none rounded-md hover:bg-[#08678e] transition-colors"
            >
              Save Inputs
            </button>
          </div>
      )}
    </div>
  );
};

export default MapView;