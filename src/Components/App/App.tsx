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
      <h1>Weather watchers</h1>
      <div className='inputInfo'>
        <InputCity setCity={setCity}/>
        <Menu setCountry={setCountryCode}/>
        <SubmitButton setInfo={setWeatherInfo} city={city} country={countryCode}/>
      </div>
      <DisplayWeather info={weatherInfo}/>
      <Map info={weatherInfo}/>
    </div>
  );
}

export default App;
