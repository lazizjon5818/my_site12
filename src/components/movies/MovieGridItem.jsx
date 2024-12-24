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

  return (
    <div className="rounded-xl overflow-hidden flex flex-col relative">
      <NavLink to={`/detail/${id}`}>
        <img
          src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`}
          alt={title || "Rasm mavjud emas"}
          className="w-full h-auto object-cover"
        />
      </NavLink>
      <h3 className="bg-black text-white text-center py-4 truncate">
        {title} - {original_language?.toUpperCase()}
      </h3>
      <div className="flex justify-center items-center flex-row bg-red-600">
          <span
            className="text-lg font-bold text-red-500 hover:text-red-600 transition-all duration-200 transform scale-100 hover:scale-110 cursor-pointer flex p-4 gap-3"
            onClick={toggleLike}>
            <AiOutlineLike className={`text-yellow-500 text-2xl ${liked ? "text-yellow-500 " : "text-slate-900"}`} />
            <span className="text-black">
            {vote_average}
            </span>
          </span>
      </div>
    </div>
  );
};

export default MovieGridItem;
