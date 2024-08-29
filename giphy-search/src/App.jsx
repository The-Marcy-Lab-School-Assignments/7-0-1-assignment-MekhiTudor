import NavBar from "./components/NavBar";
import GifContainer from "./components/GifContainer";
import GifSearch from "./components/GifSearch";
import { handleFetch } from "./utils";
import { useState } from "react";
import { useEffect } from "react";

// console.log(setDefaultGifs);
// let data = setDefaultGifs[0].data;

function App() {
  //create a state for the fetched data
  const [gifs, setGifs] = useState([]);
  //always create a state to store any potential errors
  const [error, setError] = useState("");
  const [search, setSearch] = useState(null);

  const handleSubmit = (e) => {
    //e.preventDefault();
    setGifs(search);
  };

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <div className="ui container">
        <GifSearch
          handleSubmit={handleSubmit}
          setSearch={setSearch}
          search={search}
          setGifs={setGifs}
        />
        {/* setGifs setError */}
        <br />
      </div>
      <GifContainer arr={gifs} />
    </div>
  );
}

export default App;
