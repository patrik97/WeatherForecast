import React from 'react';

import './MenuItem.css';

const MenuItem = props => {
   return (
      <li className="item" onClick={props.whispererOnClick} id={props.city.id}>
         {`${props.city.name}, ${props.city.country}`}
      </li>
   );
};

export default MenuItem;
