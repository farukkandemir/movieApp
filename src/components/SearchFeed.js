import React, {useState, useEffect} from "react";

import {useParams} from "react-router-dom";
import Feed from "./Feed";
import Loading from "./Loading";
import NavBar from "./NavBar";

function SearchFeed() {
  const {searchTerm} = useParams();
  const [movie, setMovie] = useState();

  async function fetchAPI() {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=1e89e6a0912547480f048b9308ae369b&language=en-US&query=${searchTerm}&page=1`
    );

    const data = await res.json();
    setMovie(data.results);
  }

  useEffect(() => {
    fetchAPI();
  }, [searchTerm]);

  if (movie == undefined) return <Loading />;

  return (
    <div className="p-4">
      <NavBar />
      <Feed movies={movie} />
    </div>
  );
}

export default SearchFeed;
