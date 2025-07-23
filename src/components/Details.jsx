import React from 'react'
import { Mydata, Mydata2 } from '../App'
function Details({ data3 }) {
    console.log("data3", data3)
    return (
        <>
            <div className='bg-green-200 w-max p-8'>
                <Mydata.Consumer>
                    {(val) => {
                        return (
                          <>
                          <Mydata2.Consumer>
                            {(val2)=>{
                                return(
                                    <>
                                    <h1>Name:{val.name}</h1>
                                    <h1>Email:{val.email}</h1>
                                    <h1>Role:{val.role}</h1>
                                    <h1>Name:{val2.name}</h1>
                                    <h1>Email:{val2.email}</h1>
                                    <h1>Role:{val2.role}</h1>
                                    </>
                                )
                            }}
                          </Mydata2.Consumer>
                          </>

                        )
                    }}
                </Mydata.Consumer>
            </div>

        </>

    )
}

export default Details