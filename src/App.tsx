import React from 'react';

import './App.css';
import Header from './components/Header';
import Slide from './components/Slide';
import Product from './components/Product';
import Footer from './components/Footer';

function App() {
  const title = [
    'Home',
    'About',
    'Shop',
    'Contact',
  ]
  return (
    <>
    <Header titles={title}/>
    <Slide/>
    <Product/>
    <Footer/>
    </>
  );
}

export default App;
