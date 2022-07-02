// import { useState } from "react";
import "../src/App.scss";

import { Routes, Route } from "react-router-dom";

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