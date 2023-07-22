// import { useLoaderData } from "react-router-dom"
import ExperienceItem from "../../components/ExperienceItem"
import Markdown from "../../components/Markdown"
import Space from "../../components/Space"
import Tabs from "../../components/Tabs"
import { resumeLoader } from "./resumeLoader"
import SectionHeading from "../../components/SectionHeading"
import useLoaderData from "../../utils/useLoaderData"
import ContentContainer from "../../components/ContentContainer"

const Resume = () => {
  const data = useLoaderData(resumeLoader)

  const contactDetails = [
    "+61 421 668 190",
    <a href="mailto:harry@wilson-family.com">harry@wilson-family.com</a>,
    <a href="https://www.linkedin.com/in/harry--wilson/">LinkedIn</a>
  ]

  const otherDetails = ["Australian Citizen", "Sydney, Australia"]

  return (
    <div className="flex max-w-full flex-col">
      <h1 className="text-center text-3xl font-bold tracking-wider">
        Harry Wilson
      </h1>
      <Space size="sm" />
      <div className="text-md flex items-center justify-center text-center">
        {contactDetails.map((contact, index) => (
          <div
            key={index}
            className="border-r border-white pl-2 pr-[9px] last:border-0 last:pr-2"
          >
            {contact}
          </div>
        ))}
      </div>
      <div className="text-md flex items-center justify-center text-center">
        {otherDetails.map((contact, index) => (
          <div
            key={index}
            className="border-r border-white pl-2 pr-[9px] last:border-0 last:pr-2"
          >
            {contact}
          </div>
        ))}
      </div>
      <Space />
      <Tabs
        tabs={[
          {
            tabTitle: "Concise",
            content: (
              <div className="flex max-w-full flex-col">
                <Space />
                <SectionHeading>Bio</SectionHeading>
                <ContentContainer>
                  <Markdown content={data.bio} />
                </ContentContainer>
                <Space />
                <SectionHeading>Skills</SectionHeading>
                <ContentContainer>
                  <Markdown content={data.skills} />
                </ContentContainer>
                <Space />
                <SectionHeading>Technologies</SectionHeading>
                <ContentContainer>
                  <Markdown content={data.technologies} />
                </ContentContainer>
                <Space />
                <SectionHeading>Career History</SectionHeading>
                <div className="flex flex-col">
                  <ExperienceItem
                    roleTitle="Mid-Level Frontend Developer"
                    timePeriod="January 2020 - Present"
                    company="Trade Ledger"
                    location="(Sydney, Australia)"
                    startDate="May 2022"
                    roleSubtitle="(prev. Software Developer, and Intern)"
                    isLast
                  >
                    <Markdown content={data.midLevelRole} />
                  </ExperienceItem>
                </div>
              </div>
            )
          }
        ]}
      />
      <SectionHeading>Education</SectionHeading>
      <div className="flex flex-col">
        <ExperienceItem
          roleTitle="University of NSW"
          timePeriod="February 2019 - December 2021"
          company=""
          roleSubtitle="(Sydney, Australia)"
          location=""
          startDate="February 2019"
          isLast
        >
          Bachelor of Computer Science (w/ Distinction)
        </ExperienceItem>
      </div>
    </div>
  )
}

export default Resume
