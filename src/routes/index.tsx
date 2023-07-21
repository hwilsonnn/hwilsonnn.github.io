import { useEffect } from "react"
import MenuBar from "../components/MenuBar"
import Space from "../components/Space"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

const Root = () => {
  const location = useLocation()
  const navigator = useNavigate()

  // TODO: add something to the home page
  useEffect(() => {
    if (location.pathname === "/") {
      console.log(location.pathname)
      navigator("/resume")
    }
  }, [location])

  return (
    <div className="my-6">
      <div className="flex flex-col items-center">
        <MenuBar />
        <div className="flex w-3/5 flex-col rounded-xl border border-gray-500 bg-[rgba(255,255,255,.10)] p-4 text-gray-200 shadow-2xl backdrop-blur-[2px]">
          <Outlet />
        </div>
        <Space />
      </div>
    </div>
  )
}

export default Root
