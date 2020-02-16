/***********************************************
  LOADING COMPONENT IMPORTS
***********************************************/
import React from 'react';
import loading from '../assets/loading.gif';

/***********************************************
  LOADING COMPONENT
***********************************************/
export default function Loading({ productsErrorState }) {
  return (
    <div className="loading">
      <h2>Loading...</h2>
      <img src={loading} alt="Loading gif" />
      {productsErrorState && <h3>We Have A Problem!!!</h3>}
    </div>
  );
}
