import AddProducts from "../../Dashbord/AddProducts";
import AllUsers from "../../Dashbord/DasboardLayouts/AllUsers";
import DasboardLayouts from "../../Dashbord/DasboardLayouts/DasboardLayouts";
import MyBooking from "../../Dashbord/DasboardLayouts/MyBooking";
import Dashboard from "../../Dashbord/Dashboard";
import Error from "../../Error/Error";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Home/Category";
import Home from "../../Pages/Home/Home";
import Products from "../../Pages/Home/Share/Products/Products";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp";
import Main from "../Main";
import AdminRoutes from "./AdminRoutes";
import PrivetRouter from "./PrivetRouter";

const { createBrowserRouter } = require("react-router-dom");



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error />,
        children: [

            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />

            },
            {
                path: "signup",
                element: <SignUp />
            },
            {
                path: "/blog",
                element: <Blog />
            },

            {
                path: "/phone-category/:id",
                element: <Category></Category>
            },
            {
                path: '/products/:id',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`https://assignment-12-server-site-pink.vercel.app/phone/${params.id}`)
            }

        ]
    },
    {
        path: "/dashboard",
        element: <PrivetRouter> <DasboardLayouts></DasboardLayouts> </PrivetRouter>,
        children: [


            {
                path: "/dashboard",
                element: <MyBooking />
            },
            {
                path: "/dashboard/allusers",
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: "/dashboard/addProducts",
                element: <AdminRoutes> <AddProducts></AddProducts> </AdminRoutes>
            }
        ]
    }


])