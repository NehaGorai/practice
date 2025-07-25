import Dashboard from './components/Dashboard'
import { UserContext } from './Context/UserContext'
import { ThemeContex } from './Context/ThemeContex'
import One from './components/one'
function App() {
  var user = {
    name: "Rahul",
    age: 22
  }
  const theme = "Dark"
  return (
    <>
    <One val={user}/>

      <UserContext value={user}>
        <ThemeContex value={theme}>
          <Dashboard />
        </ThemeContex>
      </UserContext>
    </>
  )
}
export default App


