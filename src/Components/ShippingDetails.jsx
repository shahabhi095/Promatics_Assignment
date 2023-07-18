import React from 'react'
import { useContext, useState } from 'react'
import { userContext } from '../ContextApi/contextapi'
import { Navigate, useNavigate } from 'react-router-dom'
export const ShippingDetails = () => {
    const navigate = useNavigate()
    const {shippingDetails, setShippingDetails} = useContext(userContext)
    const [error, setError] = useState(false)
    const handleChange = (event)=>{
        setShippingDetails({...shippingDetails, [event.target.name]: event.target.value})
        // if(event.target.name ==="skills"){
        //     setaddSkills(event.target.value)
        // } 
    }
    
    const handlePrev=()=>{
        navigate("/")
    }
    
    const handleNext=()=>{
        if(shippingDetails.address==="" || shippingDetails.city==="" || shippingDetails.postalcode ===""){
            setError(true)
            return <h1>Data is not secure</h1>
        }else{
            setError(false)
        }
        if(!error){
            navigate("/paymentinformation")
        }else{
          
        }
    }
    console.log("shippingDetails",shippingDetails)
    
        const {address,city,postalcode} = shippingDetails
  return (
    <div><form action="">
    <label htmlFor="Name">Address</label>
    <input type="text" name='address' value={address} onChange={handleChange} required/><br />
    <label htmlFor="email">City</label>
    <input type="text" name='city' value={city} onChange={handleChange}  required/><br />
    <label htmlFor="skills" >Postal code</label>
    <input type="number" name='postalcode' onChange={handleChange}  value={postalcode}/><br />
</form>
<button onClick={handlePrev}>prev</button>
{error===true?<h1>Data is not secure</h1>:null}
       <button disabled={error} onClick={handleNext}>Next</button>
</div>
  )
}
