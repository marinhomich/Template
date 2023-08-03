import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import PublicPage from "@/routes/Protected";
import DashboardPage from "@/routes/Protected/Dasboard";
import PlaygroundPage from "@/routes/Protected/Playground";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PublicPage />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
      </Route>
    </>,
  ),
);
