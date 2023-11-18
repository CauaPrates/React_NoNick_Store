import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Store } from '../pages/Store';

import Modal from './ModalWindow';

export const Main = () => {

  return (
    
    <Switch>
        <Route exact path='/' component={Store}/>
        <Route exact path='/login' component={Modal}/>
    </Switch>
  )
}
