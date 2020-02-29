/***********************************************
  PRODUCT COMPONENT IMPORTS
***********************************************/
import React from 'react';
import { CartContext } from '../../context/cart'


/***********************************************
  PRODUCT COMPONENT IMPORTS
***********************************************/

export default function SingleProductDetail({ product, history }) {
  const { methods } = React.useContext(CartContext)
  const { title, price, image, description } = product

  function handleButtonClick() {
    methods.addToCart(product)
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
