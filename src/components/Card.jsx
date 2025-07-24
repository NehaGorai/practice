import React from 'react'
import Details from './Details'
import { Mydata3 } from '../App'

function Card() {
  return (
    <>
     <Mydata3.Consumer>
      {
        (val)=>{
          return(
            <>
            <h1>String: {val}</h1>
            <Details/>
            </>
          )
        }
      }
     </Mydata3.Consumer>
    </>
  )
}

export default Card