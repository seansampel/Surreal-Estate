import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './navbar';
import Properties from './properties';
import AddProperty from './addproperty';

import '../styles/app.css';

const App = () => (

  <div className="App">
    <header>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
        <AddProperty />
      </Switch>
    </header>
  </div>
);

export default App;
