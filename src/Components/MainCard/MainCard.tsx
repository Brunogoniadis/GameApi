import React from 'react';
import { MiniCardWrapper, MainCardWrapper, CaroselCardWrapper } from './styled';
import { useState } from 'react';

function MainCard({ variant, gameName,backgroundUrl }) {

    const [backgorundlink, setBackgroundlink] = useState(backgroundUrl)

    console.log(backgroundUrl)
    let cardContent;

    if (variant === 'mini') {
        cardContent = (
            <MiniCardWrapper style={{ backgroundImage: `url(${backgroundUrl})` }} >

                <div className="overlay"></div>
                <h2>{gameName}</h2>
            </MiniCardWrapper>
        );
    } else if (variant === 'carosel') {
        cardContent = (
            <CaroselCardWrapper style={{ backgroundImage: `url(${backgroundUrl})` }}>
                <div className="overlay"></div>
                <h2>{gameName}</h2>
            </CaroselCardWrapper>
        );
    } else {
        cardContent = (
            <MainCardWrapper style={{ backgroundImage: `url(${backgroundUrl})` }}>
                <div className="overlay"></div>
                <h2>{gameName}</h2>
            </MainCardWrapper>
        );
    }

    return (
        <div>
            {cardContent}
        </div>
    );
}

export default MainCard;