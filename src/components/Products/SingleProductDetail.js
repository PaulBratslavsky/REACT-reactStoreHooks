/***********************************************
  PRODUCT COMPONENT IMPORTS
***********************************************/
import React from 'react';
import { useHistory } from 'react-router-dom'

/***********************************************
  PRODUCT COMPONENT IMPORTS
***********************************************/

export default function SingleProductDetail({ title, price, image, description, history }) {

  function handleButtonClick() {
    console.log('BTN CLICKED');
    // Pass to cart
    // Go to cart page
    history.push("/cart")
  }

  return <section className="single-product">
    <img src={image.url} alt={title} className="single-product-image" />
    <article>
      <h1>{title}</h1>
      <h2>{price}</h2>
      <p>{description}</p>
      <button
        className="btn btn-primary btn-block"
        onClick={handleButtonClick}>
        Add To Cart
      </button>
    </article>
  </section>
}
