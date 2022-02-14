import { createStore } from "redux";
import GlobalAnime from "./modules/AnimeDetails/Reducers";

const store = createStore(GlobalAnime)

export default store;