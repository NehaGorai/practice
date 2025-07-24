import Dashboard from './components/Dashboard'
import {createContext} from 'react'
//create provide consume
var Mydata=createContext()
function App() {
const user={
  name:"Neha",
  email:"neha@gmail.com",
  role:"Frontend Developer"
}
  return (
    <>
       <Mydata.Provider value={user}>
       <Dashboard  />
       </Mydata.Provider>
    </>
  )
}

export default App
export {Mydata}

