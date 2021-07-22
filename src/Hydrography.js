import React from "react";
import { GeoJSON } from "react-leaflet";

const Hydrography = ({ data }) => {
  const onEachFeature = (feature, layer) => {
    const { CREEK_NAME } = feature.properties;

    const popUpText = `<div class="popup">
        <h2>${CREEK_NAME}</h2>
      </div>`;

    layer.bindPopup(popUpText);
  };

  return <GeoJSON data={data} onEachFeature={onEachFeature} />;
};

export default Hydrography;
