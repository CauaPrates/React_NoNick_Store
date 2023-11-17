import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Store } from '../pages/Store';
import { Login } from '../pages/Login';


export const Main = () => {

  return (
    
    <Switch>
        <Route exact path='/' component={Store}/>
        <Route exact path='/login' component={Login}/>
    </Switch>
  )
}
