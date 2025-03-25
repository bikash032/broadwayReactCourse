import "@ant-design/v5-patch-for-react-19";
import "./assets/css/main.css";
import { createRoot } from "react-dom/client";

import { StrictMode } from "react";
import RouterConfig from "./config/router.config";
// import LoginPage from "./pages/login/login.page";
// import Dashboard from "./pages/dashboard/dashboard.page";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <>
            {/* <LoginPage />
            <Dashboard /> */}
            <RouterConfig />
        </>
    </StrictMode>
);
