import React, { useState } from "react";
import Loader from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

import "./App.css";

function App() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png"
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="border rounded mt-5 text-left">
            <div className="row">
              <form className="border">
                <br />
                <div className="col-12 border">
                  <input type="search" />
                  <input type="submit" value="Search" />
                </div>
              </form>
            </div>
            <br />
            <div className="row">
              <ul className="list-unstyled border">
                <li className="col-12">Thursday, 21 Nov, 20:07</li>
              </ul>
            </div>
            <div className="row border">
              <div className="col-6 border">
                <h1>{weatherData.city}</h1>
                <ul className="list-unstyled">
                  <li>Humidity:{weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind} Km/h</li>
                </ul>
              </div>
              <div className="col-4 border border">
                <div className="temperature border">
                  {Math.round(weatherData.temperature)}
                  <span className="sign-size border">
                    <span>°</span>
                    <small>C | F </small>
                  </span>
                  <span className="border">
                    <img src={weatherData.iconUrl} />
                  </span>
                </div>
                <p>{weatherData.description}</p>
              </div>
            </div>
          </div>

          <a
            className="App-link text-left"
            href="https://github.com/catarinaguerra/weather-app-react"
          >
            Open Source Code in GitHub
          </a>
        </div>
      </div>
    );
  } else {
    let apiKey = "ce2ba46f91923c2e60910216838b8e09";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}

export default App;
