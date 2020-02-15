import React from 'react';

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
