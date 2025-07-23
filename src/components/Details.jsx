import React from 'react'
import {Mydata,Mydata2} from '../App'

function Details() {
    return (
        <>
            <Mydata.Consumer>
                {(val1) => {
                    return (
                        <>
                            <Mydata2.Consumer>
                                {(val2)=>{
                                    return(
                                        <>
                                        <h1>{val1.name}</h1>
                                        <h1>{val2.name}</h1>
                                        </>
                                    )
                                }}
                            </Mydata2.Consumer>
                        </>
                    )
                }}
            </Mydata.Consumer>
        </>

    )
}

export default Details