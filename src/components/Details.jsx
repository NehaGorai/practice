import React from 'react'


function Details({values3}) {
    console.log(values3,"values3")

    return (
        <>
        <div>Details</div>
        <div>Name:{values3.name}</div>
        <div>Email:{values3.email}</div>
        <div>Role:{values3.role}</div>
        </>

    )
}

export default Details