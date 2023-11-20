import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
// import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { CustomInput } from './CustomInput';
import { postUser } from '../helper/axiosHelper';
import { Alert, Spinner } from 'react-bootstrap';


const initialstate = {
  name: " ",
  email: " ",
  password: " ",
  confirmPassword: " "
}
export const SignUpForm = () => {
const [form, setForm] = useState(initialstate)
const [resp, setResp] = useState({
  status: "",
  message: ""
})
const [isPending, setIsPending] = useState(false)

const handleOnChange = e => {
  const {name, value} = e.target
  setForm({
    ...form,
    [name]: value,
  })
}

const handleOnSubmit = async (e) => {
  e.preventDefault()
  console.log(form)
const {confirmPassword, ...rest} = form

  // lets check the password if they match 
if(confirmPassword !== rest.password){
  return alert("Password do not match")
}
  // callaxios helper to make the post api call
  setIsPending(true)
  const data = await postUser(rest)
  setResp(data)
  setIsPending(false)
  data.status === "success" && setForm(initialstate)
  // console.log(data)

}

  const inputs = [
    {
      label : "First Name",
    type: "text",
    name:"name",
    required: true,
    placeholder:"First name",
    value:form.name
    },
    
    {
      label : "Email",
    type: "email",
    name:"email",
    required: true,
    placeholder:"name@email.com",
    value: form.email
    }, 
    {
      label : "Password",
    type: "password",
    name: "password",
    required: true,
    placeholder:"xxxxxxx",
    value:form.password
    },
    {
      label : " Confirm Password",
    type: "password",
    name: "confirmPassword",
    required: true,
    placeholder:"xxxxxxx",
    value:form.confirmPassword
    }
  ]
  // console.log(form)

  return (
    <Form onSubmit={handleOnSubmit}>
      {resp.message && (<Alert varient={resp.message === "success" ? "success" : "danger"} >{" "}{resp.message} </Alert>)}
    {inputs.map((item, i) => (
      <CustomInput key ={i} {...item} onChange={handleOnChange}/>
    ))}
    
     
    <div className="d-grid">
    <Button variant="primary" type="submit" disabled={isPending}>
      {isPending ? <Spinner/> : "Submit"}
    </Button>
    </div>
    

    <div className="text-end mt-4">
      Already an User !! <a href="/">Log In</a> Now
    </div>
  </Form>
  )
}
