import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Wrapper, settings } from '../Home/SliderDesign';

const Retro = (props) => {
  const { movies } = props;
  return (
    <>
      <h1>Retro</h1>
      <Carousel   {...settings} >
        {
          movies.filter((val, idx) =>
            val.movie_genre.toLowerCase().includes("retro")).map((val) => (
              <Link to={"/movie/" + val.movie_id} key={val.movie_id} >

                <Wrapper key={val.movie_id} >
                  <img src={`${val.movie_img}`} alt="" />
                </Wrapper>
              </Link>
            ))
        }
      </Carousel>

    </>
  )
}

export default Retro;