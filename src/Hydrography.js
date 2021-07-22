import React from "react";
import { GeoJSON } from "react-leaflet";

const Hydrography = ({ data }) => {
  const onEachFeature = (feature, layer) => {
    const { CREEK_NAME, WATERSHED, SUBSHED } = feature.properties;

    const popUpText = `<div class="popup">
        <h2>${CREEK_NAME}</h2>
        <div class="popupdata">Regional watershed: ${WATERSHED || "n/a"}</div>
        ${SUBSHED ? `<div class="popupdata">Subshed: ${SUBSHED}</div>` : ""}
      </div>`;

    layer.bindPopup(popUpText);
  };

  const style = (feature) => ({
    weight: 2,
  });

  return <GeoJSON data={data} onEachFeature={onEachFeature} style={style} />;
};

export default Hydrography;
