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
const user3="This a String data comming from contextAPI"
const user2=["item1","item2","item3"]

  return (
    <>
       <Mydata.Provider value={user}>
       <Mydata3.Provider value={user3}>
       <Mydata2.Provider value={user2}>
       <Dashboard/>
       </Mydata2.Provider>
       </Mydata3.Provider>
       </Mydata.Provider>
    </>
  )
}

export default App
export {Mydata,Mydata2,Mydata3}

