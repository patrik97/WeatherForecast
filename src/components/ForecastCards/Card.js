import React from 'react';
import './Card.css';

const Card = props => {
   const date = new Date(props.data.dt_txt);
   const image = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
   return (
      <li className="wheatherData__card">
         <div className="flexbox__main">
            <div className="flexbox__weather">
               <div>
                  <img src={image} alt={props.data.weather[0].description} />
               </div>
               <div className="flexbox__weather--main">
                  {props.data.weather[0].main}
               </div>
            </div>
            <div className="flexbox__dateTemperature">
               <div className="flexbox__dateTemperature--date">
                  {date.toLocaleDateString()}
               </div>
               <div>Temperature: {props.data.main.temp} &#8451;</div>
            </div>
         </div>
      </li>
   );
};

export default Card;
