import { DirectorBasicDTO } from "./director-basic-DTO.type"

export type MovieDTO = {
    id: number,
    name: string,
    originalName: string,
    releaseYear: number,
    length: number,
    pitch: string,
    isSeen: boolean,
    director: DirectorBasicDTO
}