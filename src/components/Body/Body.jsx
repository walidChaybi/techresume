import React from "react"
import styles from "./Body.module.css"
import { DownloadCloud } from "react-feather"
import Editor from "../Editor/Editor"
function Body() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"]
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievements: "Achievements",
    summary: "Summary",
    other: "Other",
  }

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Tech Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((color) => (
            <span
              key={color}
              style={{
                backgroundColor: color,
              }}
              className={styles.color}
            />
          ))}
        </div>
        <button>
          Download <DownloadCloud />
        </button>
      </div>
      <div className={styles.main}>
        <Editor sections={sections} />
      </div>
    </div>
  )
}

export default Body
