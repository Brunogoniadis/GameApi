// Importe as bibliotecas e componentes necessários
import React, { useEffect, useState } from "react";
import { HeaderWrapper, Navigation } from "./styles";
import GlobalAPI from "../../services/GlobalApi";
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import logo from '../../assets/logo.svg';


function Header() {
  const globalAPI = new GlobalAPI();
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    globalAPI.getGenreList().then(response => {
      setGenreList(response.data.results);
    });
  }, []);

  console.log("RESULT", genreList);

  const handleSearch = async (query, setSearchGamesLocal) => {
    try {
      const searchResults = await globalAPI.searchGames(query);
      setSearchGamesLocal(searchResults.data.results);
      console.log('Resultados da busca:', searchResults.data.results);
    } catch (error) {
      console.error('Erro na busca:', error);
    }
  };

  return (
    <HeaderWrapper>
      <div className="MainContainer">
        <Navigation>

          <Link className="Logo"
            to={'/'}
          >
            <img src={logo} alt="Logo" />
          </Link>

          <ul>
            <li>
              <a href="#">
                <h3>Category</h3>
                <div className="category-menu">
                  {genreList.map(genre => (
                    <Link
                      className="link-class"
                      to={`/Category/${genre.id.toString()}/${encodeURIComponent(genre.name)}`}
                      key={genre.id}>
                      {genre.name}
                    </Link>
                  ))}
                </div>
              </a>
            </li>
            <li><a href="#"><h3>Community</h3></a></li>
            <li><a href="#"><h3>About</h3></a></li>
          </ul>
        </Navigation>

        <Search onChange={handleSearch} />
      </div>
    </HeaderWrapper>
  );
}

export default Header;
