import axios from "axios";

export const fetchCountries = () => {
  return async (dispatch, getState) => {
    const options = {
      method: "GET",
      url: "https://world-countries.p.rapidapi.com/all",
      headers: {
        "x-rapidapi-host": "world-countries.p.rapidapi.com",
        "x-rapidapi-key": "cf68cbb787mshaa6b02c7de7c9a2p1f5e2cjsn155b2aff907c",
      },
    };

    const res = await axios.request(options);

    const region = await res.data;
    dispatch({
      type: "Region",
      region: region.map((each) => {
        return {
          value: each.alpha2,
          label: each.en,
        };
      }),
    });
  };
};
