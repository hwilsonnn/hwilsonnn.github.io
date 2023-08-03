import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import { RouterProvider, createHashRouter } from "react-router-dom"
import ErrorPage from "./routes/ErrorPage"
import Resume from "./routes/Resume/Resume"
import { resumeLoader } from "./routes/Resume/resumeLoader"
import App from "./App"
import Site from "./routes/About/Site"

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { loader: resumeLoader, path: "/resume", element: <Resume /> },
      {
        path: "/about",
        children: [
          {
            path: "/about/site",
            element: <Site />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
