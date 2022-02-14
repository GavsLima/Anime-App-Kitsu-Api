import { Reducer } from "redux";
import { IGlobalAnime } from "../Types";

const INITIAL_STATE: IGlobalAnime = {
    anime_id: '0',
    anime_title: ''
}

const GlobalAnime: Reducer<IGlobalAnime | any> = (
    state = INITIAL_STATE,
    action,
) => {
    switch(action.type){
        case 'SET':{
            const {anime_id, anime_title} = action.payload;
            return{
                ...state,
                anime_id,
                anime_title
            };
        }
        default: {
            return state;
        }
    }
};

export default GlobalAnime;