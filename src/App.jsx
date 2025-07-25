import Dashboard from './components/Dashboard'
import { UserContext } from './Context/UserContext'
import { ThemeContex } from './Context/ThemeContex'
import One from './components/one'
import {MainContext} from './Context/Main'

function App() {
  var user = {
    name: "Rahul",
    age: 22
  }

  const theme = "Dark"
  const main="hey how are you"
  return (
    <>
    
    <MainContext value={main}>
    <One/>
    </MainContext>
  
    

      <UserContext value={user}>
        <ThemeContex value={theme}>
          <Dashboard />
        </ThemeContex>
      </UserContext>
    </>
  )
}
export default App


