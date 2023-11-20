import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
// import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { CustomInput } from './CustomInput';
import { loginUser } from '../helper/axiosHelper';
import { Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


export const LogInForm = () => {

  const [form, setForm] = useState({})
  const [isLoding, setIsLoding] = useState(false)
  const [resp, setresp] = useState([])


  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const {name, value} = e.target
    setForm({
      ...form,
      [name]:value, 
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    // console.log(form)
    setIsLoding(true)
    setresp({})
    const result = await loginUser(form)
    console.log(result)
    setIsLoding(false)
    // if login is success redirect user to dashboard
    if(result?.status === 'success'){
      // redirect user
      navigate("/dashboard")
    } 

    // else show errror message
    else {
      setresp(result)
    }
  }
  const inputs = [
    {
      label : "Email",
    type: "email",
    name:"email",
    required: true,
    placeholder:"name@email.com"
    }, 
    {
      label : "Password",
    type: "password",
    name: "password",
    required: true,
    placeholder:"xxxxxxx"
    }
  ]

  return (
    <Form onSubmit={handleOnSubmit}>
      {
        resp.message && <Alert variant='danger'>
          {resp.message}
        </Alert>
      }
    {inputs.map((item, i) => (
      <CustomInput key ={i} {...item} onChange={handleOnChange}/>
    ))}
    
     
    <div className="d-grid">
    <Button variant="primary" type="submit" disabled={isLoding}>
      {
        isLoding ? <Spinner animation="border"/> : "Submit"
      }
    </Button>
    </div>
    

    <div className="text-end mt-4">
      Are You a new Member ? <a href="/signup">SignUp</a> Now
    </div>
  </Form>
  )
}
