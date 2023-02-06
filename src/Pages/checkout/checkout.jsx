import React, { useContext } from 'react'
import "./checkout.styles.scss"

import { CartContext } from "../../context/cart-context"
import CheckoutItem from '../../Components/checkout-item/CheckoutItem'
const Checkout = () => {
	const { cartItems, total } = useContext(CartContext)
	return (
		<>
			<div className="checkout-container">
				<div className="checkout-header">
					{
						["Product", "Description", "Quantity", "Price", "Remove"].map((element, i) => (<div key={i} className='header-block'>
							<span>{element}</span>
						</div>))
					}
				</div>
				{
					cartItems.map((cartItem, i) => {
						return (
							<CheckoutItem key={i} cartItem={cartItem} />
						)
					})
				}
				<span className='total'>Total : ${total}</span>
			</div>
		</>
	)
}

export default Checkout