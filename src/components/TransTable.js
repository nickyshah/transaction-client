import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { deleteTrans } from '../helper/axiosHelper';
import { Alert, Button } from 'react-bootstrap';

export const TransTable = ({ transList, getAllTrans }) => {

  const [idsToDelete, setIdsToDelete] = useState([])
  const [resp, setResp] = useState({})

const handleOnSelect = e => {
const {checked, value} = e.target
if(checked){
  setIdsToDelete([
    ...idsToDelete, value
  ]) 
} else{
  setIdsToDelete(idsToDelete.filter(item => item !== value))
}
}
console.log(idsToDelete)

const handleOnAllSelect = e => {
  const {checked} = e.target
  if (checked) {
    // add all the ids to delete
    
    const ids = transList.map(({_id}) => _id)
  
    setIdsToDelete(ids)
  } else{
    setIdsToDelete([])
  }
}

const handleOnDelete = async() => {
  if(window.confirm("Are you sure you want to delete the selected item??")){
    const result = await deleteTrans(idsToDelete)
    setResp(result)
    if(result?.status === 'success'){
      // alert('Deleted successfully!')
      getAllTrans()
      setIdsToDelete([])
      
    }
  }

}



  return (
    <div className="mt-5">
      <div>{transList.length} items has been found</div>
      {resp.message && <Alert variant={resp.status === 'success' ? 'success' : 'danger'}>{resp.message}</Alert>}
      <Table striped bordered hover>
        <thead>
        <div className='d-flex'>
        
          </div>
          <tr>
            <th className='d-flex'><InputGroup.Checkbox aria-label="Checkbox for following text input" 
            onChange={handleOnAllSelect}
            checked={idsToDelete.length === transList.length}
            /> Select</th>
            <th>Date</th>
            <th>Title</th>
            <th>Income</th>
            <th>Expenses</th>
          </tr>
        </thead>
        <tbody>
          {transList.map(({ _id, title, date, amount, type }) => {
            return <tr>
              <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={handleOnSelect} 
              value={_id}
              checked={idsToDelete.includes(_id)}
              />
              <td>{new Date(date).toLocaleDateString()}</td>
              <td>{title}</td>
              {
                type === "income" ? (<>
                  <td className='text-success'>{amount}</td>
                  <td>{ } </td>
                </>) : (
                  <>
                    <td></td>
                    <td className='text-danger'>{amount}</td>
                  </>
                )
              }

            </tr>
          })}
          <tr className='fw-bolder'>
            <td colSpan={3} >
              <div className='d-flex justify-content-between'>
              {
              idsToDelete.length > 0 && <Button
              onClick={handleOnDelete}
              variant="danger" >Delete {idsToDelete.length} Transaction </Button>
            }<span>Total Balance</span>
                </div></td>
            <td>{
              transList.reduce((acc, { amount, type }) => {
                return type === 'income' ? acc + amount : acc = amount;
              }, 0)
            }</td>
          </tr>

         
          

          

        </tbody>
      </Table>
    </div>

  );
}

