import { Reducer } from "redux";
import { IGlobalAnimeId } from "../Types";

const INITIAL_STATE: IGlobalAnimeId = {
    anime_id: '0',
}

const GlobalAnimeId: Reducer<IGlobalAnimeId | any> = (
    state = INITIAL_STATE,
    action,
) => {
    switch(action.type){
        case 'SET':{
            const {anime_id} = action.payload;
            return{
                ...state,
                anime_id,
            };
        }
        default: {
            return state;
        }
    }
};

export default GlobalAnimeId;