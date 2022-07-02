// import { useState } from "react";
import "../src/App.scss";

import { Routes, Route } from "react-router-dom";

//containers
import HomeContainer from "./containers/home/home";
import Postdetail from "./Pages/Postdetail/Index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/post" element={<Postdetail />} />
      </Routes>
    </div>
  );
}

export default App;