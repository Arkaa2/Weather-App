import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setErro] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "32519a04c41a7b1c368b0b71d863b27a";
  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      let result = {
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weatherDescription: jsonResponse.weather[0].description, // Adjust property name
        city: jsonResponse.name, // Add city name
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handelChange = (evt) => {
    setCity(evt.target.value);
  };
  let handelSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      setErro(false); // Clear the error state
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (error) {
      setErro(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handelSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handelChange}
        />
        <br />
       
        <br />
        <Button variant="contained" type="submit">
         Search 
        </Button>
        <br/><br /><br />
        {error && <p style={{ color: "red" }}>No such place here</p>}
      </form>
    </div>
  );
}
