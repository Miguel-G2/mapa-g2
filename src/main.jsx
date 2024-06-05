import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/sass/styles.scss";

import { TokenMapBox } from "./assets/js/variables/variables";
import { Map } from "./Map";

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = TokenMapBox

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Map/>
  </React.StrictMode>
)
