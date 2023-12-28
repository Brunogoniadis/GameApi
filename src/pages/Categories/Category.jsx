// Category.js

import React, { useEffect, useState } from 'react';
import { MainDiv } from './styles';
import MainCard from '../../Components/MainCard/MainCard';
import GlobalAPI from '../../services/GlobalApi';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Category() {
  const globalAPI = new GlobalAPI();

  const { categoryId, categoryName } = useParams();

  const [categoryGames, setCategoryGames] = useState([]);

  useEffect(() => {
    globalAPI.getGamesByGenre(categoryId)
      .then(response => {
        setCategoryGames(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });

  }, [categoryId]);

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'instant' });
  })


  // Organize as letras em ordem alfabética
  const sortedLetters = Object.keys(categoryGames.reduce((letters, game) => {
    const firstLetter = game.name.charAt(0).toLowerCase();
    if (!letters[firstLetter]) {
      letters[firstLetter] = true;
    }
    return letters;
  }, {})).sort();

  // Organize os jogos por letra
  const gamesByLetter = {};
  categoryGames.forEach(game => {
    const firstLetter = game.name.charAt(0).toLowerCase();
    if (!gamesByLetter[firstLetter]) {
      gamesByLetter[firstLetter] = [];
    }
    gamesByLetter[firstLetter].push(game);
  });

  console.log("categoryGames", categoryGames);

  return (
    <MainDiv>
      <div className='content'>
        <div className='title'>
          {categoryName}
        </div>
        <div className="game-wrapper">
          {sortedLetters.map(letter => (
            <div key={letter} className='game-group'>
              <div className='letter-header'>{letter.toUpperCase()}
                <div className="border" />
              </div>
              <div className='grid-games'>
                {gamesByLetter[letter].map(game => (
                  <Link
                    to={`/category/${categoryId}/${encodeURIComponent(categoryName)}/${game.id}`}
                    key={game.id}
                  >
                    <MainCard
                      variant="category"
                      gameName={game.name}
                      backgroundUrl={game.background_image}
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </MainDiv>
  );
}

export default Category;
