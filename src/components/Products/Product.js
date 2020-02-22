/***********************************************
  PRODUCT COMPONENT IMPORTS
***********************************************/
import React from 'react';
import { Link } from 'react-router-dom'

/***********************************************
  PRODUCT COMPONENT IMPORTS
***********************************************/

export default function Product({ id, title, price, image }) {
  const imageUrl = image.url;
  return <article className="product">
    <div className="img-container">
      <img src={imageUrl} alt={title} />
      <Link className="btn btn-primary product-link" to={`products/${id}`}>More Info</Link>
    </div>
    <div className="product-footer">
      <p className="product-title">{title}</p>
      <p className="product-price">{price}</p>
    </div>
  </article>
}
