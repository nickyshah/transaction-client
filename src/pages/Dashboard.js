import React, { useEffect, useState } from 'react'
import { TopNav } from '../components/TopNav'
import { TransForm } from '../components/TransForm'
import { Container } from 'react-bootstrap'
import { TransTable } from '../components/TransTable'
import { getTrans } from '../helper/axiosHelper'

const Dashboard = () => {

  const [transList, setTransList] = useState([])
  const [resp, setResp] = useState()
  useEffect(()=>{
    getAllTrans()
  },[])

  const getAllTrans = async () => {
    const {status, transList} = await getTrans()
    status === "success" && setTransList(transList)
  }
  return (
    
    <div>
      {/* navbar */}
    <TopNav />
    <Container fluid>
      {/* form */}
      <TransForm getAllTrans={getAllTrans}/>
      {/* table */}
      <TransTable getAllTrans={getAllTrans} transList={transList}/>
      </Container>
    </div>
  )
}

export default Dashboard