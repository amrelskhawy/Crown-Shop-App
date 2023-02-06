import React, { useContext } from 'react'
import { Button } from '../button-component/button-component'
import { CartContext } from '../../context/cart-context'
import CartItem from '../cart-item/cart-item'
import './cart-dropdown.scss'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {
    const navigate = useNavigate()

    const { cartItems } = useContext(CartContext)
    return (
        <div className={`cart-dropdown-container`}>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button onClick={() => navigate('/checkout')}>
                GO TO THE CHECKOUT
            </Button>
        </div>
    )
}

export default CartDropdown
