import React, {useState} from 'react';
import axios from 'axios';

//this is an example for searchinput api also

const WeatherApi = () => {

    const [city, setCity] = useState('');
    const [country,setCountry] = useState('');
    const [weather, setWeather] = useState();
    const [error, setError] = useState('');

    const API_KEY ='ae3e143f448b41c36a0dbf43c2c31872';

    const fetchWeatherDetails = async () => {
        try {
            if(!city || !country) {
                return setError('Please enter city and country');
            }
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
        setWeather(response.data);
        setError('');
        setCity('');
        setCountry('');
        } catch(err) {
            setError('City not found');
            setWeather([]);
        }
       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeatherDetails();
    }

  return (
    <div>
        <h4>WeatherApi</h4>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter City' value={city} onChange={(e) => setCity(e.target.value)} />
            <input type='text' placeholder='Enter Country' value={country} onChange={(e) => setCountry(e.target.value)} />
            <button type='submit'>Search</button>
        </form>
        {error && <p>{error}</p>}
        {weather && (
            <div>
                <h3>Name: {weather.name}</h3>
                <p>Description: {weather.weather[0].description}</p>
                <p>Temperature: {weather.main.temp}</p>
                <p>Humidity: {weather.main.humidity}</p>
                <p>Wind Speed: {weather.wind.speed}</p>
            </div>

        )}
    </div>
  )
}

export default WeatherApi;