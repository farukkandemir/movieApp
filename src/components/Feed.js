import React from "react";
import MovieCard from "./MovieCard";

function Feed({movies}) {
  return (
    <main className="h-screen mt-4 grid grid-cols-new-grid gap-x-8 gap-y-12 ">
      {movies?.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </main>
  );
}

export default Feed;
