import { createBrowserRouter } from "react-router";
import Layout from "../../Components/Layout/Layout";
import ErrorPage from "../ErrorPage";
import Home from "../Home";
import Shop from "../Shop";
import AboutUs from "../About";
import Contact from "../Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/aboutus",
                element: <AboutUs />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/contact",
                element: <Contact />,
            }
        ]
    }
])