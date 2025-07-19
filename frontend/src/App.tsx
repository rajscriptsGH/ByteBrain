import Dashboard from "./pages/Dashboard"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"

const App = () => {
  return (
    <div>
      <Signup />
      <Signin />
      <Dashboard />
    </div>
  )
}

export default App
