import React from 'react'
import { useState } from 'react'
//in this form we do perform actions so that's why we use dispatch method
import { updateMobile, updateName, withdraw, deposit,reset } from './store'
import { useDispatch } from 'react-redux';



export function Form() {

  const [balan, setbalan] = useState('');
  const [nam, setnam] = useState('');
  const [mob, setmob] = useState('');
  let dispatch = useDispatch()


  return (
    <div>
      <div className='container'>
        <h2>Form</h2>
        <div className='row'>
          <div className='col-5'>
            <input type='text' className='form-control' value={balan} onChange={(e) => {
              let ba = e.target.value;
              setbalan(ba);
            }} placeholder='Enter Balance' />

          </div>
          <button onClick={() => {
            dispatch(deposit(balan))
            setbalan("")
          }} className='btn btn-primary col-2 mx-2'>Deposit</button>
          <button onClick={() => {
            dispatch(withdraw(balan))
            setbalan('')
          }} className='btn btn-danger col-2'>Withdraw</button>
        </div>
        <div className='row mt-2'>
          <div className='col-5'>
            <input type='text' className='form-control' value={nam} onChange={(e) => {
              let full = e.target.value;
              setnam(full);
            }} placeholder='Enter name' />

          </div>

          <button onClick={() => {
            dispatch(updateName(nam))
            setnam('')
          }} className='btn btn-primary col-2 mx-2'>Update</button>
        </div>
        <div className='row mt-2'>
          <div className='col-5'>
            <input type='text' className='form-control' value={mob} onChange={(e) => {
              let mo = e.target.value;
              setmob(mo);
            }} placeholder='Enter mobile' />

          </div>

          <button onClick={() => {
            dispatch(updateMobile(mob))
            setmob('')
          }} className='btn btn-primary col-2 mx-2'>Update</button>
          <button onClick={()=>{
            dispatch(reset(''))
          }} className='btn btn-danger col-2' >Reset</button>
        </div>
        
      </div>
      

    </div>
  )
}

export default Form