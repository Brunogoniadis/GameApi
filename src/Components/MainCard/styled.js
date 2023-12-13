import styled, { css } from "styled-components";


const commonStyles = css`
    background-size: cover; 
    background-position: center;
    border-radius: 10px;
    border: 1px transparent;
    overflow: hidden; 
    position: relative;
    object-fit: cover;
    transition: filter 0.3s ease; 


  

    .overlay {
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%);
        opacity: 0;
        transition: opacity 0.3s ease;
        border-radius: 10px;
    }
    .overlay::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 10px;
        border: 5px solid transparent;
        background: linear-gradient(45deg, transparent, #750288) border-box;
        -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
    }
    &:hover .overlay {
        opacity: 1;
    }
`;

export const MainCardWrapper = styled.button`
    ${commonStyles}
    width: 585px;
    height: 340px;
    h2 {
        font-size: 36px;
        margin-top: 5rem;
        margin-right:  40rem;
        font-weight: bold;
        transform: translateX(-90%); 
        transition: transform 0.3s ease;
        z-index: 500;
        color: white;
        width: 100%;
    }
    &:hover h2 {
        transform: translateX(0);
    }
`;

export const MiniCardWrapper = styled.button`
    ${commonStyles}
    width: 140px;
    height: 90px;
    h2 {
        width: 100%;
        font-size: 16px;
        margin-top: 5rem;
        margin-right:  40rem;
        font-weight: bold;
        transform: translateX(-190%); 
        transition: transform 0.3s ease;
        color: white;
    }
    &:hover h2 {
        transform: translateX(0);
    }
`;


export const CaroselCardWrapper = styled.button`
    ${commonStyles}
    width: 175px;
    height: 218px;


    clip-path: polygon(30% 0%, 70% 0%, 100% 0, 100% 70%, 70% 100%, 30% 100%, 0 100%, 0% 30%);

    h2 {
        width: 100%;
        font-size: 16px;
        margin-top: 5rem;
        margin-right:  40rem;
        font-weight: bold;
        transform: translateX(-190%); 
        transition: transform 0.3s ease;
        color: white;
    }
    &:hover h2 {
        transform: translateX(0);
    }
`;
