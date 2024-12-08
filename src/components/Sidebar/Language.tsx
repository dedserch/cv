import React from "react"

const Language: React.FC = () => {
  return (
    <section>
      <h3 className="text-2xl font-bold text-indigo-600">Languages</h3>
      <ul className="mt-2 list-disc ml-4">
        <li>English - B1</li>
        <li>Russian - Native</li>
        <li>Belarusian - native</li>
      </ul>
    </section>
  )
}

export default Language
