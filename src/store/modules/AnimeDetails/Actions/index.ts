import { IGlobalAnimeId } from "../Types";

export function setNewAnimeId(animeId: IGlobalAnimeId) {
    return{
        type: 'SET',
        payload: animeId,
    }
}
