import React from 'react'
import { Button } from '../button-component/button-component'
import './ProductItem.scss'
const ProductItem = ({name, price, imageUrl,...otherProps}) => {
  return (
    <div className='product-card-container' {...otherProps}>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button
        button_type="inverted">Add To Cart</Button>
    </div>
  )
}

export default ProductItem
