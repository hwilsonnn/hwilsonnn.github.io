import clsx from "clsx"
import { NavLink, useLocation } from "react-router-dom"

const MenuBar = () => {
  const location = useLocation()

  const routes = [
    // { route: "", label: "Home" },
    { route: "resume", label: "Resume" }
  ]
  return (
    <div className="absolute -ml-[calc(60%+240px)] min-h-[200px] min-w-[200px] rounded-xl border border-gray-500 bg-[rgba(255,255,255,.10)] p-4 shadow-2xl backdrop-blur-[2px]">
      {routes.map(({ route, label }, index) => (
        <NavLink
          to={route}
          className={({ isActive }) =>
            isActive ? "text-white" : "text-neutral-300"
          }
        >
          <div
            key={index}
            className={clsx(
              "my-1 min-w-[180px] select-none rounded pt-[2px] text-center transition duration-200 hover:cursor-pointer hover:bg-[rgba(255,255,255,.20)]",
              location.pathname === `/${route}`
                ? "bg-[rgba(255,255,255,.10)]"
                : "bg-transparent"
            )}
          >
            {label}
          </div>
        </NavLink>
      ))}
    </div>
  )
}

export default MenuBar
