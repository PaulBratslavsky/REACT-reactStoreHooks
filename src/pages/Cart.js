import React from 'react'
import { CartContext } from '../context/cart'
import EmptyCart from '../components/Cart/EmptyCart'
import CartItems from '../components/Cart/CartItems'

export default function Cart() {
  const { cartState, totalState, cartItemsState } = React.useContext(CartContext)

  return <> {cartState.length > 0
    ? <CartItems cartState={cartState} totalState={totalState} />
    : <EmptyCart />
  } </>
}
