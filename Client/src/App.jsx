import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
    </>

  )
}

export default App
