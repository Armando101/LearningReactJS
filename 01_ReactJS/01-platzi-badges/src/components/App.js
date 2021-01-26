import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';

function App() {
  return (
    <BrowserRouter>
      {/* 
        Switch renderiza sólo la primera ruta con la que haga match
        exact indica que la ruta sea exacta es decir que no haga match con /badges cuando lo que busco es /badges/new
      */}
      <Switch>
        <Route exact path="/badges" component={Badges}/>
        <Route exact path="/badges/new" component={BadgeNew}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
