import { PropsWithChildren } from "react"

const SectionHeading = ({ children }: PropsWithChildren) => {
  return (
    <>
      <h2 className="pl-4 text-lg font-semibold">{children}</h2>
      <hr className="-mt-1 mb-2 ml-4" />
    </>
  )
}

export default SectionHeading
