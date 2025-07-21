import React from 'react'
import Details from './Details'
function Card({data2}) {
    console.log("data2",data2)
  return (
<>
<Details data3={data2}/>
<div className='bg-blue-100 w-max p-8'>
        <h1>Card</h1>
        <div>This is the {data2.name}'s Dashboard</div>
        </div>
</>
  )
}

export default Card