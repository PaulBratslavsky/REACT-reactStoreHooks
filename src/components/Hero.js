/***********************************************
  HERO COMPONENT IMPORTS
***********************************************/
import React from 'react';

/***********************************************
  HeRO COMPONENT IMPORTS
***********************************************/
export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Reac Hero</h1>
        <p>Embrace your inner hero</p>
        {children}
      </div>
    </div>
  );
}
