// products context
import React from 'react';
import { getData } from '../utils/getData';

export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
  // Use Effect
  React.useEffect(() => {
    getData('products')
      .then(response => {
        setProductsState(response.data);
        setFeaturedProductsState(getFeaturedProducts(response.data));
        setLoadingState(false);
      })
      .catch(err => {
        console.error('FETCH PRODUCT ERROR: ', err);
        setProductsErrorState(err);
      });

    return () => {
      // Clean up function
    };
  }, []);

  const getFeaturedProducts = products =>
    products.filter(item => item.featured === true);
  // SET LOGIC IN CONTEXT
  const [loadingState, setLoadingState] = React.useState(true);
  const [productsState, setProductsState] = React.useState([]);
  const [featuredProductsState, setFeaturedProductsState] = React.useState([]);
  const [productsErrorState, setProductsErrorState] = React.useState(null);

  const products = {
    productsState,
    featuredProductsState,
    loadingState,
    productsErrorState
  };

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}
