import "./App.css";
import { Helmet } from "react-helmet";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import watershedData from "./static/Major_Watersheds_Regional.geojson.json";

function App() {
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
        <p>
          PHL{" "}
          <span className="blue">
            H<sub>2</sub>0
          </span>
        </p>
        <p>
          mapping the watersheds of{" "}
          <span className="strikethrough">Philadelphia</span> occupied
          Lenapehoking
        </p>
      </header>
      <MapContainer
        center={[40.0217, -75.2013]}
        zoom={10}
        scrollWheelZoom={true}
        id="mapDiv"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={watershedData} />
      </MapContainer>
    </div>
  );
}

export default App;
