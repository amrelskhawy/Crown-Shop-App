import React from 'react'
import { ReactComponent as ShoppingCart } from '../../assets/imgs/shopping-bag.svg'
import './cart-icon.styles.scss'

const CartIcon = () => {
  return (
    <div className='cart-icon-container'>
      <ShoppingCart className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon
