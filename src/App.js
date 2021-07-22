import React, { useState } from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  LayersControl,
} from "react-leaflet";
import Watersheds from "./Watersheds";
import InfoBox from "./InfoBox";
import watershedData from "./static/Major_Watersheds_Regional.geojson.json";
import hydroData from "./static/Hydrographic_Features_Poly.geojson.json";
import Hydrography from "./Hydrography";

function App() {
  const CENTER = [40.028624, -75.186722];
  const [info, setInfo] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const toggle = () => {
    setInfo((s) => !s);
  };

  // Clean up datafile
  hydroData.features = hydroData.features.map((f) => ({
    ...f,
    properties: {
      ...f.properties,
      CREEK_NAME: f.properties.CREEK_NAME?.replace(
        /trib\b|trib\./,
        "tributary"
      ),
    },
  }));

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>PHL H20</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossorigin=""
        ></script>
      </Helmet>

      <header className="App-header">
        <div className="info-drop" onClick={toggle}>
          💧
        </div>
        <p className="title">
          PHL{" "}
          <span className="blue">
            H<sub>2</sub>0
          </span>
        </p>
        <p>visualizing the watershed of occupied Lenapehoking</p>
        <div className="slider">
          <span>grid </span>
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            defaultValue={opacity}
            onChange={(e) => setOpacity(+e.target.value)}
            className="layerslider"
          />
          <span> satellite</span>
        </div>
      </header>
      {info && <InfoBox open={info} classProp={info ? "fade-in" : ""} />}

      <MapContainer
        center={CENTER}
        zoom={10}
        scrollWheelZoom={true}
        zoomControl={false}
        id="mapDiv"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          opacity={1 - opacity}
        />
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          opacity={opacity}
        />
        );
        <LayersControl position="topright">
          <LayersControl.Overlay checked name="Regional watershed boundaries">
            <Watersheds data={watershedData} />
          </LayersControl.Overlay>
          <LayersControl.Overlay
            checked
            name="Rivers, streams, and creeks&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
          >
            <Hydrography data={hydroData} />
          </LayersControl.Overlay>
        </LayersControl>
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
}

export default App;
