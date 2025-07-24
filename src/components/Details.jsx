import React from 'react'
import { Mydata, Mydata4 } from '../App'

function Details() {

    return (
        <>
            <Mydata.Consumer>
                {(val) => {
                    return (
                        <>
                            <Mydata4.Consumer>
                                {(vals) => (
                                    <>
                                        <h2>Function from Context</h2>
                                        <button className='bg-green-400 px-4 border rounded-4xl' onClick={vals}>Click Me</button>
                                        <h1> Object: {val.name}- {val.email} -{val.role}</h1>
                                    </>
                                    
                                )}
                            </Mydata4.Consumer>
                        </>
                    )
                }}
            </Mydata.Consumer>
        </>

    )
}

export default Details