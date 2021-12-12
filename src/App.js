import React, { useState } from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import ForecastCards from './components/ForecastCards/ForecastCards';

import './app.css';

function App() {
   const [forecastData, setForecastData] = useState();

   const handleData = data => {
      // As there is 3-hour forecast data, only every 8th data is relevant (0, 8, 16, 24, 32, 40);
      const list = data.list;
      const forData = {
         name: data.city.name,
         country: data.city.country,
         list: [list[0], list[8], list[16], list[24], list[32]],
      };
      setForecastData(forData);
   };

   // WARNING: showCurrentLocation and loadPosition methods are strongly inspired by https://www.w3schools.com/html/html5_geolocation.asp
   const showCurrentLocation = position => {
      const { latitude, longitude } = position.coords;
      const requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=ef8dfe83011b0540d556dfe6ae121abc&units=metric`;
      executeRequest(requestUrl);
   };

   const loadPosition = () => {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(
            showCurrentLocation,
            loadDefaultPosition
         );
      } else {
         loadDefaultPosition();
      }
   };

   const loadDefaultPosition = () => {
      // London
      const requestUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${2643743}&appid=ef8dfe83011b0540d556dfe6ae121abc&units=metric`;
      executeRequest(requestUrl);
   };

   const executeRequest = requestUrl => {
      fetch(requestUrl)
         .then(result => result.json())
         .then(data => handleData(data));
   };

   if (!forecastData) loadPosition();

   const getData = selectedCity => {
      fetch(
         `https://api.openweathermap.org/data/2.5/forecast?id=${selectedCity.id}&appid=ef8dfe83011b0540d556dfe6ae121abc&units=metric`
      )
         .then(result => result.json())
         .then(data => handleData(data));
   };

   return (
      <div className="app">
         <SearchForm fetchData={getData} />
         {forecastData && <ForecastCards data={forecastData} />}
      </div>
   );
}

export default App;
