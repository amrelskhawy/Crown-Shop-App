import React, {useContext} from 'react'
import { CartContext } from '../../context/cart-context'
import { Button } from '../button-component/button-component'
import './ProductItem.scss'

const ProductItem = ({product}) => {
  const {name, price, imageUrl,...otherProps} = product
  const {addItemToCart} = useContext(CartContext)

  const addProductToCart = ()=>  addItemToCart(product)


  return (
    <div className='product-card-container' {...otherProps}>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}$</span>
      </div>
      <Button
        button_type="inverted" onClick={addProductToCart}>Add To Cart</Button>
    </div>
  )
}

export default ProductItem
