import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import TrackItem from "../TrackItem";
import "./index.scss";
export default function Home() {
  const [searched, setSearched] = useState("");
  const [data, error, region, genres, selectedGenre, selectedCountry] =
    useSelector((state) => [
      state.firstReducer.data,
      state.firstReducer.error,
      state.firstReducer.region,
      state.firstReducer.genres,
      state.secondReducer.genre,
      state.secondReducer.country,
    ]);
  const dispatcher = useDispatch();
  const setCountry = (selectedCountry) => {
    console.log(selectedCountry.value);
    dispatcher({ type: "Country", country: selectedCountry.value });
    //used dispatched
  };
  const setGenre = (selectedGenre) => {
    dispatcher({ type: "Genre", genre: selectedGenre.value });
  };
  useEffect(() => {
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
        dispatcher({
          type: "Region",
          region: response.data.map((each) => {
            return {
              value: each.alpha2,
              label: each.en,
            };
          }),
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const getSearchedData = () => {
    const url = `https://itunes.apple.com/search?term=${searched}&entity=${selectedGenre}&country=${selectedCountry}`;
    axios(url)
      .then((res) => {
        console.log(res.data);
        dispatcher({ type: "Data", data: res.data.results });
      })
      .catch((error) => {
        dispatcher({ type: "Error", error: error.message });
      });
  };
  return (
    <div className="alert alert-dark">
      <div>
        <h1 className="col-12">Itunes</h1>
      </div>
      <div className="col-12 d-flex flex-row justify-content-center">
        <input
          className="col-5"
          type="search"
          onChange={(e) => {
            setSearched(e.target.value);
          }}
        />
        <Select
          defaultValue={selectedCountry}
          onChange={setCountry}
          options={region}
        />
        <Select
          defaultValue={selectedGenre}
          onChange={setGenre}
          options={genres}
        />

        <button
          className="col-1 btn btn-dark p-2 margin-search bg-gradient"
          onClick={getSearchedData}
        >
          Search
        </button>
      </div>

      <div className=" d-flex flex-row justify-content-start flex-wrap">
        {data?.map((each) => (
          <TrackItem key={each.trackId} data={each} />
        ))}
      </div>
    </div>
  );
}
