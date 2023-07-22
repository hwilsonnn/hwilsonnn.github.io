import { ComponentProps } from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

interface Props extends Omit<ComponentProps<typeof ReactMarkdown>, "children"> {
  sourceFileName?: string
  content: string
}

const Markdown = ({ components, content, ...rest }: Props) => (
  <ReactMarkdown
    {...rest}
    children={content}
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

export default Markdown
