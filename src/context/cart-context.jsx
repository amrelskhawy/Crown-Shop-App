import { useState, createContext } from "react";

const addCartItem = (cartItems, productToAdd) => {

    // find if cartItems Contains productToAdd
    const existingProduct = cartItems.find((cartItem) => cartItem.id === productToAdd.id )

    // If found, increament the quantity
    if (existingProduct) { 
        return cartItems.map((cartItem) => 
        cartItem.id === productToAdd.id  ? 
            {...cartItem, quantity: cartItem.quantity +  1} : cartItem
    ) }
    // return new array with modified cartItems/ new cart item
    return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=> {},
    cartItems: [],
    addItemToCart: () => {}
})

export const CartContextProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)

    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const value = {isCartOpen, setIsCartOpen , addItemToCart, cartItems}

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}