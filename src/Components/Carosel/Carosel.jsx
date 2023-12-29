import React, { useEffect, useState } from "react";
import { CaroselWrapper, CustomSlider, CaroselChild } from './style'
import MainCard from './../../Components/MainCard/MainCard'
import { Link } from 'react-router-dom'

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
};

function Carosel({ items }) {
    const [itemsState, setItemsState] = useState([]);

    useEffect(() => {
        setItemsState(items);
    }, [items]);

    console.log("CAROSELITEMS", itemsState);

    return (
        <CaroselWrapper>
            <CustomSlider {...settings}>

                {itemsState.map((item, index) => (
                    <Link to={`/Category/${item.id.toString()}/${encodeURIComponent(item.name)}`}

                    >

                        <MainCard
                            key={index}
                            variant="carosel"
                            gameName={item.name}
                            backgroundUrl={item.image_background}
                        />
                    </Link>
                ))}
            </CustomSlider>
        </CaroselWrapper>
    );
}

export default Carosel;
