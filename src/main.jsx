import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Main from './layout/Main';
import About from './pages/Home/About/About';
import Services from './pages/Home/Services/Services';
import Contact from './pages/Home/Contact/Contact';
import OurServices from './pages/Home/OurServices/OurServices';
import Login from './pages/Login/Login';
import Registration from './pages/SignUp/Registration';
import AuthProvider from './providers/AuthProvider';
import MissionVission from './pages/MissionVission/MissionVission';
import ProductsSolutions from './pages/ProductsSolutions/ProductsSolutions';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/ourServices",
        element: <OurServices></OurServices>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/missionVision",
        element: <MissionVission></MissionVission>
      },
      {
        path: "/productsSolutions",
        element: <ProductsSolutions></ProductsSolutions>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300 m-0'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
