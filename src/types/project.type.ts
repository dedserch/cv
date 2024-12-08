import { Tag } from "./tag.enum"

export interface IProject {
    name: string
    description: string
    date: string
    link: string
    tags: Tag[]
}