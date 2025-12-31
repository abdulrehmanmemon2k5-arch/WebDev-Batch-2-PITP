import {useState}  from 'react'
import './app.css'

function App() {

    const [weather, setWeather] = useState()
    const [city, setCity] = useState("")

    const fetchWeather = async () => {

        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=d9f2d1d621c24acaa4c104437253012&q=${city}&aqi=no`)
      
        const data = await response.json()

        setWeather(data)

    }
    return (
        <> 
        <input type='text' value={city} placeholder='enter a city name... ' onChange={ (event)=>  setCity(event.target.value) }></input> 
        <h1>{weather?.location.name}</h1>
        <h2>temperature: {weather?.current.temp_c} °C</h2>
        <h2>condition: <img src={weather?.current.condition.icon} /> {weather?.current.condition.text} </h2>
        <button type='button' onClick={fetchWeather}> show wheather</button>
        </>
    )
}

export default App