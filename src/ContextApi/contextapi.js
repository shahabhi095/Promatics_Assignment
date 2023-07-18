import { createContext, useState } from "react";


export  const userContext = createContext()

export const UserContextProvider = ({children})=>{
const [userDetails, setUSerDetails] = useState({name:"", email:"", skills:""})
const [shippingDetails, setShippingDetails] =useState({address:"", city:"", postalcode:""})
const [paymentsDetails, setPaymentsDetails] = useState({card_num:"", expiray_date:"", cvv:""})
    return (
        <userContext.Provider value={{userDetails, setUSerDetails, shippingDetails, setShippingDetails, paymentsDetails, setPaymentsDetails}}>
{children}
        </userContext.Provider>
    )
}
