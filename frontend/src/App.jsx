import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <div>
        <Header />
        <div  className="mt-32">
        <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
