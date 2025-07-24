import Dashboard from './components/Dashboard'


function App() {
const user={
  name:"Neha",
  email:"neha@gmail.com",
  role:"Frontend Developer"
}
  return (
    <>
        <Dashboard values={user} />
    </>
  )
}

export default App

