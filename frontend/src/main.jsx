import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Clients from './pages/Clients.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Error from './pages/Error.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element: <Home/>
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
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
