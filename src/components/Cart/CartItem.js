import React from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

export default function CartItem({ id, title, price, amount, image, methods }) {

  return <article className="cart-item">
    <img src={image} alt={title} />
    <div>
      <h4>{title}</h4>
      <h5>${price}</h5>
      <button
        type="button"
        className="cart-btn remove-btn"
        onClick={() => methods.removeItem(id)}>remove
      </button>
    </div>
    <div>
      <button
        type="button"
        className="cart-btn amount-btn"
        onClick={() => methods.increaseAmount(id)}><FaAngleUp />
      </button>
      <p className="item-amount">{amount}</p>
      <button
        type="button"
        className="cart-btn amount-btn"
        onClick={() => methods.decreaseAmount(id, amount)}><FaAngleDown />
      </button>
    </div>
  </article>;
}
