import React, { useState, useEffect } from 'react';
import { GameWrapper, CenterWrapper } from './styles';
import GlobalAPI from '../../services/GlobalApi';
import { useParams } from 'react-router-dom';

import esrbLogo1 from '../../../src/assets/esrb_ratings/1.svg';
import esrbLogo2 from '../../../src/assets/esrb_ratings/2.svg';
import esrbLogo3 from '../../../src/assets/esrb_ratings/3.svg';
import esrbLogo4 from '../../../src/assets/esrb_ratings/4.svg';
import esrbLogo5 from '../../../src/assets/esrb_ratings/5.svg';
import esrbLogo6 from '../../../src/assets/esrb_ratings/6.svg';
import esrbLogo7 from '../../../src/assets/esrb_ratings/7.svg';

import ImageResizer from 'react-image-resizer';


function Game() {

    const globalAPI = new GlobalAPI();

    const { gameId } = useParams();

    const game = gameId;

    const [gameDetails, setGameDetails] = useState(null);
    const [gameScreenshots, setGameScreenshots] = useState([]);

    const [imageLoaded, setImageLoaded] = useState(false);


    const esrbLogos = {
        '1': esrbLogo1,
        '2': esrbLogo2,
        '3': esrbLogo3,
        '4': esrbLogo4,
        '5': esrbLogo5,
        '6': esrbLogo6,
        '7': esrbLogo7,
    };
    const [esbrClas, setEsbrClas] = useState(null);

    const [metacriticColor, setMetacriticColor] = useState('');



    useEffect(() => {
        globalAPI.getGameDetails(game)
            .then(response => {
                setGameDetails(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [game]);

    useEffect(() => {
        // Obtém as screenshots do jogo
        if (gameDetails) {
            globalAPI.getGameScreenshots(game)
                .then(response => {
                    setGameScreenshots(response.data.results);
                })
                .catch(error => {
                    console.error(error);
                });

            if (gameDetails?.esrb_rating?.id && gameDetails.esrb_rating.id >= '1' && gameDetails.esrb_rating.id <= '7') {
                setEsbrClas(esrbLogos[gameDetails.esrb_rating.id]);
            } else {
                // Caso o ID seja inválido
                setEsbrClas(null);
            }


            const metacriticScore = gameDetails?.metacritic;

            if (metacriticScore >= 90) {
                setMetacriticColor('#00ce7a');
            } else if (metacriticScore >= 70) {
                setMetacriticColor('#ffbd3f');
            } else {
                setMetacriticColor('#ff6874');
            }


        }
    }, [gameDetails]);

    const englishDescription = gameDetails?.description?.split('<p>')[1]?.split('</p>')[0];

    function resizeImg(image) {
        console.log("imageURL", image)
        
        const resizedImageUrl = image.replace('/media/', '/media/crop/600/400/');
        
        console.log("resizedImageUrl", resizedImageUrl);


        return resizedImageUrl;
    }

    return (

        <>
            {gameDetails && (
                <GameWrapper >
                    <div className="title">
                        <h2>{gameDetails.name}</h2>
                    </div>
                    <CenterWrapper backgroundImage={gameDetails.background_image_additional ? gameDetails.background_image_additional : null}>

                        <div className="overlay">

                            <div className="images-wrapper">
                                <img
                                    className="principal-image-container"
                                    src={resizeImg(gameDetails.background_image)}
                                    alt={gameDetails.name}
                                />

                                <div className="others-image-grid">
                                    {gameScreenshots.slice(0, 4).map(screenshot => (
                                        <img
                                            loading="lazy"
                                            key={screenshot.id}
                                            src={resizeImg(screenshot.image)}
                                            alt={`Screenshot ${screenshot.id}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="descriptions-container">
                                <p>{englishDescription}</p>

                            </div>
                        </div>

                    </CenterWrapper>


                    <div className='misc-infos-wrapper'>
                        <div className="misc-info-container">
                            <div className="title-misc">
                                <h3>ESRB  rate</h3>
                            </div>
                            <div className="content">
                                {esbrClas && <img src={esbrClas} alt={`ESRB Logo ${gameDetails.esrb_rating.id}`} />}

                            </div>
                        </div>

                        <div className="misc-info-container">
                            <div className="title-misc">
                                <h3>Metacritic <br /> Score</h3>
                            </div>
                            <div className="score" style={{ backgroundColor: metacriticColor }}>
                                {gameDetails?.metacritic}
                            </div>
                        </div>

                        <div className="misc-info-container">
                            <div className="title-misc">
                                <h3>Reddit <br />Community</h3>
                            </div>
                            <div className="content">
                                <a href={gameDetails?.reddit_url} target="_blank" rel="noopener noreferrer">https://www.reddit.com</a>
                            </div>
                        </div>

                        <div className="misc-info-container" style={{ width: '262px' }}>
                            <div className="title-misc" >
                                <h3>Stores</h3>
                            </div>
                            <div className="content">

                                {gameDetails?.stores?.map(item => (
                                    <a
                                        key={item.id}
                                        href={item.store.domain ? (item.store.domain.startsWith('http') ? item.store.domain : 'http://' + item.store.domain) : '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"

                                    >

                                        {item.store.domain}
                                    </a>
                                ))}

                            </div>
                        </div>

                    </div>
                </GameWrapper>
            )}
        </>
    );

}

export default Game;
