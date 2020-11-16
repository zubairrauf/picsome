import React from 'react'
import { useState, useEffect } from 'react'

const AppContext = React.createContext()

const AppContextProvider = ({children}) => {
    const [allPhotos, setAllPhotos] = useState([])
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])
    console.log('AppContext: ' + allPhotos)
    return(
        <AppContext.Provider value={{allPhotos}}>
            {children}
        </AppContext.Provider>
    )
} 

export {AppContextProvider, AppContext}