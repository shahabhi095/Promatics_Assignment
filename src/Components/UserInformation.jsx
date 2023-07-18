import React, { useContext, useState } from 'react'
import { userContext } from '../ContextApi/contextapi'
import { Navigate, useNavigate } from 'react-router-dom'

export const UserInformation = () =>{
const navigate = useNavigate()
const {userDetails, setUSerDetails} = useContext(userContext)
const [error, setError] = useState(false)
const handleChange = (event)=>{
    setUSerDetails({...userDetails, [event.target.name]: event.target.value})
    setError(false)  
}

const handleNext=()=>{
    if(userDetails.name==="" || userDetails.email==="" || userDetails.skills.length===0 ){
        setError(true)
    }else{
        setError(false)
        navigate("/shipingdetails")
    }
}

console.log("userDetails",userDetails)

console.log(userDetails)
    const {name,email,skills} = userDetails
  return (
    <div>
        <form action="">
            <label htmlFor="Name">Name</label>
            <input type="text" name='name' value={name} onChange={handleChange} required/><br />
            <label htmlFor="email">Email</label>
            <input type="email" name='email' value={email} onChange={handleChange}  required/><br />
            <label htmlFor="skills" >Skills</label>
            <input type="text" name='skills' onChange={handleChange}  value={skills}/><button>Add More</button><br />
        </form>
        {error===true?<h1>Data is not secure</h1>:null}
       <button disabled={error} onClick={handleNext}>Next</button>
        
    </div>
  )
}
