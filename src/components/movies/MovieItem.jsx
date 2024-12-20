import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const MovieItem = ({ title, poster_path, vote_average, original_language, id,backdrop_path}) => {
  return (
    <div className="rounded-xl">
      <NavLink to={`/detail/${id}`}
        state={{ movie: { title, poster_path, vote_average, original_language,backdrop_path} }}
       className="block">
        <img
          src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`}
          alt={title || "malumot yo'q"}
          className="w-[280px] h-[400px] rounded-xl object-cover"
        />
        <h3 className="bg-black text-white text-center pt-4 rounded-b-xl">
          {title} - {original_language?.toUpperCase()}
        </h3>
      </NavLink>

      <p className="text-white pt-2 text-end">
        <span
          className="
            text-lg font-bold
            text-red-500
            hover:text-red-600
            transition-all
            duration-200
            transform: scale(1.1)
            hover:-translate-x-1
            hover:scale(1)
            cursor-pointer
          "
        >
          {vote_average}
        </span>
      </p>
    </div>
  );
};

export default memo(MovieItem);
