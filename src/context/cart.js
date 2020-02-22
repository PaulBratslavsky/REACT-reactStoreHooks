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
    CART CONTEXT USE EFFECT
  *************************************************/
  React.useEffect(() => {
    // local storage

    const newCartTotalItems = cartState.reduce((total, cartItem) => total += cartItem.amount, 0)
    setCartItemsState(newCartTotalItems);

    const newCartTotalAmount = cartState.reduce((total, cartItem) => total += (cartItem.price * cartItem.amount), 0)
    setTotalState(parseFloat(newCartTotalAmount.toFixed(2)))

  }, [cartState])

  /*************************************************
    CART CONTEXT METHODS
  *************************************************/
  function removeItem(itemId) {
    setCartState([...cartState].filter(cartItem => cartItem.id !== itemId));
  }

  function increaseAmount(itemId) {
    const tempCart = [...cartState].map(cartItem => cartItem.id === itemId
      ? { ...cartItem, amount: cartItem.amount + 1 }
      : { ...cartItem })

    setCartState(tempCart);
  }

  function decreaseAmount(itemId) {
    const tempCart = [...cartState].map(cartItem => cartItem.id === itemId
      ? { ...cartItem, amount: cartItem.amount - 1 }
      : { ...cartItem })

    setCartState(tempCart);
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