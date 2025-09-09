import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home';
import contact from './contact';
import About from './about';

export default function EX01_2() {
  const router = createBrowserRouter([
    {
      path: "home",
      element: <Home></Home>
    },
    {
      path: "contact",
      element: <contact></contact>
    },
    {
      path: "about",
      element: <About></About>
    },
  ]);
  return (
    <div>
      <h1>Đây là trang chủ</h1>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}