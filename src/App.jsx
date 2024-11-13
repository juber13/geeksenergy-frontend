import { Suspense } from "react";
import "./App.css";
import { lazy } from "react";


import { ToastContainer  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home  from "./pages/Home";
import Layout from "./components/Layout";
import ProtectedRoutes from "./components/Protectedroutes";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoutes >
              <Home />
            </ProtectedRoutes>
          ),
        },
        {
          path: "/login",
          element: <Suspense fallback={<div>Loading...</div>}>
                     <Login />,
                   </Suspense>
        },
        {
          path: "/register",
          element: <Suspense fallback={<div>Loading...</div>}>
                    <Register />,
                  </Suspense>
        },
      ],
    },
  ]);
  return (
      <>
       <RouterProvider router={router} />
       <ToastContainer />
      </>
  
  );
}

export default App;
