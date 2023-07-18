import React from 'react'
import { useContext, useState } from 'react'
import { userContext } from '../ContextApi/contextapi'
import { Navigate, useNavigate } from 'react-router-dom'

export const PaymentInformation = () => {
    const [userData, setUserInfo] = useState({card_num:"", expiray_date:"", cvv:""})
    //const [addskills, setaddSkills]= useState("")
    const navigate = useNavigate()
  

    const {  paymentsDetails,setPaymentsDetails} = useContext(userContext)
    const [error, setError] = useState(false)
    const handleChange = (event)=>{
        setUserInfo({...userData, [event.target.name]: event.target.value})
        // if(event.target.name ==="skills"){
        //     setaddSkills(event.target.value)
        // } 
    }
    
    const HandleSubmit = (e)=>{
    
        e.preventDefault()
        if(userData.address==="" || userData.city==="" || userData.postalcode ===""){
            setError(true)
        }else{
            setError(false)
            setPaymentsDetails([...paymentsDetails, userData])
        }
      
    }
    
    console.log("paymentsDetails",paymentsDetails)
    
        const {card_num,
            expiray_date,
            cvv} = userData
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
