import React from "react";
import { GeoJSON } from "react-leaflet";
import watershedData from "./static/Major_Watersheds_Regional.geojson.json";

const Watersheds = () => {
  const onEachFeature = (feature, layer) => {
    const { ACRES, SQ_MILES, WATERSHED_NAME } = feature.properties;

    const popUpText = `<div class="popup">
        <h2>${WATERSHED_NAME}</h2>
        <div class="popupdata">${SQ_MILES.toFixed(2)} miles<sup>2</sup></div>
        <div class="popupdata">${ACRES.toFixed(2)} acres</div>
      </div>`;

    layer.bindPopup(popUpText);
  };

  return <GeoJSON data={watershedData} onEachFeature={onEachFeature} />;
};

export default Watersheds;
