import clsx from "clsx"
import { RouteType } from "./types"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import MenubarItem from "./MenubarItem"

interface Props {
  childRoutes: Array<RouteType>
  parentRoute: string
  parentLabel: string
}

const MenuBarItemWithChildren = ({
  childRoutes,
  parentRoute,
  parentLabel
}: Props) => {
  const location = useLocation()

  const isCurrentRoute = location.pathname.includes(parentRoute)
  const [showChildren, setShowChildren] = useState<boolean>(isCurrentRoute)

  return (
    <div
      className={clsx(
        "rounded border border-[rgba(255,255,255,.10)]",
        showChildren ? "mt-1" : "my-1"
      )}
    >
      <button
        className={clsx(
          "min-w-[180px] select-none rounded pt-[2px] text-center transition duration-200 hover:cursor-pointer hover:bg-[rgba(255,255,255,.20)]",
          isCurrentRoute
            ? "bg-[rgba(255,255,255,.10)] text-white"
            : "bg-transparent text-neutral-300"
        )}
        onClick={() => setShowChildren(!showChildren)}
      >
        {/* TODO: maybe have an icon to show it is collapsible */}
        {parentLabel}
      </button>
      {showChildren && (
        <>
          {childRoutes.map(({ label, route }) => (
            <MenubarItem label={label} route={`${parentRoute}/${route}`} />
          ))}
        </>
      )}
    </div>
  )
}

export default MenuBarItemWithChildren
