import React, { useContext, useState } from 'react'
import { userContext } from '../ContextApi/contextapi'
import { Navigate, useNavigate } from 'react-router-dom'

export const UserInformation = () => {
    const [userData, setUserInfo] = useState({name:"", email:"", skills:""})
//const [addskills, setaddSkills]= useState("")
const navigate = useNavigate()
const {userDetails, setUSerDetails} = useContext(userContext)
const [error, setError] = useState(false)
const handleChange = (event)=>{
    setUserInfo({...userData, [event.target.name]: event.target.value})
    // if(event.target.name ==="skills"){
    //     setaddSkills(event.target.value)
    // } 
}
// if(userDetails.length!==0){
//     setUserInfo(userDetails[userDetails.length-1])
// }

const HandleSubmit = (e)=>{

    e.preventDefault()
    if(userData.name==="" || userData.email==="" || userData.skills==="" ){
        setError(true)
    }else{
        setError(false)
    }
    setUSerDetails([...userDetails, userData])
}

const handleNext=()=>{
    if(userData.name==="" || userData.email==="" || userData.skills==="" ){
        setError(true)
    }else{
        setError(false)
    }
    if(!error){
        navigate("/shipingdetails")
    }else{
        return <h1>Data is not secure</h1>
    }
}

console.log("userDetails",userDetails)

console.log(userData)
    const {name,email,skills} = userData
  return (
    <div>
        <form action="" onSubmit={HandleSubmit}>
            <label htmlFor="Name">Name</label>
            <input type="text" name='name' value={name} onChange={handleChange} required/><br />
            <label htmlFor="email">Email</label>
            <input type="email" name='email' value={email} onChange={handleChange}  required/><br />
            <label htmlFor="skills" >Skills</label>
            <input type="text" name='skills' onChange={handleChange}  value={skills}/><button>Add More</button><br />
            
            <input type="submit" />
        </form>
        {error===true?<h1>Data is not secure</h1>:null}
       <button disabled={error} onClick={handleNext}>Next</button>
        
    </div>
  )
}
