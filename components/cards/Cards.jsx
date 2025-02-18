import React from 'react';
import data from './data'; // Import the list from data.js
import './Cards.css';

const Cards = () => {
  return (
    <div className="cards-container">
      {data.map((item) => (
        <div key={item.id} className="card">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;