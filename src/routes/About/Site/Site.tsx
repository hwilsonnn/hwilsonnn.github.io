import { loader } from "."
import ContentContainer from "../../../components/ContentContainer"
import Markdown from "../../../components/Markdown"
import SectionHeading from "../../../components/SectionHeading"
import Space from "../../../components/Space"
import useLoaderData from "../../../utils/useLoaderData"

const Site = () => {
  const data = useLoaderData(loader)

  return (
    <div className="flex max-w-full flex-col">
      <h1 className="pl-4 text-3xl font-bold tracking-wide">About this site</h1>
      <Space />
      <SectionHeading>Intentions</SectionHeading>
      <ContentContainer>
        <div className="text-justify">
          <Markdown content={data.intentions} />
        </div>
      </ContentContainer>
      <Space />
      <SectionHeading>Design</SectionHeading>
      <ContentContainer>
        <div className="text-justify">
          <Markdown content={"TBC!"} />
        </div>
      </ContentContainer>
      <Space />
      <SectionHeading>Implementation</SectionHeading>
      <ContentContainer>
        <div className="text-justify">
          <Markdown content={"TBC!"} />
        </div>
      </ContentContainer>
    </div>
  )
}

export default Site
