import React from "react";
import "./map.css";
import MapGL from "react-map-gl";
const Map = () => {
  const viewport = {
    latitude: 23.793986,
    longitude: 90.414476,
    zoom: 14,
    bearing: 0,
  };
  return (
    <div
      className="map__container dark__bg section__padding"
      style={{ paddingTop: "1rem" }}
    >
      <div className="map__content " id="map">
        <MapGL
          {...viewport}
          width="100%"
          height="500px"
          mapStyle="mapbox://styles/jubayerjuhan/ckwiwizji2ns314p3eujgf83m"
          // onViewportChange={setViewport}
          mapboxApiAccessToken="pk.eyJ1IjoianViYXllcmp1aGFuIiwiYSI6ImNrdXI0cHFseTE4bWIyb3FybDdreWNpNDQifQ.ZlyPUhzJalEYFiinkw1ydg"
        ></MapGL>
      </div>
    </div>
  );
};

export default Map;
