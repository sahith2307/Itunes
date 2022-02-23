import { combineReducers, createStore } from "redux";
import storeReducer, { selectedReducer } from "./reducer";
export const store = {
  data: [],
  genres: [
    { value: "movie", label: "movie" },
    { value: "podcast", label: "podcast" },
    { value: "music", label: "music" },
    { value: "musicVideo", label: "musicVideo" },
    { value: "audiobook", label: "audiobook" },
    { value: "shortFilm", label: "shortFilm" },
    { value: "tvShow", label: "tvShow" },
    { value: "software", label: "software" },
    { value: "ebook", label: "ebook" },
    { value: "all", label: "all" },
  ],
  region: [],
  error: "",
};
export const selectedValues = { country: "", genre: "" };
const CreatedStore = createStore(
  combineReducers({
    firstReducer: storeReducer,
    secondReducer: selectedReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default CreatedStore;
