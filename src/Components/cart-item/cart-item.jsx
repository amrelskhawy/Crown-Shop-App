import React from 'react'
import './cart-item.scss'

const CartItem = ({ cartItem }) => {
	const { name, quantity } = cartItem
	return (
		<div className='cart-item-container'>
			<img src={cartItem.imageUrl} alt='' />
			<div className='item-details'>
				<h2 className='name'>{name}</h2>
				<span className='quantity'>X {quantity}</span>
			</div>
		</div>
	)
}

export default CartItem
