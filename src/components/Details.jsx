import React,{useContext} from 'react'
import { Mydata, Mydata4 } from '../App'

function Details() {
var hello = useContext(Mydata)
var hello2 = useContext(Mydata4)
    return (
        <>
    <div>yess its {hello.name}</div>
    <button onClick={hello2}>Click me</button>
        </>

    )
}

export default Details