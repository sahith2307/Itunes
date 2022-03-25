import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import storeReducer, {
  selectedReducer,
  myLog,
  secondMiddle,
  myAction,
} from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

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
  regionError: "",
  error: "",
};

const extension = () => {
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
};
export const selectedValues = { country: "", genre: "" };
const CreatedStore = createStore(
  combineReducers({
    firstReducer: storeReducer,
    secondReducer: selectedReducer,
  }),
  composeWithDevTools(
    applyMiddleware(myLog, secondMiddle, myAction, logger, thunk)
  ),
  extension()
);
export default CreatedStore;
