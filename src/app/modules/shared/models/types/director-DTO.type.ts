import { MovieShortDTO } from "./movie-short-DTO.type"

export type DirectorDTO = {
    id: number,
    firstname: string,
    lastname: string,
    photo: string
    birthday: Date,
    country: string,
    biography: string,
    movieShortDTOList: MovieShortDTO[]
}