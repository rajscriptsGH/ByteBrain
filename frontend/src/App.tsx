import Dashboard from "./pages/Dashboard"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"

const App = () => {
  return (
    <div>
      <Signin />
      <Signup />
      <Dashboard />
    </div>
  )
}

export default App
