import Dashboard from './components/Dashboard'
import { UserContext } from './Context/UserContext'
import { ThemeContex } from './Context/ThemeContex'
function App() {
  var user = {
    names: "Rahul",
    age: 22
  }
  const theme = "Dark"
  return (
    <>

      <UserContext value={user}>
        <ThemeContex value={theme}>
          <Dashboard />
        </ThemeContex>
      </UserContext>
    </>
  )
}
export default App


