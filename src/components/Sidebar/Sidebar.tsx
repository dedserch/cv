import React from "react"
import Education from "./Education"
import Skills from "./Skills"
import Language from "./Language"

const Sidebar: React.FC = () => {
  return (
    <aside className="border-l border-gray-300 pl-4 space-y-6">
      <Education />
      <Skills />
      <Language />
    </aside>
  )
}

export default Sidebar
