import React from 'react'
import { CaroselWrapper, CustomSlider, CaroselChild } from './style'
import MainCard from './../../Components/MainCard/MainCard'

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
};

function Carosel() {
    return (
        <CaroselWrapper>
            <CustomSlider {...settings}>

                <MainCard variant="carosel"
                    gameName="Mortal Kombat 1"
                    backgroundUrl="https://sm.ign.com/t/ign_br/screenshot/default/mortalkombat-7mins-blogroll-1-1547679583972-1280w_f8zx.1200.jpg" />

                <MainCard variant="carosel"
                    gameName="Mirros Edge"
                    backgroundUrl="https://image.api.playstation.com/cdn/UP0006/CUSA01566_00/GNzYmR2mZswWvkc2qTMMCRtWeU78y4gj.png" />

                <MainCard variant="carosel"
                    gameName="Flatout 2"
                    backgroundUrl="https://upload.wikimedia.org/wikipedia/en/4/40/Flatout2pc.jpg" />


                <MainCard variant="carosel"
                    gameName="Horizon Chase"
                    backgroundUrl="https://files.tecnoblog.net/wp-content/uploads/2020/12/10_jogos_pc_horizon_chase.jpg" />


                <MainCard variant="carosel"
                    gameName="God of War"
                    backgroundUrl="https://m.media-amazon.com/images/I/81gXqxyFrxL._AC_UF1000,1000_QL80_.jpg" />



            </CustomSlider>

        </CaroselWrapper>
    )
}

export default Carosel;