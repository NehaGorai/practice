import React from 'react'
import Details from './Details'
import { Mydata3} from '../App'
function Card() {
    return (
        <>
         <Mydata3.Consumer>
            {(val3)=>{
                return(
                    <>
                    <h1>Name:{val3.name}</h1>
                    <h1>Email:{val3.email}</h1>
                    <h1>Role:{val3.role}</h1>
                    <Details data3={val3}/>
                    </>
                )
            }}
         </Mydata3.Consumer>
        </>
    )
}

export default Card