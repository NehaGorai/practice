import { UserContext } from "../Context/UserContext"
import { ThemeContex } from "../Context/ThemeContex"
import { useContext } from "react"

function Details() {
    const user = useContext(UserContext)
    const theme=useContext(ThemeContex)
    return (
        <>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <h1>{theme}</h1>
        </>

    )
}

export default Details