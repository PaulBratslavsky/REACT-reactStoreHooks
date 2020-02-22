/***************************************************
  CART CONTEXT IMPORTS
***************************************************/
import React from 'react'
import localCart from '../utils/localCart'

/***************************************************
  CART CONTEXT INITIALIZED
***************************************************/
export const CartContext = React.createContext()

/***************************************************
  CART CONTEXT PROVIDER
***************************************************/
function CartProvider({ children }) {

  /*************************************************
    CART CONTEXT STATE HOOKS
  *************************************************/
  const [cartState, setCartState] = React.useState(localCart)
  const [totalState, setTotalState] = React.useState(0)
  const [cartItemsState, setCartItemsState] = React.useState(0)

  /*************************************************
    CART CONTEXT METHODS
  *************************************************/
  function removeItem(itemId) {
    const cartAfterRemove = cartState.filter(cartItem => cartItem.id !== itemId)
    setCartState(cartAfterRemove);
  }

  /*************************************************
    CART CONTEXT STATE AND METHODS EXPORTS
  *************************************************/
  const state = {
    cartState,
    totalState,
    cartItemsState
  }

  const methods = {
    removeItem,
  }

  return (
    <CartContext.Provider value={{ state, methods }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider