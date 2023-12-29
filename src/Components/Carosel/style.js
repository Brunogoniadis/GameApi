import styled from "styled-components";
import Slider from 'react-slick';

import arrowLeft from '../../assets/arrowLeft.png'
import arrowRight from '../../assets/arrowRight.png'


export const CaroselWrapper = styled.div`
    width: 100%;
    height: 396px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const CustomSlider = styled(Slider)`
  *{
    text-decoration: none;
  }

  .slick-list{
    width: 940px;
    height: 220px;

    display: grid;

    margin-bottom: 2rem;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;

    }


  }



  .slick-prev,
  .slick-next {
    font-size: 24px;
    background-color: red; 
    height: 170px;
    background-color: transparent;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    
  }

  .slick-prev:hover,
  .slick-next:hover {
    background-size: 105%;
  }

  .slick-prev {

    background-image: url(${arrowLeft});

  }

  .slick-next {

background-image: url(${arrowRight});


}

.slick-next:before,  .slick-prev:before {
    content: '';
}


  .slick-dots {
  display: flex !important;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
}

.slick-dots li {
  display: flex;
  position: relative;
  width: auto;
  margin: 6px -10px;
}

.slick-dots button {
  font-size: 0;
  color: transparent;
  background-color: #8d3986;
  border-radius: 57px;
  width: 63px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 500;
  transition: background-color 0.3s ease; 

  border: 6px solid #8d3986;

  ::before {
    color: transparent;
  }
}

    .slick-dots li.slick-active button:before {
    color: transparent;
    }

    .slick-dots li button:before {
    color: transparent;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    }

    .slick-dots li.slick-active button {
    background-color: #570b4a;
    border: 6px solid #570b4a;
    position: relative;
    z-index: 501;

    }

`;


export const Slide = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #ddd; 
  border-radius: 8px; 
`;


export const CaroselChild = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 190px !important;
    height: 120px;

    clip-path: polygon(30% 0%, 70% 0%, 100% 0, 100% 70%, 70% 100%, 30% 100%, 0 100%, 0% 30%);

    position: relative;

    .overlay {
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%);
        opacity: 0;
        transition: opacity 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .overlay::before {
        content: "";
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 96%;
        height: 96%;
        border: 5px solid transparent;
        clip-path: polygon(30% 0%, 70% 0%, 100% 0, 100% 70%, 70% 100%, 30% 100%, 0 100%, 0% 30%);

        background: linear-gradient(45deg, transparent, #750288) border-box;

        mask-composite: exclude;
    }
    &:hover .overlay {
        opacity: 1;
    }

`