
import { HomeWrapper } from './styles';
import MainCard from '../../Components/MainCard/MainCard'
import Carosel from '../../Components/Carosel/Carosel';
import GlobalAPI from '../../services/GlobalApi';
import React, { useEffect, useState } from "react";

function Home() {

    const globalAPI = new GlobalAPI();

    const [genreList, setGenreList] = useState([]);

    const [gameDetails1, setGameDetails1] = useState(null);
    const [gameDetails2, setGameDetails2] = useState(null);
    const [gameDetails3, setGameDetails3] = useState(null);
    const [gameDetails4, setGameDetails4] = useState(null);
    const [gameDetails5, setGameDetails5] = useState(null);


    useEffect(() => {

        globalAPI.getGenreList().then(response => {
            setGenreList(response.data.results);
        });

        globalAPI.getGameDetails(364806)
            .then(response => {

                setGameDetails1(response.data);
            })
        globalAPI.getGameDetails(3678)
            .then(response => {
                setGameDetails2(response.data);
            })
        globalAPI.getGameDetails(4386)
            .then(response => {
                setGameDetails3(response.data);
            })
        globalAPI.getGameDetails(624)
            .then(response => {
                setGameDetails4(response.data);
            })
        globalAPI.getGameDetails(28199)
            .then(response => {
                setGameDetails5(response.data);
            })


    }, []);

    return (
        <HomeWrapper>

            <div className="Content">
                <div className="BannerWrapper">
                    <div className="banner-container">

                    </div>
                </div>
                <section className="main-section">
                    <div className='main-title'>
                        <h3>
                            Recommended
                        </h3>
                    </div>
                    <div className='recommended-games'>
                        <div className="left-wrapper">
                            <MainCard variant="main"
                                gameName={gameDetails1?.name}
                                backgroundUrl={gameDetails1?.background_image}
                            />

                        </div>
                        <div className='right-wrapper'>
                            <h2 className='title-text'>
                                More recommended
                            </h2>
                            <div className="others-container">

                                <MainCard variant="mini"
                                    gameName={gameDetails2?.name}
                                    backgroundUrl={gameDetails2?.background_image} />

                                <MainCard variant="mini"
                                    gameName={gameDetails3?.name}
                                    backgroundUrl={gameDetails3?.background_image} />

                                <MainCard variant="mini"
                                    gameName={gameDetails4?.name}
                                    backgroundUrl={gameDetails4?.background_image} />

                                <MainCard variant="mini"
                                    gameName={gameDetails5?.name}
                                    backgroundUrl={gameDetails5?.background_image} />

                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className='main-section'>
                <div className='main-title'>
                    <h3>
                        Recommended by you
                    </h3>
                </div>
                <Carosel items={genreList} />

            </section>



        </HomeWrapper>
    );
}


export default Home