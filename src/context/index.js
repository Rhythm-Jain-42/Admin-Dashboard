'use client'
import { createContext, useEffect, useState } from "react";


export const GlobalContext = createContext(null)

export default function GlobalState({children}){

    const [sideBarOpen, setSideBarOpen] = useState(false)
    
    return <GlobalContext.Provider value={{sideBarOpen, setSideBarOpen}}>{children}</GlobalContext.Provider>
}