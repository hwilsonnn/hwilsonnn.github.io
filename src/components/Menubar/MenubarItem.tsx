import clsx from "clsx"
import { NavLink, useLocation } from "react-router-dom"
import { RouteType } from "./types"

type Props = RouteType

const MenubarItem = ({ route, label }: Props) => {
  const location = useLocation()

  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        isActive ? "text-white" : "text-neutral-300"
      }
      key={route}
    >
      <div
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
  )
}

export default MenubarItem
