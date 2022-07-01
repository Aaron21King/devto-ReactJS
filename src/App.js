// import { useState } from "react";
import "../src/App.scss";

import { Routes, Route } from "react-router-dom";

//containers
import HomeContainer from "./containers/home/home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeContainer />} />
      </Routes>
    </div>
  );
}

export default App;
