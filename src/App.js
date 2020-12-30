import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer'
import Item from './componentes/Item';

const App = () => <>
  <BrowserRouter>
  <NavBar/>
  <Switch>
    <Route exact path="/">
      <ItemListContainer />      
    </Route>
    <Route exact path="/category/:id">
      <ItemListContainer />
    </Route>
    <Route exact path="/item/:id">
      <ItemDetailContainer />
    </Route>
    <Route exact path="/">
      <Brand />
    </Route>
    <Route exact path="/item/:id">
      <Item />
    </Route>
    <ItemListContainer greeting="Bienvenidos a PerifericosGamer."/>
  </>;
  </Switch>
  </BrowserRouter>
export default App;