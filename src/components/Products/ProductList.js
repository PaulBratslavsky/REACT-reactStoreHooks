/***********************************************
  PRODUCT LIST COMPONENT IMPORTS
***********************************************/
import React from 'react';
import Product from './Product';

/***********************************************
  PRODUCT LIST COMPONENT
***********************************************/

export default function ProductList({ title, products }) {
  console.log(products);
  return <section className="section">
    <h1 className="section-title">{title}: we have {products.length} items.</h1>
    <div className="products-center">
      {products.map(product => <Product key={product.id} {...product} />)}
    </div>
  </section>;
}
