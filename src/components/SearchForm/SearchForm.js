import React, { useState } from 'react';
import { DATA } from '../../config';
import './SearchForm.css';
import Whisperer from './Whisperer';

const SearchForm = props => {
   const [value, setValue] = useState('');

   const onSubmitHandler = event => {
      event.preventDefault();
      let selectedCity;
      for (let i = 0; i < DATA.length; i++) {
         if (DATA[i].name.toLowerCase() === value.trim().toLocaleLowerCase()) {
            selectedCity = DATA[i];
            break;
         }
      }

      //if (!selectedCity) TODO: error message
      submitForm(selectedCity);
   };

   const submitForm = selectedCity => {
      setValue('');
      props.fetchData(selectedCity);
   };

   const onChangeHandler = event => {
      setValue(event.target.value.trimStart());
   };

   const setValueFromWhisperer = async selectedCity => {
      submitForm(selectedCity);
   };

   return (
      <div className="searchForm__control">
         <form onSubmit={onSubmitHandler}>
            <div className="searchForm__form">
               <input type="text" value={value} onChange={onChangeHandler} />
            </div>
         </form>
         <Whisperer
            searchValue={value}
            setValueFromWhisperer={setValueFromWhisperer}
         />
      </div>
   );
};

export default SearchForm;
