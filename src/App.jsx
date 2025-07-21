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
      <Dashboard data={user} />
    </>
  )
}

export default App