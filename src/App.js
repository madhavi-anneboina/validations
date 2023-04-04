import { useState } from "react"
import React from 'react'

const App = () => {
  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [formErrors, setFormErrors] = useState({})

  const {name, email, password} = formdata

  const chageHandler = e => {
    setFormData({...formdata, [e.target.name]: e.target.value })
  
  }
  const submitHandler = (e) =>{
    e.preventDefault()
    const errors = validateForm(formdata)
    setFormErrors(errors)
    if(Object.keys(errors).length === 0){
      console.log("Form is valid Submiting")
    } else{
      console.log("form is invalid fix the errors")
    }

  }

  const validateForm = (fields) =>{
    const errors = {};
    if (!fields.name.trim()){
      errors.name = "Name is required"
    } if (!fields.email.trim()){
      errors.email = "Email is requird"
    } else if (!/\S+@\S+\.\S+/.test(fields.email)){
      errors.email = "Email is invalid"
    } if (!fields.password.trim()){
      errors.password = "Password is Required"
    } else if ( fields.password.trim().length < 6) {
      errors.password = "Password must be atleast 6 char"
    }
    return errors;

  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <center>
          <label htmlFor='name'> Name</label>
          <input type="text" name="name" value={name} onChange={chageHandler} /> <br />
          {formErrors.name && <p className="error"> {formErrors.name}</p>}
          <label htmlFor='email'> Email</label>
          <input type="email" name="email" value={email} onChange={chageHandler} /> <br />
          {formErrors.email && <p className="error "> {formErrors.email}</p>}
          <label htmlFor='password'> Password</label>
          <input type="password" name="password" value={password} onChange={chageHandler} /> <br />
          {formErrors.password && <p className="error"> {formErrors.password}</p>}
          <button> Submit </button>

        </center>
      </form>
    </div>
  )
}

export default App
