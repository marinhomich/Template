import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from "react-router-dom";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <p>Hello</p>
          <Outlet />
        </>
      }
    />,
  ),
);
