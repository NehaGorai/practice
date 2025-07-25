import React from 'react'
import {MainContext} from '../Context/Main'
import {useContext} from 'react'


function Two() {
    const day=useContext(MainContext)

    return (
        <>
   <h1>{day}</h1>
    
        </>
    )
}

export default Two