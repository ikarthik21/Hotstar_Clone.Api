import React, { useEffect, useState } from "react";
import { Carousel, Wrapper, settings } from '../Home_Components/SliderDesign';
import { Link } from "react-router-dom";

const Comedy = () => {
  const [MOVIES, setMovie] = useState([]);
  useEffect(() => {
    fetch(`https://movieapi-kk.onrender.com/movies`)
      .then((res) => res.json())
      .then((json) => {
        const movies = Object.values(json[0]).map(movie => {
          const convertedMovie = {
            movie_id: movie.movie_id,
            movie_genre: movie.movie_genre,
            movie_img: movie.movie_img,
          };
          return convertedMovie;
        });
        setMovie(movies);
      }
      );
  }, []);

  return (

    <>
      <h1>Comedy</h1>
      <Carousel   {...settings} >
        {
          MOVIES.filter((val, idx) =>
            val.movie_genre.toLowerCase().includes("comedy")).map((val) => (
              <Link to={"/movie/" + val.movie_id} key={val.movie_id} >

                <Wrapper key={val.movie_id}>
                  <img src={`${val.movie_img}`} alt="" />
                </Wrapper>
                
              </Link>
            ))
        }
      </Carousel>

    </>
  )
}

export default Comedy;