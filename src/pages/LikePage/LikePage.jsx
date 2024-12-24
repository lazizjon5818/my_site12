// LikePage.jsx
import React from "react";
import { useLikedMovies } from "@/context/LikeContext";
import MovieGridItem from "@/components/movies/MovieGridItem";

const LikePage = () => {
  const { likedMovies } = useLikedMovies();

  return (
    <div className="p-4 container h-[61vh] flex flex-col justify-center items-center " >
      <h1 className="text-3xl font-bold mb-6">Sevimlilar</h1>
      {likedMovies.length === 0 ? (
        <p>Yoqtirilgan kinolar yuq</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {likedMovies.map((movie) => (
            <MovieGridItem key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LikePage;
