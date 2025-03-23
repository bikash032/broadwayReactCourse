import { createBrowserRouter, RouterProvider } from "react-router";
// import LoginPage from "../pages/login/login.page";
import { lazy, Suspense } from "react";
import { Skeleton } from "antd";
const AdminDashboard =lazy(()=>{
    return import("../pages/admin/dashboard/dashboard.page");
})

const AdminLayout = lazy(() => {
  return import("../pages/layout/admin.layout");
});
const NotFound = lazy(() => {
  return import("../component/error/not-found.component");
});

const ForgetPassword = lazy(() => {
  return import("../pages/auth/forget-password/forget-password.page");
});
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
      path: "/dashboard/",
      element: 
      (
        <Suspense
            fallback={
                <>
                    <Skeleton className="max-h-full!" />
                </>
            }
        >
        <AdminLayout/>
        </Suspense>
    ),
      children: [
        {
          path: "banner",
          element: (
            <Suspense
              fallback={
                <>
                  <Skeleton className="max-h-full!" />
                </>
              }
            >
            <>hello</>
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/forget-password",
      element: (
        <Suspense
          fallback={
            <>
              <Skeleton className="max-h-full!" />
            </>
          }
        >
          <ForgetPassword />
        </Suspense>
      ),
    },
    {
      path: "/dashboard/*",
      element: (
        <Suspense
          fallback={
            <>
              <Skeleton className="max-h-full!" />
            </>
          }
        >
          <NotFound />
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
