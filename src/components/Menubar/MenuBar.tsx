import { ExtendedRoute } from "./types"
import MenubarItem from "./MenubarItem"
import MenuBarItemWithChildren from "./MenuBarItemWithChildren"

const MenuBar = () => {
  const routes: Array<ExtendedRoute> = [
    // { route: "", label: "Home" },
    { route: "resume", label: "Resume" },
    {
      route: "about",
      label: "About",
      children: [
        { route: "site", label: "This Site" }
        // { route: "me", label: "Me" }
      ]
    }
  ]

  return (
    <div className="absolute -ml-[calc(60%+240px)] min-h-[200px] min-w-[200px] rounded-xl border border-gray-500 bg-[rgba(255,255,255,.10)] p-4 shadow-2xl backdrop-blur-[2px]">
      {routes.map(({ route, label, children }) =>
        children && children.length > 0 ? (
          <MenuBarItemWithChildren
            childRoutes={children}
            parentRoute={route}
            parentLabel={label}
          />
        ) : (
          <MenubarItem route={route} label={label} />
        )
      )}
    </div>
  )
}

export default MenuBar
