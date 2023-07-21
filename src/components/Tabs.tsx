import clsx from "clsx"
import { ReactNode, useState } from "react"

interface Props {
  tabs: Array<{ content: ReactNode; tabTitle: string }>
}

const Tabs = ({ tabs }: Props) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className="flex max-w-full flex-col">
      <div className="flex max-w-full justify-between" role="tablist">
        {tabs.map(({ tabTitle }, index) => {
          return (
            <button
              key={index}
              onClick={() => setSelectedTab(index)}
              role="tab"
              className={clsx(
                "my-1 h-10 min-w-[180px] flex-grow select-none rounded text-center transition duration-200 first:mr-1 last:ml-1 hover:cursor-pointer hover:bg-[rgba(255,255,255,.20)]",
                index === selectedTab
                  ? "bg-[rgba(255,255,255,.10)] text-white"
                  : "bg-transparent text-neutral-300"
              )}
            >
              {tabTitle}
            </button>
          )
        })}
      </div>
      <article>{tabs[selectedTab].content}</article>
    </div>
  )
}

export default Tabs
