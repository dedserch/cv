import React from "react"
import Header from "./components/Header/Header"
import Intro from "./components/Intro/Intro"
import AboutMe from "./components/AboutMe/AboutMe"
import Sidebar from "./components/Sidebar/Sidebar"
import ProjectList from "./components/Project/ProjectList"
import { projects } from "./data/projects.data"
import Footer from "./components/Footer/Footer"

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-50 via-purple-50 to-pink-100 text-gray-800">
      <div className="max-w-6xl mx-auto p-8">
        <div className="bg-white shadow-2xl rounded-2xl p-10 space-y-12">
          <Header />
          <div>
            <Intro />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2 space-y-8">
              <AboutMe />
              <h2 className="text-2xl font-bold text-indigo-600">
                Projects
              </h2>
              <ProjectList projects={projects} />
            </div>
            <Sidebar />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
