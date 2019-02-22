import React from 'react';

const dia = (props) => {
    
    
    return ( 
        
        <div className="box">
        <h3>{props.dia}  </h3>
         <a href="" > <img src={props.pic} alt = 'images' /> </a>
          <h5>Temp: {props.temp} F</h5>
          <h5>Humidity: {props.humidity}</h5>
          <h5>Winds: {props.wind}</h5>
        </div>
      );
}

export default dia;