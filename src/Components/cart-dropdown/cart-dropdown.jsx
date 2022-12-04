import React from 'react'
import { Button } from '../button-component/button-component'
import './cart-dropdown.scss'
const CartDropdown = ({isHidden}) => {

    return (
        <div className={`cart-dropdown-container ${isHidden ? 'hidden': ''}`}>
            <div className='cart-items' />
            <Button>GO TO THE CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown
