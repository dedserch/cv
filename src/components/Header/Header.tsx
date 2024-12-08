import React from "react"
import SocialMedia from "../SocialMedia/SocialMedia"


const Header: React.FC = () => {
  return (
    <header>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-indigo-600">
            Dmitry Serzhputovski
          </h1>
          <h2 className="text-2xl text-gray-600 mt-2">Frontend Developer</h2>
        </div>

        <div className="flex items-center gap-3 text-lg text-gray-700">
          <SocialMedia />
        </div>
      </div>
      <hr className="mt-4 border-t border-gray-200" />
    </header>
  )
}

export default Header
