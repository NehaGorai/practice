import Dashboard from './components/Dashboard'
import {createContext} from 'react'
//create provide consume
var Mydata=createContext()
var Mydata2=createContext()
var Mydata3=createContext()
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
const user3="HTML Developer"
  return (
    <>
       <Mydata.Provider value={user}>
       <Mydata2.Provider value={user2}>
       <Mydata3.Provider value={user3}>
       <Dashboard/>
       </Mydata3.Provider>
       </Mydata2.Provider>
       </Mydata.Provider>
    </>
  )
}

export default App
export {Mydata,Mydata2,Mydata3}

