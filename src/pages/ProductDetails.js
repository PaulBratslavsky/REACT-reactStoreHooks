import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  let { id } = useParams();
  console.log(id, 'HELLO');
  return (
    <div>
      <h2>Products Details</h2>
    </div>
  );
};

export default ProductDetails;
