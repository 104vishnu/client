import React from 'react';
import Layout from './components/layout/Layout.jsx';
import Register from './pages/register/Register.jsx';
import Login from "./pages/login/Login.jsx";

import Home from './pages/home/Home.jsx'


import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import FlightDetailsCard from './pages/flightdetailscard/FlightDetailsCard.jsx';
import AdminLogin from './pages/admin/AdminLogin.jsx';
import AdminRegister from './pages/admin/AdminRegister.jsx';


function App() {

  // const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/flightdetails' element={<FlightDetailsCard/>} />
      <Route path='/admin/login' element={<AdminLogin/>} />
      <Route path='/admin/register' element={<AdminRegister/>} />

      
    </Route>
  )
)
  return <RouterProvider router={router} />;
  
}

export default App