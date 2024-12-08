import React from "react"

const AboutMe: React.FC = () => {
  return (
    <section>
      <h3 className="text-2xl font-bold text-indigo-600">About Me</h3>
      <p className="bg-gray-50 p-6 rounded-lg mt-4 shadow-lg text-gray-700">
        I am a passionate Frontend Developer with over a year of experience in
        creating dynamic and user-friendly web applications. I specialize in
        building clean, responsive, and modern interfaces with a focus on user
        experience and performance.
      </p>
      <div className="bg-gray-50 p-6 rounded-lg mt-6 shadow-lg text-gray-700">
        <h4 className="text-xl font-semibold text-indigo-600">
          Skills & Strengths
        </h4>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Proficient in HTML, CSS, JavaScript (ES6+), and TypeScript</li>
          <li>
            Experience with modern frontend frameworks like React and Next
          </li>
          <li>
            Deep understanding of responsive design and cross-browser
            compatibility
          </li>
          <li>Focus on clean code, optimization, and performance</li>
          <li>Strong communication skills, both with teams and clients</li>
          <li>
            Always keeping up to date with the latest frontend technologies and
            best practices
          </li>
        </ul>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg mt-6 shadow-lg text-gray-700">
        <h4 className="text-xl font-semibold text-indigo-600">
          Let's Collaborate
        </h4>
        <p className="text-gray-600 mt-2">
          I am always open to new challenges and excited to contribute to
          innovative projects. Let's work together to create seamless, engaging,
          and beautiful digital experiences.
        </p>
      </div>
    </section>
  )
}

export default AboutMe
