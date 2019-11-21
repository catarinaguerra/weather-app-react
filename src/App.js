import React from "react";
import Loader from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <form>
          <br />
          <input type="search" />
          <input type="submit" value="Search" />
        </form>
        <br />
        <ul className="list-unstyled">
          <li>Thursday, 21 Nov, 20:07</li>
          <li>Partly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <h1>Lisbon</h1>
            <ul className="list-unstyled">
              <li>Humidity:89%</li>
              <li>Percipitation:0%</li>
              <li>Wind: 6 Km/h</li>
            </ul>
          </div>
          <div className="col-6">
            <h2>13° C | F</h2>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" />
          </div>
        </div>

        <a
          className="App-link"
          href="https://github.com/catarinaguerra/weather-app-react"
        >
          Open Source Code in GitHub
        </a>
      </div>
    </div>
  );
}

export default App;
