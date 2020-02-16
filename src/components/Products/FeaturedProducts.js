/***********************************************
  PRODUCTS COMPONENT IMPORTS
***********************************************/
import React from 'react';
import { ProductContext } from '../../context/products';
import Loading from '../Loading';
import ProductList from '../Products/ProductList';

/***********************************************
  PRODUCTS COMPONENT
***********************************************/

export default function FeaturedProducts() {

  const { featuredProductsState, loadingState, productsErrorState } = React.useContext(ProductContext);

  return <> { loadingState 
      ? <Loading productsErrorState={productsErrorState} /> 
      : <ProductList title="Featured Products" products={featuredProductsState} /> 
  } </>
}

