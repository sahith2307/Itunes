import axios from "axios";import { Dispatch } from "react";

export const fetchedData = () => {
  return (dispatch) => {
    const options = {
      method: "GET",
      url: "https://world-countries.p.rapidapi.com/all",
      headers: {
        "x-rapidapi-host": "world-countries.p.rapidapi.com",
        "x-rapidapi-key": "cf68cbb787mshaa6b02c7de7c9a2p1f5e2cjsn155b2aff907c",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // dispatcher({
        //   type: "Region",
        //   region: response.data.map((each) => {
        //     return {
        //       value: each.alpha2,
        //       label: each.en,
        //     };
        //   }),
        // });
      })
      .catch(function (error) {
        console.error(error);
      });
  };
};
