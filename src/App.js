import React from "react";
import Grid from "./components/Grid";
import Login from "./components/Login";

export default function App() {
  return (
    <div>
      <Login/>
      <div className="map" display="none">
        <Grid/>
      </div>
    </div>

  );
}
