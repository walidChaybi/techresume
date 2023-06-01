import React from "react"
import styles from "./Header.module.css"
import resumeSvg from "../../media/resume.svg"

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Tech resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Used for the FAANG, and it is always <span>FREE!</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Online resume for tech and it" />
      </div>
    </div>
  )
}

export default Header
