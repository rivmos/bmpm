import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import axios from 'axios';
import App from './App.jsx'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Clients from './pages/Clients.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Error from './pages/Error.jsx';
import ProductPage from './pages/ProductPage.jsx';
import Products from './pages/Products.jsx';
import Privacy from './pages/Legal/Privacy.jsx';
import Disclaimer from './pages/Legal/Disclaimer.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element: <Home/>,
        loader:async () => {
          // loaders can be async functions
          const res = await axios.get("http://localhost:9999/api/dropdowndata");
          const products = await res.data;
          return products;
        },
      },
      {
        path:'/aboutus',
        element: <About/>
      },
      {
        path:'/contactus',
        element: <Contact/>
      },
      {
        path:'/clients',
        element: <Clients/>
      },
      {
        path:'/testimonials',
        element: <Testimonials/>
      },
      {
        path:'/ourproducts',
        element: <Products/>,
        loader:async () => {
          // loaders can be async functions
          const res = await axios.get("http://localhost:9999/api/products");
          const products = await res.data;
          return products;
        },
        children:[

        ]
      },
      {
        path:'/ourproducts/:id',
        element: <ProductPage/>,
        loader:async ({params}) => {
          // loaders can be async functions
          const res = await axios.get(`http://localhost:9999/api/products/${params.id}`);
          const products = await res.data;
          return products;
        },
      },
      {
        path:'/privacy',
        element: <Privacy/>
      },
      {
        path:'/disclaimer',
        element: <Disclaimer/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
