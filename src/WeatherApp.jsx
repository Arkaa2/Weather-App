import { useState } from 'react';
import SearchBox from './SearchBox'
import InfoBox from './infoBox'
export default function(){
    const [weatherInfo,setweatherInfo]=useState({
        city:"delhi",
        feelslike: 11.9,
    
        humidity: 66,
    
        temp: 12.84,
    
        tempMax: 13.05,
    
        tempMin: 12.84,
    
        weather: "haze",
    })
    let updateInfo=(newinfo)=>{
        setweatherInfo(newinfo);
    }
    return(<div>
        <h2>Weather App (Arka)</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>);
}