import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./Routes/routers.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PhotoProvider } from "react-photo-view";
import AuthProvider from "./Provider/AuthProvider.jsx";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <PhotoProvider>
          <RouterProvider router={routers}></RouterProvider>
        </PhotoProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
