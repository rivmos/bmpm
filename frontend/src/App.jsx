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
import Layout from "./pages/Layout";
import { Route, Routes } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useEffect } from "react";
import AdminConsole from "./pages/Admin/AdminConsole";
import { useAuth } from "./context/authContext";
import AddProduct from "./pages/Admin/AddProduct";
import SubscribersList from "./pages/Admin/SubscribersList";
import EnquiryLists from "./pages/Admin/EnquiryList";

function App() {
  const { pathname } = useLocation();

  const {user} = useAuth()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <>
      <div>
        <Header isLoggedIn={user}/>
        <div className="mt-32">
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Public Routes */}
              <Route path="/" element={<Home />}/>
              <Route path="/aboutus" element={<About />}/>
              <Route path="/products/:id" element={<ProductPage />}/>
              <Route path="/testimonials" element={<Testimonials />}/>
              <Route path="/clients" element={<Clients />}/>
              <Route path="/contactus" element={<Contact />}/>
              <Route path="/privacy" element={<Privacy />}/>
              <Route path="/disclaimer" element={<Disclaimer />}/>
              <Route path="/products" element={<Products />}/>
              <Route path="/hunter/login" element={<Login />}/>
              <Route path="*" element={<Error />}/>

              {/* Private Routes */}
              <Route path="/admin" element={<Protected isLoggedIn={user}/>}>
                <Route path="/admin/console" element={<AdminConsole />} />
                <Route path="/admin/console/addproduct" element={<AddProduct />} />
                <Route path="/admin/console/addproduct/:id" element={<AddProduct />} />
                <Route path="/admin/console/subscribers" element={<SubscribersList />} />
                <Route path="/admin/console/enquiries" element={<EnquiryLists />} />
                {/* <Route path="/admin/enquiries" element={<EnquiryList />} />
                <Route path="/admin/subscribers" element={<SubscribersList />} /> */}
              </Route>
              
              {/* CatchAll Routes */}
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
