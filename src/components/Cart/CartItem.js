import React from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { CartContext } from '../../context/cart';

export default function CartItem({ id, title, price, amount, image }) {
  const cartContext = React.useContext(CartContext)

  console.log(id, title, price, amount, image, "FROM SINGLE ITEM");

  function handleRemoveItemButtonClick() {
    console.log(`Delete item ${id}`);
  }

  function handleAddItemButtonClick() {
    console.log(`Add 1 ${id}`);
  }

  function handleSubtractItemButtonClick() {
    console.log(`Subrtact 1 ${id}`);
  }

  return <article className="cart-item">
    <img src={image} alt={title} />
    <div>
      <h4>{title}</h4>
      <h5>${price}</h5>
      <button
        type="button"
        className="cart-btn remove-btn"
        onClick={handleRemoveItemButtonClick}>remove
      </button>
    </div>
    <div>
      <button
        type="button"
        className="cart-btn amount-btn"
        onClick={handleAddItemButtonClick}><FaAngleUp />
      </button>
      <p className="item-amount">{amount}</p>
      <button
        type="button"
        className="cart-btn amount-btn"
        onClick={handleSubtractItemButtonClick}><FaAngleDown />
      </button>
    </div>
  </article>;
}
