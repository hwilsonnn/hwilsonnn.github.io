import { PropsWithChildren } from "react"

const TextContent = ({ children }: PropsWithChildren) => {
  return (
    <div className="ml-5 rounded-md bg-gradient-to-tr from-gray-300 via-white to-white">
      <div className="m-[2px] rounded-md bg-white px-3 py-3 text-justify">
        {children}
      </div>
    </div>
  )
}
export default TextContent
