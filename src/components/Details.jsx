import React from 'react'


function Details({data3}) {
    console.log("data3",data3)
  return (
  <>
    <div className='bg-green-200 w-max p-8'>
    <div>Details</div>
    <h1>Name: {data3.name}</h1>
    <h1>Email: {data3.email}</h1>
    <h1>Role: {data3.role}</h1>
    </div>

  </>

  )
}

export default Details