import Navbar from "./components/Layout/Navbar"
import { Outlet } from "react-router-dom"
import Footer from "./components/Layout/Footer"

function App() {

  return (
    <div className="flex flex-col min-h-[100vh]">
      <Navbar />
        <div className="grow-[1] container">
          <Outlet />
        </div>
      <Footer />
    </div>
  )
}
export default App
