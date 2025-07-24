import React from 'react'
import {Mydata} from '../App'



function Details() {

    return (
        <>
        <Mydata.Consumer>
            {(val)=>{
                return(
                    <>
                    <h1>Name: {val.name}</h1>
                    <h1>Email: {val.email}</h1>
                    <h1>Role: {val.role}</h1>
                    </>
                )
            }}
        </Mydata.Consumer>
        </>

    )
}

export default Details