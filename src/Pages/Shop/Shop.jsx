import React , {useContext} from 'react'
import './shop.scss'

import { ProductsContext } from '../../context/shop-data.context'
import ProductItem from '../../Components/Product-item/ProductItem'


export const Shop = () => {
  const {products} = useContext(ProductsContext)
  return (
    <div className='products-container'>
            {
                products.map(product =>
                  
                  <ProductItem
                    key={product.id}
                    product={product}
                  />
              )
            }
    </div>
  )
}
