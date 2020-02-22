import React from 'react'
import { CartContext } from '../context/cart'
import EmptyCart from '../components/Cart/EmptyCart'
import CartItems from '../components/Cart/CartItems'

export default function Cart() {
  const { state, methods } = React.useContext(CartContext)

  return <> {state.cartState.length > 0
    ? <CartItems cartState={state.cartState} totalState={state.totalState} methods={methods}/>
    : <EmptyCart />
  } </>
}
