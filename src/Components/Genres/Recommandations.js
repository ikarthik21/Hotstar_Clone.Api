import React, { useEffect, useState } from "react";
import { Carousel, Wrapper, settings } from '../Home/SliderDesign';
import { Link } from "react-router-dom";

const Recommandations = (props) => {
  const { movies } = props;
  console.log(movies)
  const [recomm, setRecomm] = useState([])
  useEffect(() => {
    const genres = ["drama", "romance", "sports"];
    const filteredMovies = movies.filter(val => {
      const movieGenres = val.movie_genre.toLowerCase().split(",");
      return movieGenres.some(genre => genres.includes(genre.trim()));
    });
    setRecomm(filteredMovies);
  }, [])
  return (
    <>
      <h1 id="recommonded">Recommended</h1>
      <Carousel {...settings}>
        {recomm.map(val => (
          <Link to={"/movie/" + val.movie_id} key={val.movie_id}  >
            <Wrapper key={val.movie_id}>
              <img src={`${val.movie_img}`} alt="" />
            </Wrapper>
          </Link>
        ))}
      </Carousel>
    </>
  );
};


export default Recommandations;