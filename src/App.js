
import React from "react";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import {Navbar} from "./componenets/navbar"
import './App.css';
import {Shop} from './pages/Shop/shop';
import {Cart} from './pages/cart/cart'
import { ShopContextprovider } from "./context/shopcontext";

 

function App() {
  return (
  <div className='App'>
    <ShopContextprovider>
    <Router>
    <Navbar/>
  
      <Routes>
<Route path='/'element={<Shop />}/>
<Route path='/cart' element={<Cart />}/>
      </Routes>
    </Router>
    </ShopContextprovider>
    </div>
  );
}

export default App;
