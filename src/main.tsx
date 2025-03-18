import "./assets/css/main.css"
import { createRoot } from "react-dom/client";

import { StrictMode } from "react";
import LoginPage from "./pages/login/login.page";
import App from "./pages/register/register.page";






createRoot(document.getElementById("root")!).render(

<StrictMode>
<>
<LoginPage/>
<App/>
  </>
</StrictMode>
);
