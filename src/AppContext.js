import React from 'react'
import { useState, useEffect } from 'react'

const AppContext = React.createContext()

const AppContextProvider = ({children}) => {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])
    
    const toggleFavorite = (id) => {
        const updatedPhotos = allPhotos.map(photo => {
            if(photo.id === id){
                return {...photo, isFavorite: !photo.isFavorite}
            } else {
                return photo
            }
        })
        setAllPhotos(updatedPhotos)
    }

    const addToCart = (newItem) => {
        setCartItems(prevItems => [...prevItems, newItem])
        console.log(cartItems)
    }

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    const emptyCart = () => {
        setCartItems([])
    }

    return(
        <AppContext.Provider value={{
            allPhotos, 
            cartItems,
            toggleFavorite, 
            addToCart, 
            removeFromCart, 
            emptyCart
        }}>
            {children}
        </AppContext.Provider>
    )
} 

export {AppContextProvider, AppContext}