import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <>
      <div>
        <Header />
        <div className="mt-32">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
