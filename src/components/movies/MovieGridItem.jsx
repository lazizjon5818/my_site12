// MovieGridItem.jsx
import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { useLikedMovies } from "../../context/LikeContext.jsx"; 

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
      <img
        src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`}
        alt={title || "No image available"}
        className="w-full h-auto rounded-xl object-cover"
      />
      <h3 className="bg-black text-white text-center py-4 rounded-b-xl truncate">
        {title} - {original_language?.toUpperCase()}
      </h3>
      <p className="text-white pt-2 text-right">
        <span
          className="text-lg font-bold text-red-500 hover:text-red-600 transition-all duration-200 transform scale-100 hover:scale-110 cursor-pointer"
          onClick={toggleLike} 
        >
          <AiOutlineLike
            className={`absolute top-2 right-2 ${liked ? "text-yellow-500" : "text-white"}`} 
          />
          {vote_average}
        </span>
      </p>
    </div>
  );
};

export default MovieGridItem;
