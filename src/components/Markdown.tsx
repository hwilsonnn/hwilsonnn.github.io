import { ComponentProps, useEffect, useState } from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

interface Props extends Omit<ComponentProps<typeof ReactMarkdown>, "children"> {
  sourceFileName?: string
  content?: string
}

const Markdown = ({ sourceFileName, components, content, ...rest }: Props) => {
  const [markdown, setMarkdown] = useState("")

  useEffect(() => {
    if (!content && sourceFileName) {
      fetch(`/src/assets/markdown/${sourceFileName}.md`).then(val =>
        val.text().then(text => setMarkdown(text))
      )
    }
  }, [])

  return (
    <ReactMarkdown
      {...rest}
      children={content || markdown}
      components={{
        ul({ children }) {
          return <ul className="pl-4">{children}</ul>
        },
        li({ children }) {
          return <li className="list-disc">{children}</li>
        },
        ...components
      }}
    />
  )
}

export default Markdown
