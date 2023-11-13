import React from 'react'
import Button from 'react-bootstrap/Button';
// import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { CustomInput } from './CustomInput';

export const SignUpForm = () => {
  const inputs = [
    {
      label : "First Name",
    type: "text",
    name:"name",
    required: true,
    placeholder:"First name"
    },
    {
      label : "Last Name",
    type: "name",
    name:"name",
    required: true,
    placeholder:"Last name"
    },
    
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
    },
    {
      label : " Confirm Password",
    type: "password",
    name: "Confirm password",
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
      Already an User !! <a href="/">Log In</a> Now
    </div>
  </Form>
  )
}
