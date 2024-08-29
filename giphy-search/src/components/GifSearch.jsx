import { useEffect } from "react";
import { useState } from "react";
import { handleFetch } from "../utils";
import API_KEY from "../../config";

function GifSearch({ handleSubmit, setSearch, search, setGifs }) {
  //TODO useState to set up tracking input for function
  //use effect for the fetch call
  // console.log(inputValue);
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const setDefaultGifs = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&offset=0&rating=g&bundle=messaging_non_clips`;
  let setSearchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${inputValue}&limit=3&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  useEffect(() => {
    const doFetch = async () => {
      //TODO api key HIDE IT
      const querySearch = await handleFetch(
        inputValue ? setSearchUrl : setDefaultGifs
      );
      let searchData = querySearch[0].data;
      setSearch(searchData);
      setGifs(searchData);
    };
    doFetch();
  }, [inputValue]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(handleSubmit);
      }}
    >
      <label htmlFor="searchInput">Enter a Search Term </label>
      <input
        type="text"
        className="form-control"
        id="searchInput"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="btn btn-success">
        Search
      </button>
    </form>
  );
}

export default GifSearch;
