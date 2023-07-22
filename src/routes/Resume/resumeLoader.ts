import { bio } from "../../assets/staticText/resume/bio"
import { midLevelRole } from "../../assets/staticText/resume/midLevelRole"
import { skills } from "../../assets/staticText/resume/skills"
import { technologies } from "../../assets/staticText/resume/technologies"

export const resumeLoader = () => ({
  skills: skills,
  technologies: technologies,
  bio: bio,
  midLevelRole: midLevelRole
})
