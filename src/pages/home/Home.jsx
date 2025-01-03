import { request } from "@/api";
import Carousel from "@/components/carousel/Carousel";
// import Footer from "@/components/footer/Footer";
import Movies from "@/components/movies/Movies";
import React, { memo, useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    request("/discover/movie").then((res) => {
      setData(res.data);
    });
  }, []);
  
  return (
    <div className="bg-black">
      <Carousel data={data} />
      <Movies data={data}/>
    </div>
  );
};

export default memo(Home);
