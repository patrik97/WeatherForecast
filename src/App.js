import React, { useState } from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import ForecastCard from './components/ForecastCard/ForecastCard';

import './app.css';

function App() {
   const [forecastData, setForecastData] = useState();

   const handleData = data => {
      // As there is 3-hour forecast data, only every 8th data is relevant (0, 8, 16, 24, 32, 40);
      const list = data.list;
      const forData = {
         name: data.city.name,
         country: data.city.country,
         list: [list[0], list[8], list[16], list[24], list[32], list[4]],
      };
      setForecastData(forData);
   };

   const getData = selectedCity => {
      fetch(
         `https://api.openweathermap.org/data/2.5/forecast?id=${selectedCity.id}&appid=ef8dfe83011b0540d556dfe6ae121abc`
      )
         .then(result => result.json())
         .then(data => handleData(data));
   };

   return (
      <div className="app">
         <SearchForm fetchData={getData} />
         <ForecastCard data={forecastData} />
      </div>
   );
}

export default App;
