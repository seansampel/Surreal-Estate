import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './navbar';
import Properties from './properties';
import AddProperty from './addproperty';

import '../styles/app.css';

const App = () => {



  return (

    <div className="App">
      <header>
      <Navbar />
        <Switch>
        <Route path="/">
            <Properties />
          </Route>
          <Route path="/add-property">
            <AddProperty />
          </Route>
        </Switch>
      </header>
    </div>    
      );
};


export default App;
