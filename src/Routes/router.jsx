import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Root from "../Layout/Root";
import Home from "../Pages/HomePage/Home";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddProductPage from "../Pages/AddProductPage/AddProductPage";
import FerrariPage from "../Pages/FerrariPage/FerrariPage";
import MercedesPage from "../Pages/MercedesPage/MercedesPage";
import AudiPage from "../Pages/AudiPage/AudiPage";
import PorschePage from "../Pages/PorschePage/PorschePage";
import RollsRoycePage from "../Pages/RollsRoycePage/RollsRoycePage";
import BmwPage from "../Pages/BmwPage/BmwPage";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import UpdatePage from "../Pages/UpdatePage/UpdatePage";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: 'register',
                element: <RegisterPage></RegisterPage>
            },
            {
                path: 'login',
                element: <LoginPage></LoginPage>
            },
            {
                path: 'add-product',
                element: (
                    <PrivateRoute>
                        <AddProductPage></AddProductPage>
                    </PrivateRoute>
                ),
            },
            {
                path: 'brand-ferrari',
                element: (
                    <PrivateRoute>
                        <FerrariPage></FerrariPage>
                    </PrivateRoute>
                ),
                loader: () => fetch('http://localhost:5000/products'),
            },
            {
                path: 'brand-audi',
                element: (
                    <PrivateRoute>
                        <AudiPage></AudiPage>
                    </PrivateRoute>
                ),
                loader: () => fetch('http://localhost:5000/products'),
            },
            {
                path: 'brand-mercedes',
                element: (
                    <PrivateRoute>
                        <MercedesPage></MercedesPage>
                    </PrivateRoute>
                ),
                loader: () => fetch('http://localhost:5000/products'),
            },
            {
                path: 'brand-porsche',
                element: (
                    <PrivateRoute>
                        <PorschePage></PorschePage>
                    </PrivateRoute>
                ),
                loader: () => fetch('http://localhost:5000/products'),
            },
            {
                path: 'brand-rolls-royce',
                element: (
                    <PrivateRoute>
                        <RollsRoycePage></RollsRoycePage>
                    </PrivateRoute>
                ),
                loader: () => fetch('http://localhost:5000/products'),
            },
            {
                path: 'brand-bmw',
                element: (
                    <PrivateRoute>
                        <BmwPage></BmwPage>
                    </PrivateRoute>
                ),
                loader: () => fetch('http://localhost:5000/products'),
            },
            {
                path: 'details/:id',
                element: (
                    <PrivateRoute>
                        <DetailsPage></DetailsPage>
                    </PrivateRoute>
                ),
                loader: () => fetch('http://localhost:5000/products'),
            },
            {
                path: 'update-product/:id',
                element: (
                    <PrivateRoute>
                        <UpdatePage></UpdatePage>
                    </PrivateRoute>
                ),
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
            },

        ]
    }
])

export default router