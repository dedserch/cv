import React from "react"

const Skills: React.FC = () => {
  return (
    <section>
      <h3 className="text-2xl font-bold text-indigo-600">Skills</h3>

      <div className="mt-4">
        <h4 className="text-xl font-semibold text-indigo-500">Backend</h4>
        <ul className="mt-2 list-disc ml-4">
          <li>NestJS</li>
          <li>NodeJS</li>
          <li>ExpressJS</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="text-xl font-semibold text-indigo-500">Frontend</h4>
        <ul className="mt-2 list-disc ml-4">
          <li>React</li>
          <li>TypeScript</li>
          <li>TailwindCSS</li>
          <li>NextJS</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="text-xl font-semibold text-indigo-500">Database</h4>
        <ul className="mt-2 list-disc ml-4">
          <li>SQL</li>
          <li>PostgreSQL</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="text-xl font-semibold text-indigo-500">Other Tools</h4>
        <ul className="mt-2 list-disc ml-4">
          <li>Git</li>
          <li>Docker</li>
          <li>Postman</li>
          <li>npm</li>
          <li>yarn</li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
