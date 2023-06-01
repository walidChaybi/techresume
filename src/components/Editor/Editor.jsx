import React, { useState } from "react"
import styles from "./Editor.module.css"

function Editor({ sections }) {
  const [activeSection, setActiveSection] = useState("basicInfo")
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections).map((section) => (
          <div
            key={section}
            className={`${styles.section} ${
              activeSection === section ? styles.active : ""
            }`}
            onClick={() => setActiveSection(section)}
          >
            {sections[section]}
          </div>
        ))}
      </div>
      <div className={styles.body}></div>
    </div>
  )
}

export default Editor
