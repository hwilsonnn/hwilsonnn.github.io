export const resumeLoader = async () => {
  const getFileText = async (
    fileName: string,
    type: "comprehensive" | "concise" | "base"
  ) => {
    const file =
      type === "base"
        ? await fetch(`/src/assets/markdown/resume/${fileName}.md`)
        : await fetch(`/src/assets/markdown/resume/${type}/${fileName}.md`)

    return await file.text()
  }

  return {
    skills: await getFileText("skills", "base"),
    technologies: await getFileText("technologies", "base"),
    comprehensive: {
      bio: await getFileText("bio", "comprehensive"),
      midLevelRole: await getFileText("midLevelRole", "comprehensive"),
      softwareDeveloper: await getFileText(
        "softwareDeveloper",
        "comprehensive"
      ),
      intern: await getFileText("intern", "comprehensive")
    },
    concise: {
      bio: await getFileText("bio", "concise"),
      midLevelRole: await getFileText("midLevelRole", "concise")
    }
  }
}
