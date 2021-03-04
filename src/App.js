import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from './component/Review/Review';
import Inventory from './component/Inventory/Inventory';
import ProductDetails from './component/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
    <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/product/:key">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="*">
            <h1>Not Found 404</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
