import React, { useState } from 'react';

import './SearchForm.css';
import Whisperer from './Whisperer';

const SearchForm = () => {
   const [value, setValue] = useState('');

   const onSubmitHandler = event => {
      event.preventDefault();
      submitForm();
   };

   const submitForm = () => {
      setValue('');
   };

   const onChangeHandler = event => {
      setValue(event.target.value.trimStart());
   };

   const setValueFromWhisperer = selectedCity => {
      submitForm();
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
