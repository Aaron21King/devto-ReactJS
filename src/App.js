
// import { useState } from "react";
import "../src/App.scss";

import { Routes, Route } from "react-router-dom";

//containers
import HomeContainer from "./containers/home/home";

import LoginContainer from "./containers/Login/Loginpadre";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="login" element={<LoginContainer />} />
        <Route path=":id" element={<p>detalle de post</p>} />
        <Route path="/create" element={<p>Creación de post</p>} />

      </Routes>
    </div>
  );
}

export default App;
