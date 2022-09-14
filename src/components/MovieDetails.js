import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar";
import Loading from "../components/Loading";
import {useParams} from "react-router-dom";

function MovieDetails() {
  const [movie, setMovie] = useState();

  const {id} = useParams();

  async function fetchData() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US)`
    );

    const data = await res.json();
    setMovie(data);
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  console.log(movie);

  if (movie == undefined) return <Loading />;

  const {
    backdrop_path,
    release_date,
    budget,
    runtime,
    title,
    tagline,
    overview,
    vote_average,
  } = movie;

  return (
    <div>
      <NavBar />

      <div className="my-4 p-4 w-11/12 md:w-4/5 max-w-5xl mx-auto">
        <img
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt="img"
          className="rounded-xl"
        />
        <p className="text-center italic p-2">{tagline}</p>
        <p className=" font-bold text-xl">{title}</p>
        <p className="text-sm tracking-tight indent-8 mt-4 ">{overview}</p>

        <div className="flex flex-col mt-6 gap-2 font-bold text-sm">
          <span>
            Realease Date : <small>{release_date}</small>
          </span>
          <span>
            Rating : <small>{vote_average}</small>
          </span>
          <span>
            Budget : <small>{new Intl.NumberFormat().format(budget)} $</small>
          </span>
          <span>
            Runtime : <small>{runtime} minutes</small>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
