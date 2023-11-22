import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Page404 from "@/pages/Page404";
import PublicPage from "@/routes/Protected";
import DashboardPage from "@/routes/Protected/Dasboard";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PublicPage />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/playground" lazy={() => import("@/pages/Playground")} />
        <Route path="/teste" lazy={() => import("@/pages/Playground")} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </>,
  ),
);
