import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { useLikedMovies } from "../../context/LikeContext.jsx";
import { NavLink } from "react-router-dom";

const MovieGridItem = ({ title, poster_path, vote_average, original_language, id, backdrop_path }) => {
  const { addLike, removeLike, likedMovies } = useLikedMovies();
  const [liked, setLiked] = useState(likedMovies.some((movie) => movie.id === id));

  const toggleLike = () => {
    if (liked) {
      removeLike(id);
    } else {
      addLike({ id, title, poster_path, vote_average, original_language, backdrop_path });
    }
    setLiked(!liked);
  };

  const imageUrl = poster_path
    ? `${import.meta.env.VITE_IMAGE_URL}${poster_path}`
    : "/path/to/placeholder-image.jpg"; // Add your fallback image URL here

  return (
    <div className="rounded-xl overflow-hidden flex flex-col relative">
      <NavLink to={`/detail/${id}`} className="group">
        <img
          src={imageUrl}
          alt={title || "No image available"}
          className="w-full h-auto rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </NavLink>
      <h3 className="bg-black text-white text-center py-4 rounded-b-xl truncate">
        {title} - {original_language?.toUpperCase()}
      </h3>
      <div className="flex justify-between items-center px-4 py-2">
        <p className="text-white text-lg">{vote_average}</p>
        <span
          className="text-lg font-bold text-red-500 hover:text-red-600 transition-all duration-200 transform scale-100 hover:scale-110 cursor-pointer"
          onClick={toggleLike}
        >
          <AiOutlineLike
            className={`absolute top-2 right-2 ${liked ? "text-yellow-500" : "text-white"}`}
          />
        </span>
      </div>
    </div>
  );
};

export default MovieGridItem;
