import React ,{createContext} from 'react'
import Dashboard from './components/Dashboard'
var Mydata=createContext()
var Mydata2=createContext()

function App() {
  const user = {
    name: "Neha Gorai",
    email: "xyz@gmail.com",
    role: "Frontend Developer"
  }
  const user2 = {
    name: "Supriya Kumari",
    email: "supriya@gmail.com",
    role: "Backend Developer"
  }
  return (
    <>
     <Mydata.Provider value={user}>
    <Mydata2.Provider value={user2}>
    <div className='bg-amber-400 p-8'>
        <Dashboard />
      </div>
     </Mydata2.Provider>
     </Mydata.Provider>
    </>
  )
}

export default App
export {Mydata,Mydata2}