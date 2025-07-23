<<<<<<< HEAD
import React ,{createContext} from 'react'
import Dashboard from './components/Dashboard'
var Mydata=createContext()
var Mydata2=createContext()
=======
import React, { createContext } from 'react'
import Dashboard from './components/Dashboard'
import Card from './components/Card'
>>>>>>> c9fcc5cf94bb31ae41a5a8d49690319bc17b92f3

var Mydata = createContext()
var Mydata2 = createContext()
var Mydata3 = createContext()
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
<<<<<<< HEAD
export {Mydata,Mydata2}
=======
export { Mydata,Mydata2, Mydata3 }
>>>>>>> c9fcc5cf94bb31ae41a5a8d49690319bc17b92f3
