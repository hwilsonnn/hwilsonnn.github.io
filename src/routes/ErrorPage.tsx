import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import MenuBar from "../components/MenuBar"
import Space from "../components/Space"

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="my-6">
      <div className="flex flex-col items-center">
        <MenuBar />
        <div className="flex max-w-3/5 flex-col rounded-xl border border-gray-500 bg-[rgba(255,255,255,.10)] px-4 text-gray-200 shadow-2xl backdrop-blur-[2px]">
          {isRouteErrorResponse(error) ? (
            <div className="flex w-full flex-col content-center items-center">
              <h1>Oops!</h1>
              <p>Sorry, an unexpected error has occurred.</p>
              <p>
                <i>{error.status || JSON.stringify(error.data)}</i>
              </p>
            </div>
          ) : (
            <div>Oops!</div>
          )}
        </div>
        <Space />
      </div>
    </div>
  )
}

export default ErrorPage
