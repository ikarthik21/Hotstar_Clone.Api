import styled from 'styled-components';

import React from 'react';

const Movies = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <img src="/images/eroslogo.png" alt="" />
                    <video autoPlay muted loop={true} playsInline={true}>
                        <source
                            src="/videos/eros.mp4"
                            autoPlay
                            loop
                            muted
                            type="video/mp4"
                        />
                    </video>

                </Wrapper>
                <Wrapper>
                    <img src="/images/marvel.png" alt="" />

                    <video autoPlay muted loop={true} playsInline={true}>
                        <source
                            src="/videos/marvel_video.mp4"
                            autoPlay
                            loop
                            muted
                            type="video/mp4"
                        />
                    </video>

                </Wrapper>
                <Wrapper>
                    <img src="/images/bhansalilogo.png" alt="" />
                    <video autoPlay muted loop={true} playsInline={true}>
                        <source
                            src="/videos/bhansali.mp4"
                            autoPlay
                            loop
                            muted
                            type="video/mp4"
                        />
                    </video>

                </Wrapper>
                <Wrapper>
                    <img src="/images/dharmalogo.png" alt="" />

                    <video autoPlay muted loop={true} playsInline={true}>
                        <source
                            src="/videos/dharma.mp4"
                            autoPlay
                            loop
                            muted
                            type="video/mp4"
                        />
                    </video>

                </Wrapper>
                <Wrapper>
                    <img src="/images/movies/yrflogo.png" alt="" />

                    <video autoPlay muted loop={true} playsInline={true}>
                        <source
                            src="/videos/yrf.mp4"
                            autoPlay
                            loop
                            muted
                            type="video/mp4"
                        />
                    </video>

                </Wrapper>
            </Container>
        </div>
    );
};

const Container = styled.div`
margin-top: 35px;
 padding : 30px 0px 25px;
 display :grid;
 grid-gap : 25px; 
 grid-template-columns: repeat(5, minmax(0, 1fr));

 
 
@media (min-width : 600px )and (max-width : 800px){
    grid-template-columns : repeat(2,minmax(0, 2fr));
}

@media (min-width: 200px )and (max-width : 600px){
    grid-template-columns : repeat(1,minmax(0, 1fr));
    margin: 2px 30px;
}



`;

const Wrapper = styled.div`
padding-top: 56.25%;
   border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    overflow:hidden;
    cursor:pointer;
    position : relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);
  img{
    inset : 0px;
    display: block;
    height: 100%;
    object-fit:  center/cover;
    width: 100%;
    z-index:1;
    position :absolute;
    opacity:1;
    transition: opacity 500ms ease-in-out 0s;
    top: 0;
    
  }

img:hover{
    border: 4.2px solid white;
    opacity:0;
}


         video{
            height: 100%;
            width: 100%;
            position: absolute;
            opacity: 0;
            top: 0;           
            z-index: 0;
         }


         &:hover{
            box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
              rgb(0 0 0 / 73%) 0px 16px 10px -10px;
     
               transform: scale(1.10);
      

                video{
                    opacity: 1;
                }

     
         }


         display:flex;
         align-items:center;
         justify-content:center;


`;
export default Movies;
