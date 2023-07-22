import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import { RouterProvider, createHashRouter } from "react-router-dom"
import Root from "./routes"
import ErrorPage from "./routes/ErrorPage"
import Resume from "./routes/Resume/Resume"
import { resumeLoader } from "./routes/Resume/resumeLoader"

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{ loader: resumeLoader, path: "/resume", element: <Resume /> }]
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
