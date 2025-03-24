import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/auth/login/login.page";
import RegisterPage from "../pages/auth/register/register.page";
import AdminLayout from "../pages/layout/admin.layout";
// import AdminDashboard from "../pages/admin/dashboard/dashboard.page";
import NotFound from "../component/error/not-found.component";
import ForgetPassword from "../pages/auth/forget-password/forget-password.page";
import AdminDashboard from "../pages/admin/dashboard/dashboard.page";
import BannerList from "../pages/admin/banner/banner-list-page";

const RouterConfig = () => {
    let router = createBrowserRouter([
        {
            path: "/",
            element: <LoginPage />,
        },
        {
            path: "/register",
            element: <RegisterPage />,
        },
        {
            path: "/forget-password",
            element: <ForgetPassword />,
        },
        {
            path: "/admin",
            element: <AdminLayout />,
            children: [
                {
                    index: true,
                    element: <AdminDashboard />,
                },
                {
                    path: "banner",
                    element: <BannerList />,
                },
                {
                    path: "brand",
                    element: <>Brand Page</>,
                },
                {
                    path: "category",
                    element: <>Category page</>,
                },
                {
                    path: "users",
                    element: <>Users Page</>,
                },
                {
                    path: "product",
                    element: <>Product Page</>,
                },
                {
                    path: "cart-categoty",
                    element: <>Cart and category Page</>,
                },
                {
                    path: "message",
                    element: <>Message Page</>,
                },
                {
                    path: "*",
                    element: <NotFound />,
                },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
};

export default RouterConfig;
