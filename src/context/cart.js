/***************************************************
  CART CONTEXT IMPORTS
***************************************************/
import React from 'react'
import localCart from '../utils/localCart'

/***************************************************
  CART CONTEXT CREATED
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

  function increaseAmount(itemId) {
    console.log(`Increase by 1 item id:${itemId}`)
  }

  function decreaseAmount(itemId) {
    console.log(`Decrease by 1 item id:${itemId}`)
  }

  function addItem(itemId) {
    console.log(`Add item id:${itemId}`)
  }

  function clearCart() {
    console.log(`Clear Cart`)
    setCartState([]);
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
    addItem,
    increaseAmount,
    decreaseAmount,
    clearCart,
  }

  return (
    <CartContext.Provider value={{ state, methods }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider