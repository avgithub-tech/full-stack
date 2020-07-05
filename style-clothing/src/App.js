import React from 'react';
import './App.css';
import HomePage from './components/HomePage'
import ShopPage from './components/ShopPage'
import './css/homepage.scss'
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;
