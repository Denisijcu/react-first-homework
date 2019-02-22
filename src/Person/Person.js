import React from 'react';

const person = (props) => {
    
    
    return ( 
        
        <div>
        <h1>My name is: {props.name}  </h1>
        <h1>{props.children}  </h1>
        </div>
      );
}

export default person;