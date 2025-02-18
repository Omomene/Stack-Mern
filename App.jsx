import React from 'react';
import Header from './components/header/Header';
import Cards from './components/cards/Cards';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <h1>My Card List</h1>
      <Cards />
      <Footer />
    </div>
  );
}


export default App;