import { IGlobalAnime } from "../Types";

export function setNewAnimeId(anime: IGlobalAnime) {
    return{
        type: 'SET',
        payload: anime,
    }
}
