import React from 'react';
import 'tachyons';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import Route from 'react-router-dom/Route';
import Particles from 'react-particles-js';
import MyTrips from './components/MyTrips/MyTrips';
import AddTrip from './components/AddTrip/AddTrip';
import Navigation from './components/Navigation/Navigation';
import TripPlanning from './components/TripPlanning/TripPlanning';
import Home from './components/Home/Home'
import SignUpForm from './pages/SignUp';
import SignInForm from './pages/SignIn';
//import PlacesAutocomplete from './components/PlacesAutocomplete'
//import Destination from './components/Destination';
//import PersonList from './components/PersonList'

//import createtrip from './components/CreateTrip';

const particlesOption = {
  particles:{
    number: {
      value: 100,
      density: {
        enabled: true,
        value_area: 800
      }
    }
  }
}
function App() {
  return (
    <Router>
      <div className="App">
        <Particles className='particles' params={particlesOption} />
       
        <Navigation />
        
        
          
          

              <Route exact path="/" component={SignUpForm} />
              
              <Route path="/sign-in" component={SignInForm}/>
           
        

        
    
        <Route path="/home" exact strict component={Home} />
        <Route path="/myTrips" exact strict component={MyTrips}/>
        <Route path="/addTrip" exact strict component={AddTrip}/>
        <Route path="/planTrip" exact strict component={TripPlanning}/>
               
               
      </div>
    </Router>
  );
}

export default App;
