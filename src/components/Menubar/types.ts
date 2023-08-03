export type RouteType = { route: string; label: string }

export interface ExtendedRoute extends RouteType {
  children?: Array<RouteType>
}
