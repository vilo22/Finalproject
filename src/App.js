import React from 'react';
import { Header } from "./components/Header"
import { ProductsList } from "./components/Products/index"
import 'boxicons';
import {Router, Route} from 'react-router-dom'
import SignIn from './components/signin/Signin';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route path='/signin'><SignIn/></Route>
      <ProductsList />
    </div>
    </Router>
  );
}

export default App;
