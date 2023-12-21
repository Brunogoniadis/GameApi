import React, { useState, useEffect } from 'react';
import { GameWrapper } from './styles';
import GlobalAPI from '../../services/GlobalApi';

function Game() {

    const globalAPI = new GlobalAPI();
    const gameId = 3498;

    const [gameDetails, setGameDetails] = useState(null);
    const [gameScreenshots, setGameScreenshots] = useState([]);

    useEffect(() => {
        // Obtém os detalhes do jogo
        globalAPI.getGameDetails(gameId)
            .then(response => {
                setGameDetails(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        // Obtém as screenshots do jogo
        if (gameDetails) {
            globalAPI.getGameScreenshots(gameId)
                .then(response => {
                    setGameScreenshots(response.data.results);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [gameDetails]);



    useEffect(() => {
        console.log('HERE:', gameDetails);
    }, [gameDetails])

    const englishDescription = gameDetails?.description?.split('<p>')[1]?.split('</p>')[0];


    return (

        <>
            {gameDetails && (
                <GameWrapper backgroundImage={gameDetails.background_image_additional ? gameDetails.background_image_additional : null}>
                    <div className="title">
                        <h2>{gameDetails.name}</h2>
                    </div>
                    <div className="center-wrapper">
                        <div className="images-wrapper">
                            <img
                                className="principal-image-container"
                                src={gameDetails.background_image}
                                alt={gameDetails.name}
                            />

                            <div className="others-image-grid">
                                {gameScreenshots.slice(0, 4).map(screenshot => (
                                    <img
                                        key={screenshot.id}
                                        src={screenshot.image}
                                        alt={`Screenshot ${screenshot.id}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="descriptions-container">
                            <p>{englishDescription}</p>

                        </div>
                    </div>

                    <div className='misc-infos-wrapper'>
                        <div className="misc-info-container">
                            <div className="title-misc">
                                <h3>teste</h3>
                            </div>
                            <div className="content">
                                teste
                            </div>
                        </div>
                    </div>
                </GameWrapper>
            )}
        </>
    );

}

export default Game;
