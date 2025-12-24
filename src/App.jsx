import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  }
])
function App() {
  return (
   <div>
    <RouterProvider router={router} />
       </div>
  )
}

export default App
