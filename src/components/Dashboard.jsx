import React from 'react'
import Card from './Card'
import { Mydata2 } from '../App'

function Dashboard() {
    return (
        <>
            <Card />
            <Mydata2.Consumer>
                {(val) => {
                    return (
                        <>
                            <h1>Name: {val.name}</h1>
                            <h1>Email: {val.email}</h1>
                            <h1>Role: {val.role}</h1>
                        </>
                    )
                }}
            </Mydata2.Consumer>
        </>
    )
}

export default Dashboard