import { PropsWithChildren } from "react"

const ContentContainer = ({ children }: PropsWithChildren) => (
  <div
    className="ml-4 px-2 pb-3 pt-1"
    style={{
      borderRadius: "50px",
      border: "1px solid transparent",
      borderImage:
        "linear-gradient(0.45turn, gray, transparent, transparent, gray) 30"
    }}
  >
    {children}
  </div>
)

export default ContentContainer
