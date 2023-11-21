import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { LogInForm } from '../components/LogInForm'
import { SignUpForm } from '../components/SignUpForm'
import { TopNav } from '../components/TopNav'

const SignUpPage = () => {
  return (
    <>
    <TopNav />
    <Container fluid>
        <Row>
            <Col className='bg-info text-light vh-100 d-flex justify-content-center align-items-center'>
                <div className='shadow-lg rounded p-3'>
                    <h1>Join Our Community !!</h1>
                    <p>Leverage Our System to Manage Your Finance</p>
                </div>
            </Col>
            <Col className='d-flex justify-content-center align-items-center '>
                <div className="shadow-lg p-3 rounded">
                    <h2>Register </h2>
                    <hr />
                <SignUpForm />
                </div>
                
            </Col>
        </Row>
    </Container>
    </>
    
  )
}

export default SignUpPage