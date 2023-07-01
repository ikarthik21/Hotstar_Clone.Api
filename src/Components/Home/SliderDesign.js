import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components';

const RightArr = (props) => {
    const { className, onClick } = props;

    return (
        <div className={className} onClick={onClick}>
            <img src="/images/right_arrow.png" alt="" />
        </div>
    );
}

const LeftArr = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick} >
            <img src="/images/left_arrow.png" alt="" />
        </div>
    );
}

export const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed:500,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
    nextArrow: <RightArr />,
    prevArrow: <LeftArr />,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                infinite: true,
            }
        }
    ]
};

const Action = () => {
    return (
        <Carousel {...settings}></Carousel>
    )
}



export const Carousel = styled(Slider)`
font-family: 'Poppins', sans-serif;  
.slick-slide {
  margin : 0px 2px;
} 
  z-index:0;
  .slick-next {
     font-size: 15px !important;
        height: 27vh;
       width: 50px;
     display:flex;
     align-items:center;
     justify-content:center;
     opacity:0;
     border-radius: 5px;       
    &:hover{
        opacity:1;
        background: rgb(31,102,170);
        background: radial-gradient(circle, rgba(31,102,170,0.9360994397759104) 46%, rgba(37,158,241,0.6559873949579832) 56%, rgba(22,21,21,0.7288165266106443) 87%);
      }
  }

.slick-prev{
     display:flex;
     align-items:center;
     justify-content:center;
     font-size: 15px !important;
      height: 27vh;
     width: 50px;
     z-index:4;
     opacity :0;   
  &:hover{
    opacity:1;
    background: rgb(31,102,170);
    background: radial-gradient(circle, rgba(31,102,170,0.9360994397759104) 46%, rgba(37,158,241,0.6559873949579832) 56%, rgba(22,21,21,0.7288165266106443) 87%);
  }
}  
.slick-prev:before, .slick-next:before{
    content: '' !important;
}

`;

export const Wrapper = styled.div`
cursor:pointer;
z-index:0;
border-radius: 6px;
padding: 25px 3px;
display:flex;
align-items :center;
justify-content:center;
object-fit: center;
img {
  inset: 0px;
   object-fit: center;
   height: 27vh;
   width:  10vw; 
    z-index: 1;
   border-radius: 7px;
   top: 0;
  &:hover{
    transition-duration: 0.45s;
    z-index: 5;
    transform : scale(1.3,1.28);  
  }

}

@media (min-width: 1000px) and (max-width: 1200px) {  
    img{
        height: 25vh;
        width:  11vw; 
    }
    .slick-prev{
        width: 30px;
    }
    .slick-next{
        width: 30px;
    }
  }


@media (min-width: 800px) and (max-width: 1000px) {
  
    img{
        height: 23vh;
        width:  16vw; 
    }
    .slick-prev{
        width: 30px;
    }
    .slick-next{
        width: 30px;
    }
  }
  
  @media (min-width: 600px) and (max-width: 800px) {
    img{
        height: 23vh;
        width:  15vw; 
    }
    .slick-prev{
        width: 30px;
    }
    .slick-next{
        width: 30px;
    }
  }

@media (min-width: 480px) and (max-width: 600px) {  
    img{
        height: 21vh;
        width:  20vw; 
    }
    .slick-prev{
        width: 30px;
    }
    .slick-next{
        width: 30px;
    }
  }   

@media (min-width: 200px) and (max-width: 480px) {  
    img{
        height: 23vh;
        width:  32vw; 
    }
  }
`;


export default Action;