import { MovieShortDTO } from "./Movie-short-DTO.type"

export type DirectorDTO = {
    id: number,
    firstname: string,
    lastname: string,
    birthday: Date,
    country: string,
    biography: string,
    movieShortDTOList: MovieShortDTO[]
}