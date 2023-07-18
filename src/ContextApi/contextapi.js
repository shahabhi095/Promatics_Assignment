import { createContext, useState } from "react";


export  const userContext = createContext()

export const UserContextProvider = ({children})=>{
const [userDetails, setUSerDetails] = useState([])
const [shippingDetails, setShippingDetails] = useState([])
const [paymentsDetails, setPaymentsDetails] = useState([])
    return (
        <userContext.Provider value={{userDetails, setUSerDetails, shippingDetails, setShippingDetails, paymentsDetails, setPaymentsDetails}}>
{children}
        </userContext.Provider>
    )
}
