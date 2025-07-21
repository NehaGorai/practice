import React from 'react'
import Dashboard from './components/Dashboard'

function App() {
  const user = {
    name: "Neha Gorai",
    email: "xyz@gmail.com",
    role: "Frontend Developer"
  }
  return (
    <>
<div className='bg-amber-400 p-8'>
<Dashboard  data={user} />
</div>
    </>
  )
}

export default App