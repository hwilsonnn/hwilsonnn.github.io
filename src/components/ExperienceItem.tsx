import { PropsWithChildren } from "react"
import Space from "./Space"
import clsx from "clsx"

interface Props extends PropsWithChildren {
  isLast?: boolean
  timePeriod: string
  roleTitle: string
  company: string
  startDate: string
  roleSubtitle?: string
  location: string
}

const ExperienceItem = ({
  isLast,
  timePeriod,
  roleTitle,
  children,
  company,
  startDate,
  roleSubtitle,
  location
}: Props) => (
  <div className="flex flex-row">
    <div className="flex min-w-1/12 flex-col items-center">
      <div className="min-w-6 h-6 w-6 rounded-full border-[3px] border-white bg-transparent" />
      {!isLast && (
        <div className="min-w-1 -ml-[1px] h-[calc(100%-24px)] w-[3px] bg-white" />
      )}
    </div>
    <div className="-ml-5 min-w-[110px] pt-[2px]">{startDate}</div>
    <div
      className="px-2 pb-3 pt-1"
      style={{
        borderRadius: "50px",
        border: "1px solid transparent",
        borderImage: isLast
          ? "linear-gradient(0.45turn, gray, transparent, transparent, transparent) 30"
          : "linear-gradient(0.45turn, gray, transparent, transparent, gray) 30"
      }}
    >
      <h2 className="text-md font-semibold">{timePeriod}</h2>
      <div className="flex items-center text-center">
        <h2 className="py-1 text-xl font-bold">{roleTitle}</h2>
        <Space size="sm" />
        <h3
          className={clsx(
            "text-base font-light text-gray-300",
            location && "italic"
          )}
        >
          {roleSubtitle}
        </h3>
      </div>
      <div className="flex items-center text-center">
        <h3 className="text-base font-semibold">{company}</h3>
        <Space size="sm" />
        <h3 className="text-base font-light text-gray-300">{location}</h3>
      </div>
      <Space />
      <div className="pb-6 text-justify">{children}</div>
    </div>
  </div>
)

export default ExperienceItem
