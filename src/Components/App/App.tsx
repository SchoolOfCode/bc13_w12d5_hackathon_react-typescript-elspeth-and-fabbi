import './App.css';
import InputCity from '../InputCity/InputCity'
import SubmitButton from '../Submit/SubmitButton'
import Menu from '../Menu/Menu'
import DisplayWeather from '../DisplayWeather/DisplayWeather';
import { useState } from 'react';
import Map from '../Map/Map'

function App() {

  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("GB");
  const [weatherInfo, setWeatherInfo] = useState({});

  return (
    <div className="App">
      <h1>Room 5 Hackathon Weather App</h1>
      <InputCity setCity={setCity}/>
      <Menu setCountry={setCountryCode}/>
      <SubmitButton setInfo={setWeatherInfo} city={city} country={countryCode}/>
      <DisplayWeather info={weatherInfo}/>
      <Map/>
    </div>
  );
}

export default App;
