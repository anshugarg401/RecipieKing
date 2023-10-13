import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import './css/tailwind.css';
// import './index.css'
// import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home';
import RootLayout from './pages/RootLayout/RootLayout';
// import ErrorPage from './Pages/ErrorPage/ErrorPage';
// import Nested from './Nested';
// import ComingSoon from './Pages/ComingSoon/ComingSoon';


//lazyloading

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    // errorElement: <Home />,
    children: [

      {
        path: "/",
        element: <Home />,
      },
  
    ],
   },
  // // {
  // //   path: "/auth/login",
  // //   element: <WhoAreYouLogin />,
  // // },


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
