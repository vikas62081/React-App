import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../components/About";
import Dashboard from "../components/Dashboard";
import Product from "../components/Product";
import Report from "../components/Reports";
import AppLayout from "../loyout";

const appRoutes = [
  { key: 1, path: "/", element: <Dashboard /> },
  { key: 2, path: "/about", element: <About /> },
  { key: 3, path: "/product", element: <Product /> },
  { key: 4, path: "/report", element: <Report /> },
  { key: 5, path: "*", element: <Dashboard /> },
];

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          {appRoutes.map((route) => (
            <Route {...route} />
          ))}
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
