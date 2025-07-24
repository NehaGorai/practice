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
                            <h1>Dashboard</h1>
                            {val.map((item) => {
                                return (
                                    <h1 key={item}>{item}</h1>
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