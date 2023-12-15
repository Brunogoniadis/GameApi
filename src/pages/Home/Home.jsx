
import { HomeWrapper } from './styles';
import MainCard from '../../Components/MainCard/MainCard'
import Carosel from '../../Components/Carosel/Carosel';
import GlobalAPI from '../../services/GlobalApi';
import React, { useEffect, useState } from "react";

function Home() {

    const globalAPI = new GlobalAPI();

    const [genreList, setGenreList] = useState([]);

    useEffect(() => {

        globalAPI.getGenreList().then(response => {
            setGenreList(response.data.results);
        });

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
                                gameName="Hogwarts Legacy"
                                backgroundUrl="https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-2baf3188eb3c1aa248bcc1af6a927b7e"
                            />

                        </div>
                        <div className='right-wrapper'>
                            <h2 className='title-text'>
                                More recommended
                            </h2>
                            <div className="others-container">

                                <MainCard variant="mini"
                                    gameName="The Witcher 4"
                                    backgroundUrl="https://img.olhardigital.com.br/wp-content/uploads/2022/03/The-Witcher-nova-saga.png" />

                                <MainCard variant="mini"
                                    gameName="Far Cry 6"
                                    backgroundUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlA8tzu9uav2s3dx3GW7qfEk62j4zVJtjHLQ&usqp=CAU" />


                                <MainCard variant="mini"
                                    gameName="Dying Light 2 "
                                    backgroundUrl="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DyingLight2StayHuman_Techland_Editions_S1_2560x1440-b1653c3096cf75c47c9a09a1a85b57a8"
                                />

                                <MainCard variant="mini"
                                    gameName="The Day Before"
                                    backgroundUrl="https://assetsio.reedpopcdn.com/The-Day-Before_wNRBJDK.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
                                />

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