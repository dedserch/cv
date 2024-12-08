import { IProject } from "../types/project.type"
import { Tag } from "../types/tag.enum"

export const projects: IProject[] = [
  {
    name: "Lamoda",
    description:
      "The Lamoda app is built using React and TypeScript with functional components, focusing on clean and efficient code optimized with hooks like useCallback, useMemo, and useEffect.",
    date: "28 October, 2024 - 9 November, 2024",
    link: "https://github.com/dedserch/Web2024/tree/main/Lamoda",
    tags: [Tag.React, Tag.TailwindCSS, Tag.TypeScript, Tag.Axios],
  },
  {
    name: "Api & Spa",
    description:
      "The Api & Spa app is built using React and TypeScript, with a focus on clean and efficient code using Axios for API calls and Tailwind CSS for styling. Both createBrowserRouter and BrowserRouter approaches are supported for page definitions.",
    date: "14 October, 2024 - 27 October, 2024",
    link: "https://github.com/dedserch/Web2024/tree/main/SpaApp",
    tags: [
      Tag.React,
      Tag.TailwindCSS,
      Tag.TypeScript,
      Tag.Axios,
      Tag.ReactRouterDom,
    ],
  },
  {
    name: "TodoIst",
    description:
      "This TodoIst app is built using React and TypeScript with class components, providing a powerful and user-friendly interface for managing your tasks efficiently.",
    date: "03 October, 2024 - 13 October, 2024",
    link: "https://github.com/dedserch/Web2024/tree/main/TodoIst",
    tags: [Tag.React, Tag.TailwindCSS, Tag.TypeScript],
  },
  {
    name: "TodoList",
    description:
      "This TodoList is built using React and TypeScript, focusing on a clean and user-friendly interface. The main goal is to create a simple, yet powerful task manager that allows users to add, complete, and filter tasks.",
    date: "16 September, 2024 - 29 September, 2024",
    link: "https://github.com/dedserch/Web2024/tree/main/TodoList",
    tags: [Tag.React, Tag.TailwindCSS, Tag.TypeScript],
  },
]
