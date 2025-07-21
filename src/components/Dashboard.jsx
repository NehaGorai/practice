import React from 'react'

function Dashboard({data}) {
console.log(data)
    return (
        <>
            <div className='font-bold text-2xl'>Dashboard</div>
            <h1>Name: {data.name}</h1>
            <h2>Email: {data.email}</h2>
            <h3>Role: {data.role}</h3>
        </>
    )
}

export default Dashboard