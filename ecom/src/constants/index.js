import { About,Cart,Details,Home,Login,Product,Profile,Signup } from "../routes"

const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/details",
        element: <Details />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/details",
        element: <Details />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/product/:id",
        element: <Product />,
    },
]

export {routes}