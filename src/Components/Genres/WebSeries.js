import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Wrapper, settings } from '../Home/SliderDesign';

const WebSeries = (props) => {
  const { movies } = props;
  return (

    < div id='webseries'>
      <h1 >Web Series</h1>
      <Carousel   {...settings} >
        {
          movies.filter((val, idx) =>
            val.movie_genre.toLowerCase().includes("web series")).map((val) => (
              <Link to={"/movie/" + val.movie_id} key={val.movie_id} >

                <Wrapper key={val.movie_id}>
                  <img src={`${val.movie_img}`} alt="" />
                </Wrapper>
              </Link>
            ))
        }
      </Carousel>

    </div>
  )
}

export default WebSeries;