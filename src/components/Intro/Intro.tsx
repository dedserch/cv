import React from "react"

const Intro: React.FC = () => {
  return (
    <section className="flex flex-col gap-6 mt-6">
      <div className="flex items-center gap-6">
        <img
          src="../avatar.jpg"
          alt="Avatar"
          className="w-40 h-40 rounded-full object-cover"
        />
        <p className="text-lg text-gray-700">
          I am a student of the Belarusian State University, Faculty of
          Mechanics and Mathematics. I am looking for a creative approach to
          solving a problem. I try to make user-friendly interfaces and am
          actively developing in this area.
        </p>
      </div>
      <hr className="border-t border-gray-300" />
    </section>
  )
}

export default Intro
