import React, { useState } from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import Watersheds from "./Watersheds";
import InfoBox from "./InfoBox";

function App() {
  const [info, setInfo] = useState(false);
  const toggle = () => {
    info ? setInfo(false) : setInfo("display");
  };

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
        <p>visualizing the watersheds of occupied Lenapehoking</p>
      </header>
      {info && <InfoBox open={info} />}
      <MapContainer
        center={[40.0217, -75.2013]}
        zoom={11}
        scrollWheelZoom={true}
        zoomControl={false}
        id="mapDiv"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Watersheds />
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
}

export default App;
