import React, { useEffect, useState } from 'react';
import { MainDiv } from './styles';
import MainCard from '../../Components/MainCard/MainCard';
import GlobalAPI from '../../services/GlobalApi';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


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
  }, []);

  useEffect(() => {
    console.log("categoryId", categoryId)
  }, [])

  console.log("categoryGames", categoryGames)

  return (
    <MainDiv>
      <div className='content'>
        <div className='title'>
          {categoryName}
        </div>
        <div className='grid-games'>
          {categoryGames.map(game => (
            <Link to={`/category/${categoryId}/${encodeURIComponent(categoryName)}/${game.id}`} key={game.id}>
              <MainCard
                variant="category"
                gameName={game.name}
                backgroundUrl={game.background_image}
              />
            </Link>
          ))}
        </div>
      </div>
    </MainDiv>
  );

}

export default Category;
