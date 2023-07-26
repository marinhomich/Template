import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import LoginPage from "./Public";

export const routes = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<LoginPage />} />));
