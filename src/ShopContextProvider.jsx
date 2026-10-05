import React from 'react'
import {createContext} from 'react'
import food from './data'

export const ShopContext = createContext()


const ShopContextProvider = ({children}) => {
  return (
    <ShopContext.Provider value={{food}}>
        {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider