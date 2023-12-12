import React from 'react';
import { MiniCardWrapper, MainCardWrapper } from './styled';

function MainCard({ variant }) {
    const cardContent = variant === 'mini' ? (
        <MiniCardWrapper>
            <div className="overlay"></div>
            <h2>The Last of Us</h2>
        </MiniCardWrapper>
    ) : (
        <MainCardWrapper>
            <div className="overlay"></div>
            <h2>The Last of Us</h2>
        </MainCardWrapper>
    );

    return (
        <div>
            {cardContent}
        </div>
    );
}

export default MainCard;