import React from 'react';
import Card from './Card';
import './ForecastCards.css';

const ForecastCards = props => {
   console.log(props.data);
   return (
      <div className="forecastCard__control">
         <label>{`${props.data.name}, ${props.data.country}`}</label>
         <ul>
            {props.data.list.map((weatherInfo, index) => (
               <Card data={weatherInfo} key={index} />
            ))}
         </ul>
      </div>
   );
};

export default ForecastCards;
