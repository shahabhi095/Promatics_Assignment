import React from 'react'
import { useContext, useState } from 'react'
import { userContext } from '../ContextApi/contextapi'
import { Navigate, useNavigate } from 'react-router-dom'

export const PaymentInformation = () => {
    const navigate = useNavigate()
  

    const {  paymentsDetails,setPaymentsDetails, userDetails, shippingDetails} = useContext(userContext)
    const [error, setError] = useState(false)
    const handleChange = (event)=>{
        setPaymentsDetails({...paymentsDetails, [event.target.name]: event.target.value});
        setError(false)
    }
    
    const HandleSubmit = (e)=>{
    
        e.preventDefault()
        if(paymentsDetails.card_num==="" || paymentsDetails.expiray_date==="" || paymentsDetails.cvv.length<3){
            setError(true)
        }else{
            setError(false)
           console.log()
        }
      
    }
    console.log("userDetails",userDetails)
    console.log("shippingDetails",shippingDetails)
    console.log("paymentsDetails",paymentsDetails)
    
        const {card_num, expiray_date,cvv} = paymentsDetails
  return (
    <div><form action="" onSubmit={HandleSubmit}>
    <label htmlFor="Name">Card Num</label>
    <input type="number" name='card_num' value={card_num} onChange={handleChange} required/><br />
    <label htmlFor="email">Expiray Date</label>
    <input type="date" name='expiray_date' value={expiray_date} onChange={handleChange}  required/><br />
    <label htmlFor="skills" >CVV</label>
    <input type="number" name='cvv' onChange={handleChange}  value={cvv}/><br />
    
    <input type="submit" />
</form>
<button disabled={error} onClick={()=>navigate("/shipingdetails")}>prev</button>
</div>
  )
}
