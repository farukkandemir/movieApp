import React from "react";
import {Link} from "react-router-dom";

function MovieCard({movie: {id, title, poster_path, release_date}}) {
  return (
    <article className="hover:cursor-pointer hover:-translate-y-2  ">
      <Link to={`/movie/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="poster"
          className="rounded-xl"
        />

        <div className="mt-2 ">
          <p className="text-sm font-bold">{title}</p>
          <small>{release_date}</small>
        </div>
      </Link>
    </article>
  );
}

export default MovieCard;
