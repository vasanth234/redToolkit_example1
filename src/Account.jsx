import React from 'react'
import {useSelector} from 'react-redux'
const Account = () => {

    const data=useSelector((state)=>{
        console.log(state)
        return state.user
    })
  return (
    <div className='container'>
        <h2>Account details</h2>
        <div>
         <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Balance</th>
                    <th>FullName</th>
                    <th>mobile</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.balance}</td>
                    <td>{data.fullName}</td>
                    <td>{data.mobile}</td>
                </tr>
            </tbody>
         </table>
        </div>

    </div>
  )
}

export default Account