import React from "react"

const SocialMedia: React.FC = () => {
  return (
    <div className="flex justify-center gap-8 text-lg text-gray-700">
      <a
        href="https://github.com/dedserch"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600"
      >
        GitHub
      </a>
      <a
        href="https://t.me/Dimaserch"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600"
      >
        Telegram
      </a>
      <a href="mailto:dedmemchik@gmail.com" className="hover:text-blue-600">
        Gmail
      </a>
    </div>
  )
}

export default SocialMedia
