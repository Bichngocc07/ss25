import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './login'
import Register from './register'

export default function EXERCISE03() {
    const router = createBrowserRouter([
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "register",
            element: <Register></Register>
        }
    ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}