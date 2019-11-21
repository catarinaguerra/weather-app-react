import React from "react";
import Loader from "react-loader-spinner";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello </p>
        <a
          className="App-link"
          href="https://github.com/catarinaguerra/weather-app-react"
        >
          Open Source Code in GitHub
        </a>
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      </header>
    </div>
  );
}

export default App;
