import React from 'react'
import Details from './Details'
import { Mydata2 } from '../App'
function Card() {
  return (
<>
<Details/>
<Mydata2.Consumer>
 {(val)=>{
return(
    <>
    <h1>Email: {val.email}</h1></>
)
 }}
</Mydata2.Consumer>

</>
  )
}

export default Card