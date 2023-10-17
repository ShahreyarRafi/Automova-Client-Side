import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Root from "../Layout/Root";
import Home from "../Pages/HomePage/Home";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import TestPage from "../Pages/Test/TestPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
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
                path: 'test',
                element: (
                    <PrivateRoute>
                        <TestPage></TestPage>
                    </PrivateRoute>
                ),
            },
        ]
    }
])

export default router