import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import Dia from './Dia/Dia';
import uuid from 'uuid';

import Clouds from './images/day/clouds.png';
import Clear from './images/day/clear.png';
import Mist from './images/day/mist.png';
import Rain from './images/day/rain.png';
import ShowerRain from './images/day/shower-rain.png';
import Snow from './images/day/snow.png';
import Storm from './images/day/storm.png';

class App extends Component {
    state = {
        weather:  [
     {
        temp: '86',
        humidity: '40',
        wind: '5'
     },
     {
        temp: '70',
        humidity: '60',
        wind: '8'
      
     },
     {
        temp: '80',
        humidity: '120',
        wind: '9'
       
     },
     {
        temp: '90',
        humidity: '80',
        wind: '5'
     },
     {
        temp: '70',
        humidity: '60',
        wind: '8'
      
     },
     {
        temp: '80',
        humidity: '120',
        wind: '9'
       
     },
     {
        temp: '80',
        humidity: '120',
        wind: '9'
       
     },

    ],

  

    dias : ['Mon','Tue','Wend','Thur','Fri','Sat', 'Sun'],


    images :  [Clouds,Clear, Mist, Rain, ShowerRain, Snow, Storm],
  
}

init = ()=>{
    const newWeather = {
        id: uuid.v4(),
        temp: this.state.temp,
        wind: this.state.wind
    }
    this.setState({
       weather: [...this.state.weather, newWeather]
    });
}


  testHandler = (p) =>{
      this.setState({});
        
          this.init()
  };

   // {this.state.dias.map ((dia,i) =>  <p> {dia} {i}</p>)} //
  render() {
    return (
      <div className="App">
        <header className="App-header">

     
      <div className="container">
         <div>
            <Dia 
            dia = { this.state.dias[0]} 
            pic = {this.state.images[0]}  
            temp = { this.state.weather[0].temp}
            humidity = { this.state.weather[0].humidity}
            wind= { this.state.weather[0].wind}
            
            
            />
         </div>
         <div>
         <Dia 
            dia = { this.state.dias[1]} 
            pic = {this.state.images[1]}  
            temp = { this.state.weather[1].temp}
            humidity = { this.state.weather[1].humidity}
            wind= { this.state.weather[1].wind}
            />
         </div>
         <div>
         <Dia 
            dia = { this.state.dias[2]} 
            pic = {this.state.images[2]}  
            temp = { this.state.weather[2].temp}
            humidity = { this.state.weather[2].humidity}
            wind= { this.state.weather[2].wind}
            />
         </div>
         <div> 
         <Dia 
            dia = { this.state.dias[3]} 
            pic = {this.state.images[3]}  
            temp = { this.state.weather[3].temp}
            humidity = { this.state.weather[3].humidity}
            wind= { this.state.weather[3].wind}
            />
         </div>
         <div>
           <Dia 
             dia = { this.state.dias[4]} 
             pic = {this.state.images[4]}  
             temp = { this.state.weather[4].temp}
             humidity = { this.state.weather[4].humidity}
             wind= { this.state.weather[4].wind}
             />        
         </div>
         <div>
         <Dia 
           dia = { this.state.dias[5]} 
           pic = {this.state.images[5]}  
           temp = { this.state.weather[5].temp}
           humidity = { this.state.weather[5].humidity}
           wind= { this.state.weather[5].wind}
           />  
         </div>

         <div>
         <Dia 
            dia = { this.state.dias[6]} 
            pic = {this.state.images[6]}  
            temp = { this.state.weather[6].temp}
            humidity = { this.state.weather[6].humidity}
            wind= { this.state.weather[6].wind}/>
         </div>

      </div>
       


    
         
        </header>

     
      </div>
    );
  }


}

export default App;
