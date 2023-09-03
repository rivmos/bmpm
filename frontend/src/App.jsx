import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Clients from './pages/Clients.jsx';
import Contact from './pages/Contact.jsx';
import Error from './pages/Error.jsx';
import ProductPage from './pages/ProductPage.jsx';
import Products from './pages/Products.jsx';
import Privacy from './pages/Legal/Privacy.jsx';
import Disclaimer from './pages/Legal/Disclaimer.jsx';
import Login from './pages/Admin/Login.jsx'
import Protected from './pages/Protected';
import AddProduct from './pages/Admin/AddProduct';
import productServices from './services/productServices';
import Layout from "./pages/Layout";
import { Outlet, Route, Routes } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useEffect } from "react";
import EnquiryList from "./pages/Admin/EnquiryList";
import SubscribersList from "./pages/Admin/SubscribersList";

function App() {
  const { pathname } = useLocation();

  const isLoggedIn = false

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <>
      <div>
        <Header />
        <div className="mt-32">
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Public Routes */}
              <Route path="/" element={<Home />}/>
              <Route path="/aboutus" element={<About />}/>
              <Route path="/ourproducts/:id" element={<ProductPage />}/>
              <Route path="/testimonials" element={<Testimonials />}/>
              <Route path="/clients" element={<Clients />}/>
              <Route path="/contactus" element={<Contact />}/>
              <Route path="/privacy" element={<Privacy />}/>
              <Route path="/disclaimer" element={<Disclaimer />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="*" element={<Error />}/>

              {/* Private Routes */}
              <Route path="/admin" element={<Protected isLoggedIn={isLoggedIn}/>}>
                <Route path="/admin/addproduct" element={<AddProduct />} />
                <Route path="/admin/enquiries" element={<EnquiryList />} />
                <Route path="/admin/subscribers" element={<SubscribersList />} />
              </Route>
              
              {/* CatchAll Routes */}
            </Route>
          </Routes>
          {/* <Outlet /> */}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
