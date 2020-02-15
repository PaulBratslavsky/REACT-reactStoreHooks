/***********************************************
  PRODUCTS COMPONENT IMPORTS
***********************************************/
import React from 'react';
import { ProductContext } from '../context/products';
import Loading from '../components/Loading';
import ProductList from '../components/Products/ProductList';

/***********************************************
  PRODUCTS COMPONENT
***********************************************/

export default function Products() {

  const { productsState, loadingState, productsErrorState } = React.useContext(ProductContext);

  return <> { loadingState 
      ? <Loading productsErrorState={productsErrorState} /> 
      : <ProductList title="Products" products={productsState} /> 
  } </>
}
