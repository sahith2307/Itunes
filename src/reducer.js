import { selectedValues, store } from "./store";
const storeReducer = (state = store, action) => {
  switch (action.type) {
    case "Data":
      return { ...state, data: action.data, error: "" };
    case "Region":
      return { ...state, region: action.region };

    case "Error":
      return { ...state, data: [], error: action.error };
    default:
      return state;
  }
};
export const selectedReducer = (state = selectedValues, action) => {
  switch (action.type) {
    case "Country":
      return { ...state, country: action.country };
    case "Genre":
      return { ...state, genre: action.genre };
    default:
      return state;
      
  }
};
export default storeReducer;
