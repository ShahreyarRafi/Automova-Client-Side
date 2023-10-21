import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Root from "../Layout/Root";
import Home from "../Pages/HomePage/Home";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ContactUsPage from "../Pages/ContactUsPage/ContactUsPage";
import CartPage from "../Pages/CartPage/CartPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddProductPage from "../Pages/AddProductPage/AddProductPage";
import UpdatePage from "../Pages/UpdatePage/UpdatePage";
import FerrariPage from "../Pages/FerrariPage/FerrariPage";
import MercedesPage from "../Pages/MercedesPage/MercedesPage";
import AudiPage from "../Pages/AudiPage/AudiPage";
import PorschePage from "../Pages/PorschePage/PorschePage";
import RollsRoycePage from "../Pages/RollsRoycePage/RollsRoycePage";
import BmwPage from "../Pages/BmwPage/BmwPage";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import AboutUsPage from "../Pages/AboutUsPage/AboutUsPage";






const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-10-server-biymh8jny-shahreyar-rafis-projects.vercel.app/products')
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
                path: 'contact-us',
                element: <ContactUsPage></ContactUsPage>
            },
            {
                path: 'about-us',
                element: <AboutUsPage></AboutUsPage>
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
                path: 'cart',
                element: (
                    <PrivateRoute>
                        <CartPage></CartPage>
                    </PrivateRoute>
                ),
                loader: () => fetch('https://assignment-10-server-biymh8jny-shahreyar-rafis-projects.vercel.app/cartItems'),
            },
            {
                path: 'brand-ferrari',
                element: (
                    <PrivateRoute>
                        <FerrariPage></FerrariPage>
                    </PrivateRoute>
                ),
                loader: () => fetch('https://assignment-10-server-biymh8jny-shahreyar-rafis-projects.vercel.app/products'),
            },
            {
                path: 'brand-audi',
                element: (
                    <PrivateRoute>
                        <AudiPage></AudiPage>
                    </PrivateRoute>
                ),
                loader: () => fetch('https://assignment-10-server-biymh8jny-shahreyar-rafis-projects.vercel.app/products'),
            },
            {
                path: 'brand-mercedes',
                element: (
                    <PrivateRoute>
                        <MercedesPage></MercedesPage>
                    </PrivateRoute>
                ),
                loader: () => fetch('https://assignment-10-server-biymh8jny-shahreyar-rafis-projects.vercel.app/products'),
            },
            {
                path: 'brand-porsche',
                element: (
                    <PrivateRoute>
                        <PorschePage></PorschePage>
                    </PrivateRoute>
                ),
                loader: () => fetch('https://assignment-10-server-biymh8jny-shahreyar-rafis-projects.vercel.app/products'),
            },
            {
                path: 'brand-rolls-royce',
                element: (
                    <PrivateRoute>
                        <RollsRoycePage></RollsRoycePage>
                    </PrivateRoute>
                ),
                loader: () => fetch('https://assignment-10-server-biymh8jny-shahreyar-rafis-projects.vercel.app/products'),
            },
            {
                path: 'brand-bmw',
                element: (
                    <PrivateRoute>
                        <BmwPage></BmwPage>
                    </PrivateRoute>
                ),
                loader: () => fetch('https://assignment-10-server-biymh8jny-shahreyar-rafis-projects.vercel.app/products'),
            },
            {
                path: 'details/:id',
                element: (
                    <PrivateRoute>
                        <DetailsPage></DetailsPage>
                    </PrivateRoute>
                ),
                loader: () => fetch('https://assignment-10-server-biymh8jny-shahreyar-rafis-projects.vercel.app/products'),
            },
            {
                path: 'update-product/:id',
                element: (
                    <PrivateRoute>
                        <UpdatePage></UpdatePage>
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`https://assignment-10-server-biymh8jny-shahreyar-rafis-projects.vercel.app/products/${params.id}`),
            },

        ]
    }
])

export default router