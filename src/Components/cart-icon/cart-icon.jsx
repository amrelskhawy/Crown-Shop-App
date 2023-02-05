import React, { useContext } from 'react'
import { ReactComponent as ShoppingCart } from '../../assets/imgs/shopping-bag.svg'
import { CartContext } from '../../context/cart-context'
import './cart-icon.styles.scss'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartCount } = useContext(CartContext)
  const toggle = () => setIsCartOpen(!isCartOpen)

  return (
    <div className='cart-icon-container' onClick={toggle}>
      <ShoppingCart className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon
