import React, { useState } from 'react'
import { Form, Alert, Button, Spinner, Row, Col } from 'react-bootstrap'
// import { Form } from 'react-router-dom'
import { CustomInput } from './CustomInput'
import { postTrans } from '../helper/axiosHelper'

export const TransForm = ({ getAllTrans }) => {
    const [form, setForm] = useState({})
    // const [isLoding, setIsLoding] = useState(false)
    const [resp, setresp] = useState([])

    const handleOnChange = e => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })

    }
    const handleOnSubmit = async (e) => {
        e.preventDefault()
       

        const result = await postTrans(form)
       
        setresp(result)
        if (result.status === "success") {
            getAllTrans()
        }
    }

    const inputs = [

        {
            label: "Date",
            type: "date",
            name: "date",
            required: true,
            value: form.date
        },
        {
            label: "Title",
            type: "text",
            name: "title",
            required: true,
            value:form.title
        },
        {
            label: "Amount",
            type: "number",
            name: "amount",
            required: true,
            value:form.amount
        },
    ]
    return (
        <div className='mt-1'>
            {
                resp.message && <Alert variant={resp.status === "success" ? "success" : "danger"}>{" "}
                    {resp.message}
                </Alert>
            }
            <Form onSubmit={handleOnSubmit} className='shadow-lg border rounded p-3 '>

                <Row>
                    <Col md={3}>
                        <Form.Group className='mb-3'>
                            <Form.Label>Type</Form.Label>
                            <Form.Select onChange={handleOnChange} name='type'>
                                <option value="">--Select--</option>
                                <option value="income" >Income</option>
                                <option value="expenses">Expenses</option>

                            </Form.Select>

                        </Form.Group>

                    </Col>




                    {/* {
                resp.message && <Alert variant='danger'>
                    {resp.message}
                </Alert>
            } */}
                    {inputs.map((item, i) => (
                        <Col md={2} key={i}>
                            <CustomInput {...item} onChange={handleOnChange} />
                        </Col>
                    ))}


                    <Col md={1}>
                        <Form.Group className=''>
                            <div className="d-grid">
                                <Button variant="primary" type="submit" >
                                    Submit
                                </Button>
                            </div>
                        </Form.Group>
                    </Col>



                </Row>

            </Form>
        </div>

    )
}
