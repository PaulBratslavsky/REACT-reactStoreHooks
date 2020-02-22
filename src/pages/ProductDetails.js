/***********************************************
  PRODUCTS DETAILS COMPONENT IMPORTS
***********************************************/
import React from 'react';
import { ProductContext } from '../context/products';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import { CartContext } from '../context/cart';
import SingleProductDetail from '../components/Products/SingleProductDetail';
import Loading from '../components/Loading';
/***********************************************
  PRODUCTS DETAILS COMPONENT
***********************************************/
export default function ProductDetails() {

  const { id } = useParams();
  const history = useHistory();

  const { productsState } = React.useContext(ProductContext);
  const selectedProduct = productsState.find((item => item.id === parseInt(id)));
  
  return (
    <div>
      {productsState.length > 0
        ? <SingleProductDetail {...selectedProduct} history={history} />
        : <Loading />
      }
    </div>
  );
};

