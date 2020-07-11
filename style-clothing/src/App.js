import React from 'react';
import './App.css';
import HomePage from './components/HomePage'
import ShopPage from './components/ShopPage'
import './css/homepage.scss'
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header'


function App() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;
