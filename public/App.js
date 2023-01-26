import React from 'react';
import {BrowserRouter as Router,Link, Route,Switch} from 'react-router-dom'
import Basket from './components/Basket';
import Header from './components/Header';
import Product from './components/Product';
function App() {
  return (
     <Router>
        <div className="container">
            <Header />
            <Switch>
               <Route path="/" exact component={Product} />
               <Route path="/carts" exact component={Basket} />
            </Switch>
        </div>
     </Router>
  );
}

export default App;
