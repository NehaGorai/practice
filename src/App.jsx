import Dashboard from './components/Dashboard'
import {createContext} from 'react'
//create provide consume
var Mydata=createContext()
var Mydata2=createContext()
function App() {
const user={
  name:"Neha",
  email:"neha@gmail.com",
  role:"Frontend Developer"
}
const user2={
  name:"Usha",
  email:"usha@gmail.com",
  role:"Backend Developer"
}
  return (
    <>
       <Mydata.Provider value={user}>
       <Mydata2.Provider value={user2}>
       <Dashboard />
       </Mydata2.Provider>
       </Mydata.Provider>
    </>
  )
}

export default App
export {Mydata,Mydata2}

