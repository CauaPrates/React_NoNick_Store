import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Store } from '../pages/Store';
import { ProductDetails } from '../pages/ProductDetails';


export const Main = () => {

  return (
    
    <Switch>
        <Route exact path='/' component={Store}/>
        <Route path="/product/:idProduct" component={ProductDetails} />
    </Switch>
  )
}

