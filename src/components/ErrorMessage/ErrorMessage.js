import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = props => {
   if (!props.show) return <div></div>;

   return (
      <div className="errorMessage">
         <p>
            Location you are searching does not exists. Please insert another
            city!
         </p>
         <button className="button-close" onClick={props.dismiss}>
            Close
         </button>
      </div>
   );
};

export default ErrorMessage;
