import { createBrowserRouter, RouterProvider } from "react-router";
// import LoginPage from "../pages/login/login.page";
import { lazy, Suspense } from "react";
import { Skeleton } from "antd";
import Dashboard from "../pages/dashboard/dashboard.page";
const RegisterPage = lazy(() => {
    return import("../pages/auth/register/register.page");
});
const LoginPage = lazy(() => {
    return import("../pages/auth/login/login.page");
});
const RouterConfig = () => {
    let router = createBrowserRouter([
        {
            path: "/",
            element: (
                <Suspense
                    fallback={
                        <>
                            <Skeleton className="max-h-full!" />
                        </>
                    }
                >
                    <LoginPage />
                </Suspense>
            ),
        },
        {
            path: "/register",
            element: (
                <Suspense
                    fallback={
                        <>
                            <Skeleton className="max-h-full!" />
                        </>
                    }
                >
                    <RegisterPage />
                </Suspense>
            ),
        },
        {
            path: "/dashboard",
            element: (
                <Suspense
                    fallback={
                        <>
                            <Skeleton className="max-h-full!" />
                        </>
                    }
                >
                    <Dashboard />
                </Suspense>
            ),
        },
        
    ]);
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
};

export default RouterConfig;
