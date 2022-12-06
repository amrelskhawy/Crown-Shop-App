import React, {useContext} from 'react'
import { ReactComponent as ShoppingCart } from '../../assets/imgs/shopping-bag.svg'
import { CartContext } from '../../context/cart-context'
import './cart-icon.styles.scss'

const CartIcon = () => {
  const {isCartOpen,setIsCartOpen} = useContext(CartContext)
  const toggle = () => setIsCartOpen(!isCartOpen)
  
  return (
    <div className='cart-icon-container' onClick={toggle}>
      <ShoppingCart className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon
