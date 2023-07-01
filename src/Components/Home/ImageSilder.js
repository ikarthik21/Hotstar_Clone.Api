import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ImageSilder = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrapper>
        <Link to="/movie/mv52" key="mv52"  >

          <img src="/images/movies/bramhastramain.jpg" alt="" />
        </Link>
      </Wrapper>
      <Wrapper>
        <Link to="/movie/mv53" key="mv53"  >

          <img src="/images/movies/pathaan.jpg" alt="" />
        </Link>
      </Wrapper>
      <Wrapper>
        <Link to="/movie/mv54" key="mv54"  >

          <img src="/images/movies/sitaramam.jpg" alt="" />

        </Link>
      </Wrapper>

      <Wrapper>
        <Link to="/movie/mv55" key="mv55"  >
          <img src="/images/movies/ramsetu.jpg" alt="" />
        </Link>
      </Wrapper>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
    }
    height: 500px;
  }
  ul li button {    
    &:before {
      font-size: 11px;
      color: white;
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;   
  } 
`;

const Wrapper = styled.div`
 margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  a {
    cursor: pointer;
    display: block;
    border-radius: 5px;     
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    position: relative;
    padding: 5px;
    img {
       width: 100%;
       height: 100%;
       object-fit:center;
       opacity: 0.85; 
    }
    &:hover {
      padding: 0; 
      transition-duration: 300ms;
      box-shadow: -1px 1px 5px 6px rgba(173,172,172,0.3);
      -webkit-box-shadow: -1px 1px 5px 6px rgba(173,172,172,0.3);
      -moz-box-shadow: -1px 1px 5px 6px rgba(173,172,172,0.3);
    } 
    height : 520px; 
  }
  @media (min-width: 200px )and (max-width : 600px){
     a {
     height: 33vh;
      width:  96vw;
      padding: 2px;
         }
      }
`;

export default ImageSilder;
