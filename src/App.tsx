import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Productlist from './components/productlist';
import addProduct from './components/addProduct';
import { AppProvider } from './context/ProductContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path='/' Component={Productlist} />
          <Route path='/productlist' Component={Productlist} />
          <Route path='/addProduct' Component={addProduct} />
        </Routes>
      </Router>
      </AppProvider>
  );
}

export default App;
