// cart context
import React from 'react'
import localCart from '../utils/localCart'

export const CartContext = React.createContext()

function CartProvider({ children }) {
  const [cartState, setCartState] = React.useState(localCart);
  const [totalState, setTotalState] = React.useState(0);
  const [cartItemsState, setCartItemsState] = React.useState(0);

  console.log(cartState, 'From local cart')
  return (
    <CartContext.Provider value={{ cartState, totalState, cartItemsState }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider