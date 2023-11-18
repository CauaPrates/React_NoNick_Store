import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Store } from '../pages/Store';
import LoginPopup from './LoginPopup';



export const Main = () => {

  return (
    
    <Switch>
        <Route exact path='/' component={Store}/>
        <Route exact path='/login' component={LoginPopup}/>
       
    </Switch>
  )
}
