import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { LogInForm } from '../components/LogInForm'

const Login = () => {
  return (
    <Container fluid>
        <Row>
            <Col className='bg-primary text-light vh-100 d-flex justify-content-center align-items-center'>
                <div className='shadow-lg rounded p-3'>
                    <h1>Welcone Back !</h1>
                    <p>Log in to our page and take Control of your transaction</p>
                </div>
            </Col>
            <Col className='d-flex justify-content-center align-items-center '>
                <div className="shadow-lg p-3 rounded">
                    <h2>Login Now</h2>
                    <hr />
                <LogInForm />
                </div>
                
            </Col>
        </Row>
    </Container>
  )
}

export default Login