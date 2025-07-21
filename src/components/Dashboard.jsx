import React from 'react'
import Card from './Card'

function Dashboard({data}) {
console.log("data",data)
    return (
        <>
        <Card data2={data}/>
        <div className='bg-amber-100 w-max p-8'>
        <h1>Dashboard</h1>
        <div>This is the {data.name}'s Dashboard</div>
        </div>

        </>
    )
}

export default Dashboard