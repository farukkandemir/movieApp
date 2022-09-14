import React, {useState} from "react";
import {useEffect} from "react";
import Feed from "./Feed";
import Loading from "./Loading";
import NavBar from "./NavBar";
import NavLinks from "./NavLinks";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("top_rated");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMovies() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${selectedCategory}?api_key=1e89e6a0912547480f048b9308ae369b&language=en-US`
    );
    const data = await res.json();

    setMovies(data.results);
  }

  useEffect(() => {
    setIsLoading(true);
    fetchMovies();
    setIsLoading(false);
  }, [selectedCategory]);

  return (
    <main className="p-4">
      <NavBar />
      <NavLinks setSelectedCategory={setSelectedCategory} />
      {isLoading ? <Loading /> : <Feed movies={movies} />}
    </main>
  );
}

export default Home;
