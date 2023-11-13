import React from 'react'
import Button from 'react-bootstrap/Button';
// import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { CustomInput } from './CustomInput';

export const LogInForm = () => {
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
    <Form>
    {inputs.map((item, i) => (
      <CustomInput key ={i} {...item} />
    ))}
    
     
    <div className="d-grid">
    <Button variant="primary" type="submit">
      Submit
    </Button>
    </div>
    

    <div className="text-end mt-4">
      Are You a new Member ? <a href="/signup">SignUp</a> Now
    </div>
  </Form>
  )
}
