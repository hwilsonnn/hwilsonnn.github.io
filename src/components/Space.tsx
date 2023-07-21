const Space = ({ size }: { size?: "sm" | "md" | "lg" }) => {
  switch (size) {
    case "sm":
      return <div className="min-w-2 h-2 w-2" />
    case "md":
      return <div className="min-w-4 h-4 w-4" />
    case "lg":
      return <div className="min-w-6 h-6 w-6" />
    default:
      return <div className="min-w-6 h-6 w-6" />
  }
}

export default Space
