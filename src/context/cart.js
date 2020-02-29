/***************************************************
  CART CONTEXT IMPORTS
***************************************************/
import React from 'react'
import LocalCtr from '../utils/local'

const uiID = 'cartContext'

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
  const [cartState, setCartState] = React.useState(LocalCtr.get(uiID))
  const [totalState, setTotalState] = React.useState(0)
  const [cartItemsState, setCartItemsState] = React.useState(0)

  /*************************************************
    CART CONTEXT USE EFFECT
  *************************************************/
  React.useEffect(() => {

    LocalCtr.set(uiID, cartState)
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
  // Goog examole
  function increaseAmount(itemId) {
    console.log('function increase amount called', itemId)
    const tempCart = [...cartState].map(cartItem => cartItem.id === itemId
      ? { ...cartItem, amount: cartItem.amount + 1 }
      : { ...cartItem })

    setCartState(tempCart);
  }

  function decreaseAmount(itemId, amount) {
    const tempCart = [...cartState].map(cartItem => cartItem.id === itemId
      ? { ...cartItem, amount: cartItem.amount - 1 }
      : { ...cartItem })

    if (amount > 1) {
      setCartState(tempCart)
    } else { removeItem(itemId) }
  }

  function addToCart(product) {
    const { id, image: { url }, title, price } = product;
    const newItem = { id, image: url, title, price, amount: 1 }
    const ifItem = [...cartState].find(item => item.id === id)
    ifItem ? increaseAmount(id) : setCartState([...cartState, newItem])

  }

  function clearCart() {
    console.log(`Clear Cart`)
    setCartState([])
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
    addToCart,
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