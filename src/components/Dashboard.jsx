import React from 'react'
import Card from './Card'
import { Mydata2 } from '../App'


function Dashboard() {
    return (
        <>
            <Mydata2.Consumer>
                {(val) => {
                    return (
                        <>
                        
                            {val.map((item) => {
                                return (
                                    <h1 key={item}>Array: {item}</h1>
                                )
                            })}
                            <Card />
                        </>
                    )
                }}
            </Mydata2.Consumer>
        </>
    )
}

export default Dashboard