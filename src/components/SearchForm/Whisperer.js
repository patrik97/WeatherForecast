import React from 'react';
import { DATA, ITEMS_IN_WHISPERER_COUNT } from '../../config';
import MenuItem from '../UI/MenuItem';

import './Whisperer.css';

const Whisperer = props => {
   if (!props.searchValue || props.searchValue === '') return <div></div>;

   let filteredCities = [];
   let index = 0;
   while (
      index < DATA.length &&
      filteredCities.length < ITEMS_IN_WHISPERER_COUNT
   ) {
      if (
         DATA[index].name
            .toLowerCase()
            .startsWith(props.searchValue.toLowerCase())
      ) {
         filteredCities.push(DATA[index]);
      }
      index++;
   }

   if (filteredCities.length === 0) {
      return (
         <div className="whisperer__control--not_found">
            Sorry. No city with given name found! Please enter another name.
         </div>
      );
   }

   const whispererOnClickHandler = event => {
      const id = event.target.id;
      const selectedCity = filteredCities.filter(city => city.id === +id)[0];
      props.setValueFromWhisperer(selectedCity);
   };

   return (
      <div className="whisperer__control">
         <ul>
            {filteredCities.map(filteredCity => {
               return (
                  <MenuItem
                     city={filteredCity}
                     key={filteredCity.id}
                     whispererOnClick={whispererOnClickHandler}
                  />
               );
            })}
         </ul>
      </div>
   );
};

export default Whisperer;
