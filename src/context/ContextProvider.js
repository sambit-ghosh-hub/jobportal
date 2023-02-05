import React,{createContext, useContext, useState} from "react";
import DataContext from "./DataContext";

export default function ContextProvider({children}){

    let [userProfile,setUserProfile]=useState({});

    return(
       < DataContext.Provider value={{
        userProfile,setUserProfile
       }}> 
       {children}
       </DataContext.Provider>
    )

}