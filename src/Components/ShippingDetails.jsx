import React from 'react'
import { useContext, useState } from 'react'
import { userContext } from '../ContextApi/contextapi'
import { Navigate, useNavigate } from 'react-router-dom'
export const ShippingDetails = () => {
    const [userData, setUserInfo] = useState({address:"", city:"", postalcode:""})
    //const [addskills, setaddSkills]= useState("")
    const navigate = useNavigate()
    const {shippingDetails, setShippingDetails} = useContext(userContext)
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
            setShippingDetails([...shippingDetails, userData])
        }
      
    }
    const handlePrev=()=>{
        navigate("/")
    }
    
    const handleNext=()=>{
        if(userData.address==="" || userData.city==="" || userData.postalcode ===""){
            setError(true)
        }
        if(!error){
            navigate("/paymentinformation")
        }else{
            return <h1>Data is not secure</h1>
        }
    }
    console.log("shippingDetails",shippingDetails)
    
        const {address,city,postalcode} = userData
  return (
    <div><form action="" onSubmit={HandleSubmit}>
    <label htmlFor="Name">Address</label>
    <input type="text" name='address' value={address} onChange={handleChange} required/><br />
    <label htmlFor="email">City</label>
    <input type="text" name='city' value={city} onChange={handleChange}  required/><br />
    <label htmlFor="skills" >Postal code</label>
    <input type="number" name='postalcode' onChange={handleChange}  value={postalcode}/><br />
    
    <input type="submit" />
</form>
<button onClick={handlePrev}>prev</button>
{error===true?<h1>Data is not secure</h1>:null}
       <button disabled={error} onClick={handleNext}>Next</button>
</div>
  )
}
