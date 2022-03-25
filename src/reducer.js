import { selectedValues, store } from "./store";
const storeReducer = (state = store, action) => {
  switch (action.type) {
    case "Data":
      return { ...state, data: action.data, error: "" };
    case "Region":
      return { ...state, region: action.region };
    case "Region-error":
      return { ...state, regionError: action.regionError, region: [] };

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
export const myLog = (store) => (next) => (action) => {
  console.log("life sucks");
  return next(action);
};
export const secondMiddle = (store) => (next) => (action) => {
  console.log("life sucks secoundMiddle");
  return next(action);
};
export const myAction = (store) => (next) => (action) => {
  console.log(store.getState().secondReducer);
  return next(action);
};

//*another way of middleware function*

// export const myLog = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log("life sucks");
//       return next(action);
//     };
//   };
// };
export default storeReducer;
