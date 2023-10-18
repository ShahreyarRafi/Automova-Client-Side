import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Root from "../Layout/Root";
import Home from "../Pages/HomePage/Home";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddProductPage from "../Pages/AddProductPage/AddProductPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: 'register',
                element:<RegisterPage></RegisterPage>
            },
            {
                path: 'login',
                element:<LoginPage></LoginPage>
            },
            {
                path: 'add-product',
                element: (
                    <PrivateRoute>
                        <AddProductPage></AddProductPage>
                    </PrivateRoute>
                ),
            },
        ]
    }
])

export default router