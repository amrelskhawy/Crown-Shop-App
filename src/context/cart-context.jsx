import { useState, createContext, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {

    // find if cartItems Contains productToAdd
    const existingProduct = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    // If found, increament the quantity
    if (existingProduct) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }
    // return new array with modified cartItems/ new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeItem = (cartItems, productToDecrease) => {
    const existingProduct = cartItems.find((cartItem) => cartItem.id === productToDecrease.id)

    if (existingProduct) {

        if (existingProduct.quantity === 1) {
            return cartItems.filter((cartItem) => cartItem.id !== productToDecrease.id)
        }
        return cartItems.map((cartItem) =>
            cartItem.id === productToDecrease.id ? { ...cartItem, quantity: productToDecrease.quantity - 1 } : cartItem
        )
    }
}

const remove = (cartItems, element) => {
    return cartItems.filter((cartItem) => cartItem.id !== element.id)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    removeElement: () => { },
    cartCount: 0
})

export const CartContextProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)

    const [cartItems, setCartItems] = useState([])

    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) =>
            total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeElement = (productToRemove) => {
        setCartItems(remove(cartItems, productToRemove))
    }

    const removeItemFromCart = (productToReduce) => setCartItems(removeItem(cartItems, productToReduce))

    const value = { isCartOpen, removeItemFromCart, removeElement, setIsCartOpen, addItemToCart, cartItems, cartCount }

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}