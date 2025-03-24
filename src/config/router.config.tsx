import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/auth/login/login.page";
import RegisterPage from "../pages/auth/register/register.page";
import AdminLayout from "../pages/layout/admin.layout";
import AdminDashboard from "../pages/admin/dashboard/dashboard.page";
import NotFound from "../pages/error/not-found.component";
import ForgetPassword from "../pages/auth/forget-password/forget-password.page";

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
            path: "/admin",
            element: <AdminLayout />,
            // children: [
            //     {
            //         path: "dashboard",
            //         element: <AdminDashboard />,
            //     },
            //     {
            //         path: "banner",
            //         element: <NotFound />,
            //     },
            // ],
        },
        {
            path: "/forget-password",
            element: <ForgetPassword />,
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ]);

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
};

export default RouterConfig;
