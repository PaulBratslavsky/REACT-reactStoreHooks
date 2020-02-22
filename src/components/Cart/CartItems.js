import React from 'react'
import CartItem from '../Cart/CartItem'
import { Link } from 'react-router-dom'

export default function CartItems({ cartState, totalState}) {
  const user = false;

  const showCartItems = cartState => cartState.map(cartItem =>
    <CartItem key={cartItem.id} {...cartItem} />
  );

  return <section className="cart-items secton">
    <h2>Your Cart</h2>
    {showCartItems(cartState)}
  <h2>Total: ${totalState}</h2>
    {user
      ? <Link to="/checkout" className="btn btn-primary btn-block">Checkout</Link>
      : <Link to="/login" className="btn btn-primary btn-block">Log In</Link>
    }
  </section>
}
