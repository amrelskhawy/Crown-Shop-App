import React, { useContext } from 'react'
import { HiChevronRight, HiChevronLeft } from "react-icons/hi"
import { CartContext } from '../../context/cart-context'

import "./checkout-item.styles.scss"

const CheckoutItem = ({ cartItem}) => {
    const { id, name, price, quantity } = cartItem
    const { addItemToCart, removeItemFromCart, removeElement } = useContext(CartContext)
    return (
        <div className='checkout-item-container'>
            <div className="image-container">
                <img alt={`${name}`} src={cartItem.imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <span className='arrow'  onClick={() => removeItemFromCart(cartItem)}><HiChevronLeft /></span>
                {quantity}
                <span  className='arrow' onClick={() => addItemToCart(cartItem)}><HiChevronRight /></span>

            </span>
            <span className='price'>{price}</span>

            <span className='remove' style={{cursor: "pointer"}} onClick={()=> removeElement(cartItem)}>&#10005;</span>
        </div>
    )
}

export default CheckoutItem