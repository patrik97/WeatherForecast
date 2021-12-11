import React from 'react';

import './MenuItem.css';

const MenuItem = props => {
   return (
      <li className="item" onClick={props.whispererOnClick} id={props.city.id}>
         {props.city.name}
      </li>
   );
};

export default MenuItem;
