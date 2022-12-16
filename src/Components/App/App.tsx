import './App.css';
import InputCity from '../InputCity/InputCity'
import SubmitButton from '../Submit/SubmitButton'
import Menu from '../Menu/Menu'
import DisplayWeather from '../DisplayWeather/DisplayWeather';
import { useState } from 'react';


function App() {

  const [city, setCity] = useState("")
  const [countryCode, setCountryCode] = useState("")

  return (
    <div className="App">
      <InputCity setCity={setCity}/>
      <Menu/>
      <SubmitButton/>
      <DisplayWeather/>
    </div>
  );
}

export default App;
