
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../components/LandingPage";
import ProductPage from "../components/ProductPage";
import AllProducts from "../components/AllProducts";
import Checkout from "../components/Checkout";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children:[
            {
                path:'/',
                element:<LandingPage />
            },
            {
                path:"/products/:id",
                element:<ProductPage />
            },
            {
                path:"/allProducts",
                element:<AllProducts />
            },
            {
                path:"/checkout",
                element:<Checkout />
            }
        ]
    }
])

export default router;