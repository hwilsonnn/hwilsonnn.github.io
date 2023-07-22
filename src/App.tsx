import { RouterProvider, createHashRouter } from "react-router-dom"
import Root from "./routes"
import ErrorPage from "./routes/ErrorPage"
import background from "./assets/bgImage.svg"
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

const App = () => (
  <div
    className="flex h-screen w-full flex-row justify-center overflow-x-hidden"
    style={{ backgroundImage: `url(${background})` }}
  >
    <RouterProvider router={router} />
  </div>
)

export default App
